//右侧滚动相关方法
//获取元素
exports.getElement = function(name){
	return document.querySelector(name);
}
//判断元素是否存在
exports.isElement = function(element){
	if (exports.getElement(element)) {
		return true;
	}else{
		return false;
	}
}
//计算右侧内容元素的高度
exports.scrollH = function(){
	setTimeout(function(){
		let pageHeaderH = 0;
		if(!exports.isElement(".currentPosit")){
			return;
		}
		//获取元素的高度
		if (exports.isElement(".pageHeader")) {
			pageHeaderH = exports.getElement(".pageHeader").offsetHeight;
		}else{
			pageHeaderH = 0;
		}
	    let headerTopH = exports.getElement(".header-top").offsetHeight;
	    let headerBottomH = exports.getElement(".header-bottom").offsetHeight;
	    let currentPositH = exports.getElement(".currentPosit").offsetHeight;
	    let scrollDivH = exports.getElement(".scrollDiv");
	    //右侧滚动区域的高度
	    scrollDivH.style.height = document.body.clientHeight - headerTopH - headerBottomH - currentPositH - pageHeaderH + "px";
	},0);
}