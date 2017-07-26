'use strict'

/*
 *
 * http请求工具类
 * eg：
 * 		import axios from 'common/httpUtils';
        axios({
		  method:'get',
		  url: 'xxxx/xxxxx',
		  params: {
		    id:id,
		    token:token
		  }
		})
		.then(response => {
		  sucess(response);
		}).catch(error => {
			error(error);
		});
 * 		axios({
		  method:'post',
		  url: 'xxxx/xxxxx',
		  data: {
		  	id:id,
		    token:token
		  }
		}).then(response => {
		    sucess(response);
		}).catch(error => {
			error(error);
		});

 *  并发执行

		function getUserAccount() {
		  return axios.get('/user/12345');
		}

		function getUserPermissions() {
		  return axios.get('/user/12345/permissions');
		}

		axios.all([getUserAccount(), getUserPermissions()])
		  .then(axios.spread(function (acct, perms) {
		    // Both requests are now complete
		  }));
 *
 */

// import iview from 'iview';
require('es6-promise').polyfill()
import axios from 'axios'
import consts from './consts'
import openMethod from './openMethod'
import api from 'api'
import cacheUtils from './cacheUtils'
import utils from './utils'
import logger from './logUtils'

axios.defaults.timeout = 5000
axios.defaults.hasGlobalSpin = true
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// axios.defaults.baseURL = 'http://www.guinaben.com:8070';

// POST传参序列化,增加token
axios.interceptors.request.use((config) => {
	if(!cacheUtils.localStorage(consts.INSTANCE_ID).get(consts.INSTANCE_ID)) {
		cacheUtils.localStorage(consts.INSTANCE_ID).set(consts.INSTANCE_ID, utils.uuidV4().replace(new RegExp(/(-)/g), ''))
	}
	config.headers[consts.INSTANCE_ID] = cacheUtils.localStorage(consts.INSTANCE_ID).get(consts.INSTANCE_ID)
	config.headers[consts.ACCESSTOKEN] = cacheUtils.cookie.get(consts.ACCESSTOKEN)
	config.headers[consts.APP_NAME] = 'DOS'
	logger.log('请求参数:' + JSON.stringify(config))
	// 加载loading动画
	//	iview.LoadingBar.start();
	if(config.hasGlobalSpin === true) {
		// document.querySelector('#global-spin').style.display = 'block'
	}
	return config
}, (error) => {
	console.log('错误的传参')
	//	iview.LoadingBar.error();
	// document.querySelector('#global-spin').style.display = 'none'
	return Promise.reject(error)
})
axios.interceptors.response.use((res) => {
	if(res.headers[consts.ACCESSTOKEN]) {
		cacheUtils.cookie.set(consts.ACCESSTOKEN, res.headers[consts.ACCESSTOKEN])
		console.log(cacheUtils.cookie.get(consts.ACCESSTOKEN))
	}
	logger.log('请求结果:' + JSON.stringify(res.data))
	//	iview.LoadingBar.finish();

	if(res.data.error_code == consts.ERROR_CODE.INSTANCE_ID_NO_ACCESS_TOKEN || res.data.error_code == consts.ERROR_CODE.UNAUTHORIZED_ACCESS || res.data.error_code == consts.ERROR_CODE.NO_ACCESS_TOKEN) {
		// document.querySelector('#global-spin').style.display = 'none'
		// 跳转登录页面
		openMethod.openMode.method({
//			url: api.ManagPath.login + '#!/login'
		})
		return Promise.reject(res.data.error_code)
	}

	if(!res.data.result_data) {
		res.data.result_data = [];
	}
	if(res.data.result_data && Object.keys(res.data.result_data).indexOf('items') != -1 && res.data.result_data.items != null) {
		res.data.result_data = res.data.result_data['items']
	}
	setTimeout(function(){
		// document.querySelector('#global-spin').style.display = 'none'
	},300);
	return res.data
}, (error) => {
	console.log('网络异常' + error)
	//	iview.LoadingBar.error();
	// document.querySelector('#global-spin').style.display = 'none'
	return Promise.reject(error)
})
export default axios
