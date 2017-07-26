'use strict';
/*
 *不是菜单的话   名字不用遵守以下规则     无重复 能让别人明白意思即可
 *
 * 关于   菜单-编号
 * 编号为六位数字
 * 前两位代表一级菜单
 * 		010000 代表商品
 * 		020000代表店铺
 * 		030000代表会员
 * 		040000代表交易
 * 		050000代表运营
 * 		060000代表统计
 * 		070000代表设置
 * 中间两位代表二级菜单
 * 		010100代表商品下的二级菜单的第一个
 * 		020200代表店铺下的二级菜单的第二个
 * 结尾两位代表三级菜单
 * 		010101代表商品下的二级菜单的第一个的三级的第一个菜单
 * 		020101代表店铺下的二级菜单的第二个的三级的第一个菜单
 *
 *
 *
 * if(如果是菜单的url  那么需要在PathSetting.js 补相应的映射 ){
 * 		以上地址写完之后 需要在PathSetting.js里面补个相对应的映射
 * 		具体映射补法 请在PathSetting.js里面
 * }else{
 * 		不需要在PathSetting.js补映射
 * }
 *
 *
 */
import { domain, variable } from './domain';

// menu img path
const imagePath = {
	default_image: require('../static/img/null_image.png'),	
	
	operation_manage_default: require('../static/img/header/operating.svg'),
	operation_manage_hover: require('../static/img/header/operating.svg'),
	operation_manage_active: require('../static/img/header/operating.svg'),

	goods_manage_default: require('../static/img/header/commodity.svg'),
	goods_manage_hover: require('../static/img/header/commodity.svg'),
	goods_manage_active: require('../static/img/header/commodity.svg')
};

// login img path
const imageLogin = {
	bgImg: require('../static/img/info.jpg')
};

export default {
	imagePath,
	imageLogin
};
export { imagePath, imageLogin };