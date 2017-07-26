/*

 * url打开方法
 *
 * 所有的管理后台打开统一调用此方法
 *
 * 这个地方包括返回url后面的参数  以及把参数变成json等等需要处理
 * */
var qs = require('qs');
// stringify parse

var url = require('url');
const openMode = {
    method: parameter => {
        var that = {};
        var str = /[?]/;
        var rest;
        that.url = parameter.url;
        that.target = parameter.target ? parameter.target : '_self';
        that.data = parameter.data ? parameter.data : null;
        rest = qs.stringify(that.data) ? qs.stringify(that.data) : false;

        if (!that.url) {
            console.log('请输入url');
            return;
        }

        if (rest) {
            if (str.test(that.url)) {
                that.url = that.url + rest;
            } else {
                that.url = that.url + '?' + rest;
            }
        }
        window.open(that.url, that.target);
    },
    intercept: () => {
        var UrlHref = window.location.href;
        var result = url.parse(UrlHref);
        var Sequence = qs.parse(result.query);
        return Sequence;
    }

};


export default {
    openMode
};
export { openMode };
