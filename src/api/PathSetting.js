/*

 两位数开头的都为一级导航
 每个一级导航下面包含若干个二级导航
 每个二级导航下面包含若干个三级导航

 点击一级导航 就会跳到相对应的三级或是二级(在三级没有的情况下)导航
 ajax请求数据  直接本地sessionstorage存储


 关于在index.js里面看的补映射
 映射补法如下:
 _01_代表一级菜单 name为当前菜单的名字 path为当前菜单的路径  除了一级菜单可以不用加上路径 二三级菜单需要带上路径    如不知道路径 请务必加上引号
 _02_也是一级菜单


 _001_代表二级菜单
 _002_也是二级菜单


 _0001_代表三级菜单
 _0002_也是三级菜单


 imgPath.js补法同index.js一样
 * */

import api from 'api';
import imgPath from './imgPath';
const TakeOut = {
    calculation: () => {
        var arr = [];
    // var att = [];
        for (var i in setting) {
            arr.push(setting[i]);
        }
        return arr;
    }
};
/**
 * routerName 配置说明：
 * 一级导航的路径已经配置好了，都是页面名称对应的，不要修改
 * 二级导航下面有三级菜单的时候，routerName设置成一级导航的
 * 如果没有，就设置成自己的
 * @type {Object}
 */
const setting = {
  
};

export default {
    setting,
    TakeOut
};

export { setting, TakeOut };
