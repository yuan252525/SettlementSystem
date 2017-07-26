'use strict'
/*!
 * html头部模板化功能,头部抽出来了，实现了简单的继承扩展
 * 使用方法：
 *      1.在headtpl/head.tpl.js里面，添加页面头部代码
 *      2.在对应的html页面，插入 <tpl name="base"></tpl>
 * ps：弄了一个页面，用来整格式的，打开页面，把现在的头部代码剪切出来，然后放进页面，选择单引号，数组拼接，将生成的代码那这里来用
 * Author: liaoxm
 * Date: 2016-06-17
 */

// 基本每个页面都必须要用的 ，然后其他的页面可以在这个基础上进行扩展
const base = ['        <link rel="stylesheet" type="text/css" href="/static/css/reset.css" />\n',
  '        <script src="/static/js/logInterce.js"></script>\n']

exports.tplArray = {
    'base': base.join('')
}
