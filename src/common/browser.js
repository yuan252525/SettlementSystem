//浏览器判断
module.exports = function(){
		var u = navigator.userAgent,
        app = navigator.appVersion,
        bUA;
		if (u.indexOf("MSIE") >= 0) {
		    bUA = "Internet Explorer 10  Or Earlier"; //IE
		} else if (u.indexOf("Firefox") >= 0) {
		    bUA = "Firefox";
		} else if (u.indexOf("Chrome") >= 0) {
		    bUA = "Chrome";
		    if (u.indexOf("360SE") >= 0) { //360安全浏览器
		        bUA = "360SE";
		    } else if (u.indexOf("360EE") >= 0) { //360急速浏览器
		        bUA = "360EE";
		    } else if (u.indexOf("SE") >= 0 && u.indexOf("360SE") == -1) { //搜狗浏览器
		        bUA = "SouGou";
		    } else if (u.indexOf("Maxthon") >= 0) { //遨游浏览器
		        bUA = "Maxthon";
		    }
		} else if (u.indexOf("UCBrowser") >= 0 || u.indexOf("UCWEB") >= 0) { // UC浏览器
		    bUA = "UCBrowser";
		} else if (u.indexOf("Opera") >= 0) {
		    bUA = "Opera";
		} else if (u.indexOf("Safari") >= 0) { // 苹果浏览器
		    bUA = "Safari";
		} else if (u.indexOf("Netscape") >= 0) {
		    bUA = "Netscape";
		} else if (u.indexOf("like Gecko") >= 0 && u.indexOf("Trident") >= 0) {
		    bUA = "Internet Explorer 11 Or Later"; //IE11 以后，不再用 MSIE
		} else {
		    bUA = "Other Broswer";
		}
		var browser = {
		    versions: function() {
		        return {
		            mobile: !!u.match(/AppleWebKit.*Mobile.*/),
		            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
		            android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
		            iPhone: u.indexOf("iPhone") > -1,
		            iPad: u.indexOf("iPad") > -1
		        };
		    } (),
		    language: (navigator.browserLanguage || navigator.language).toLowerCase(),
		    bUA:bUA
		};
		return browser;

	
}
