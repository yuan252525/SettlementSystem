'use strict';
/*!
 * propperties.js v1.0.0
 * 动态配置项
 *
 * Author: liaoxm
 * Date: 2016-06-16
 *
 */
// import imgPath from 'api/imgPath';

exports.jxddprops = {
	'site.static.url': 'http://static.jxdd.com/suppliers',
	'test': 'hello xdd',
	'site.image.url': 'http://192.168.2.61:8888/zqb/api/facade/test_upload/upload_image'
};

/**
 * 日志相关配置
 */
exports.logprops = {
	// 日志开关，0是开启日志，1是关闭日志输出
	'logonoff': 0,
	// 日志级别，0:'log',1:'debug',2:'info',3:'error',4:'warn'
	'loglevel': 2
};

/**
 * url相关配置
 */
exports.urlprops = {
	// 缓存位置时的黑名单
	'webview.id.blacklist': [
		'account_login_password',
		'account_login_msg',
		'account_register',
		'account_set_login',
		'account_forgot_password',
		'account_reset_password',
		'buyer_mine_usersetting_edituserdata_modifypassword',
		'buyer_mine_usersetting_edituserdata_modifybindingphone'
	],
	// 预加载页面id,这些页面需要处理showevent事件
	'webview.preload.whiltlist': [
		'buyer_commonpage_buyinghall_index.html',
		'seller_commonpage_buyinghall_index.html',
		'main',
		'seller_index',
		'buyer_supplier_index.html',
		'seller_imchat'
	]
};

/**
 * UI相关的配置参数
 * @type {Object}
 */
exports.UIprops = {
	// 新开的页面数据最大值
	open_page_num: 10
};

/**
 * 资质属性类型说明
 * @type {Object}
 */
exports.QAprops = {
	'0': '字符无限制，长度在30位以内',
	'1': '字符无限制，长度在256位以内',
	'2': 'YYYY-MM-DD HH:mm:ss格式',
	'3': '2M以内的jpg/jpeg/png/pdf格式，尺寸不限'
};

/**
 * 菜单数据
 * @type {Object}
 */
