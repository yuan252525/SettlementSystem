'use strict';
/*!
 * domain.js v1.0.0
 * 域名配置类,分成测试和上线两种情况
 *
 * Author:
 * Date: 2016-06-29
 *
 */

const API_VERSION = '/v1';
const ACC_API_VERSION = '/v10';

export const domain = (process.env.NODE_ENV === 'production') ?
	'http://www.manager.com' : 'http://localhost:8082';
//? 'http://localhost' : 'http://localhost:8080';
export const variable = '/Menu';
export const cookieDomain = (process.env.NODE_ENV === 'production') ?
	'.manager.com' : '.jxdd.com';

export const AccountApi = (process.env.NODE_ENV === 'production') ?
	'https://authen.jxdd.com:8443/account/account/' + ACC_API_VERSION : 'http://192.168.0.149:8080/account2/account' + ACC_API_VERSION;

export const AccountAdminApi = (process.env.NODE_ENV === 'production') ?
	'https://authen.jxdd.com:8443/account/account/admin/' + ACC_API_VERSION : 'http://192.168.0.149:8080/account2/account/admin' + ACC_API_VERSION;

export const AccountStoreApi = (process.env.NODE_ENV === 'production') ?
    'https://authen.jxdd.com:8443/account/account/store/' + ACC_API_VERSION : 'http://192.168.0.149:8080/account2/account/store' + ACC_API_VERSION;
export const ImgPre = (process.env.NODE_ENV === 'production') ?
	'http://i0.jinxiudadi.com' : 'http://192.168.5.160';
	// 'http://i0.jinxiudadi.com' : 'http://192.168.5.162';
export const ProductAPI = (process.env.NODE_ENV === 'production') ?
	'http://productapi.jxdd.com:7080/product' + API_VERSION : 'http://192.168.10.10:5555/product/product' + API_VERSION;
	// 'http://productapi.jxdd.com:7080/product' + API_VERSION : 'http://192.168.10.10:5555/product/product' + API_VERSION;
export const OperationAPI = (process.env.NODE_ENV === 'production') ?
	'http://operationapi.jxdd.com:7080/product' + API_VERSION : 'http://192.168.10.10:5555/operation/operation' + API_VERSION;
	// 'http://operationapi.jxdd.com:7080/product' + API_VERSION : 'http://192.168.2.69:8081/operation' + API_VERSION;
export const UploadAPI = (process.env.NODE_ENV === 'production') ?
	'http://uploadapi.jxdd.com:7080/product' + API_VERSION : 'http://192.168.10.10:5555/upload/upload' + API_VERSION;
export const OrderAPI = (process.env.NODE_ENV === 'production') ?
	'http://orderapi.jxdd.com:7080/order' + API_VERSION : 'http://192.168.10.10:5555/order/order' + API_VERSION;
export const StoreAPI = (process.env.NODE_ENV === 'production') ?
  'http://storeapi.jxdd.com:7080/store' + API_VERSION : 'http://192.168.10.10:5555/store/store' + API_VERSION;
  //http://192.168.2.53:8090/store
  //http://192.168.10.10:5555/store/store
export const SMSAPI = (process.env.NODE_ENV === 'production') ?
  'http://smsapi.jxdd.com:7080/store' + API_VERSION : 'http://192.168.10.51:8080/message/sendSMS';

