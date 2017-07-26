'use strict';
/*!
 * propUtils.js v1.0.0
 * 配置文件读取工具类
 *
 * Author: liaoxm
 * Date: 2016-06-16
 *
 */
import props from './properties';

/**
 * 读取配置项
 * @param {String} k 需要读取的配置项key
 * @param {String} area 需要读取属性域
 * @return {String}  配置项value
 * @public
 */
const getProperty = (k, area) => {
    area = area || 'jxddprops';
    return props[area][k];
};

/**
 * 修改配置项，只是动态修改不会修改文件内容
 * @param {String} k 配置项key
 * @param {String} v 配置项value
 * @public
 */
const setProperty = (k, v) => {
    props.jxddprops[k] = v;
};

/**
 * 读取日志输出配置项
 * @param {String} k 配置项key
 * @return {String|Object} 配置项value
 * @public
 */
const getLogProp = k => {
    return props.logprops[k];
};

const getMenusProp = k => {
    return props.menuDatas[k];
};

const getQAProp = k => {
    return props.QAprops[k];
};

export default {
    getProperty,
    setProperty,
    getLogProp,
    getMenusProp,
    getQAProp
};
