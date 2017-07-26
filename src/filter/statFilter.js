'use strict';
/*!
 * statFilter.js v1.0.0
 * 状态转换
 *
 * Author: zza
 * Date: 2016-06-16
 *
 */
const ORDER_MAP = {
	'0':'正常',
	'1':'已取消',
	'2':'已完成'
};
const PAY_MAP = {
	'0':'未付款',
	'1':'部分付款',
	'2':'已付清'
};
const DELIVERY_MAP = {
	'0':'待发货',
	'1':'部分发货',
	'2':'待收货',
	'3':'已收货',
	'4':'部分收货'
};

/**
 * 订单状态
 * @param {String}  key
 * @public
 */
const orderFormat = function(key) {
    if (!key) {
        return '';
    }

    return ORDER_MAP[key];
};
/**
 * 订单状态
 * @param {String}  key
 * @public
 */
const payFormat = function(key) {
    if (!key) {
        return '';
    }

    return PAY_MAP[key];
};
/**
 * 订单状态
 * @param {String}  key
 * @public
 */
const deliveryFormat = function(key) {
    if (!key) {
        return '';
    }

    return DELIVERY_MAP[key];
};
export default {
    orderFormat,
    payFormat,
    deliveryFormat
};