exports.menuDatas = {
  operation_menus: [{
    routerName: null,
    names: '账号管理',
    code: 0,
    subMenus: [{
      routerName: '/singleRecharge',
      name: '单笔充值申请',
      code: 0,
      permissions: ['40101'],
    }, {
      routerName: '/batchRecharge',
      name: '批量充值申请',
      code: 0,
      permissions: ['40102'],
    }, {
      routerName: '/rechargeApplication',
      name: '充值申请',
      code: 0,
      permissions: ['40103'],
    }, {
      routerName: '/rechargeDetailsInquiries',
      name: '充值明细查询',
      code: 0,
      permissions: ['40104'],
    }]
  }, {
      routerName: null,
      names: '电商支付',
      code: 0,
      subMenus: [{
        routerName: '/singleRecharge',
        name: '单笔支付申请',
        code: 0,
        permissions: ['40101'],
      }, {
        routerName: '/brandPPTManage',
        name: '批量支付申请',
        code: 0,
        permissions: ['40102'],
      }, {
        routerName: '/goodsPPTManage',
        name: '支付审核',
        code: 0,
        permissions: ['40103'],
      }, {
        routerName: '/hotSearchManage',
        name: '支付明细查询',
        code: 0,
        permissions: ['40104'],
      }]
    },{
    routerName: null,
    names: '提现',
    code: 0,
    subMenus: [{
      routerName: '/singleRecharge',
      name: '提现申请',
      code: 0,
      permissions: ['40101'],
    }, {
      routerName: '/brandPPTManage',
      name: '提现明细查询',
      code: 0,
      permissions: ['40102'],
    }]
  },{
    routerName: null,
    names: '转账',
    code: 0,
    subMenus: [{
      routerName: '/singleRecharge',
      name: '转账申请',
      code: 0,
      permissions: ['40101'],
    }, {
      routerName: '/brandPPTManage',
      name: '转账明细查询',
      code: 0,
      permissions: ['40102'],
    }]
  },{
    routerName: null,
    names: '缴费',
    code: 0,
    // subMenus: [{
    //   routerName: '/singleRecharge',
    //   name: '转账申请',
    //   code: 0,
    //   permissions: ['40101'],
    // }, {
    //   routerName: '/brandPPTManage',
    //   name: '转账明细查询',
    //   code: 0,
    //   permissions: ['40102'],
    // }]
  },{
    routerName: null,
    names: 'POS业务管理',
    code: 0,
    subMenus: [{
      routerName: '/singleRecharge',
      name: '手动导入银联文件',
      code: 0,
      permissions: ['40101'],
    }, {
      routerName: '/brandPPTManage',
      name: '银联交易处理',
      code: 0,
      permissions: ['40102'],
    },{
      routerName: '/brandPPTManage',
      name: '云商交易查询',
      code: 0,
      permissions: ['40102'],
    }]
  },{
    routerName: null,
    names: '账号管理',
    code: 0,
    subMenus: [{
      routerName: '/singleRecharge',
      name: '改绑提现账户',
      code: 0,
      permissions: ['40101'],
    }, {
      routerName: '/brandPPTManage',
      name: '交易密码重置',
      code: 0,
      permissions: ['40102'],
    },{
      routerName: '/brandPPTManage',
      name: '交易密码修改',
      code: 0,
      permissions: ['40102'],
    },{
      routerName: '/brandPPTManage',
      name: '冻结账户',
      code: 0,
      permissions: ['40102'],
    },{
      routerName: '/brandPPTManage',
      name: '解冻账户',
      code: 0,
      permissions: ['40102'],
    },{
      routerName: '/brandPPTManage',
      name: '冻结金额',
      code: 0,
      permissions: ['40102'],
    },{
      routerName: '/brandPPTManage',
      name: '解冻金额',
      code: 0,
      permissions: ['40102'],
    },{
      routerName: '/brandPPTManage',
      name: '账号信息查询',
      code: 0,
      permissions: ['40102'],
    },{
      routerName: '/brandPPTManage',
      name: '账号操作查询',
      code: 0,
      permissions: ['40102'],
    },{
      routerName: '/brandPPTManage',
      name: '账号变动查询',
      code: 0,
      permissions: ['40102'],
    }]
  },{
    routerName: null,
    names: '云商卡管理',
    code: 0,
    subMenus: [{
      routerName: '/singleRecharge',
      name: '绑定云商卡',
      code: 0,
      permissions: ['40101'],
    }, {
      routerName: '/brandPPTManage',
      name: '换绑云商卡',
      code: 0,
      permissions: ['40102'],
    },{
      routerName: '/brandPPTManage',
      name: '注销云商卡',
      code: 0,
      permissions: ['40102'],
    },{
      routerName: '/brandPPTManage',
      name: '云商卡操作查询',
      code: 0,
      permissions: ['40102'],
    }]
  },{
    routerName: null,
    names: '统计报表',
    code: 0,
    subMenus: [{
      routerName: '/singleRecharge',
      name: '结算业务报表',
      code: 0,
      permissions: ['40101'],
    }, {
      routerName: '/brandPPTManage',
      name: '每日支票报表',
      code: 0,
      permissions: ['40102'],
    }]
  },{
    routerName: null,
    names: '系统参数配置',
    code: 0,
    subMenus: [{
      routerName: '/singleRecharge',
      name: '手续费设置',
      code: 0,
      permissions: ['40101'],
    }, {
      routerName: '/brandPPTManage',
      name: '支票开户行维户',
      code: 0,
      permissions: ['40102'],
    }, {
      routerName: '/brandPPTManage',
      name: '额度设置',
      code: 0,
      permissions: ['40102'],
    }, {
      routerName: '/brandPPTManage',
      name: '缴纳类型维户',
      code: 0,
      permissions: ['40102'],
    }]
  }]
};
