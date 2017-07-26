(function ($) {
    $.fn.extendPagination = function (options) {
        var defaults = {
            //pageId:'',
            totalCount: '',
            showPage: '6',
            limit: '5',
            callback: function () {
                return false;
            },
            setConfig:function(config){
            	if(!isNaN(config.totalCount)){
            		totalCount = Number(config.totalCount);
            	}
            	if(!isNaN(config.showPage)){
            		showPage = Math.ceil(Number(config.showPage));
            	}
            	if(!isNaN(config.limit)){
            		limit = Number(config.limit);
            	}
            	if(typeof config.callback == "function"){
            		defaults.callback=config.callback;
            	}
            	totalPage = Math.ceil(totalCount / limit);
            	createElement();
            	bindEvent();
            },
            /*
             * page:加载的页数
             * */
            loadPage:function(page){
            	if(isNaN(page)){
            		page=1;
            	}else{
            		page=Number(page);
            	}
            	page = page<1 ? 1 : page>totalPage ? totalPage : page;
            	//取出页数范围start
            	var maxPage = Number(lastPage.prev().prev().find("a").html()), minPage = Number(firstPage.next().next().find("a").html());
            	var minP=minPage,maxP=maxPage;
            	//取出页数范围end
            	if(page>maxPage){//大于当前最大页数
            		if(page<totalPage-showPage){//不在最后一页范围内
            			minP=page;
            			maxP= page+showPage-1;
            		}else{//在最后一页范围内
            			minP=totalPage-showPage+1;
            			maxP=totalPage;
            		}
            	}
            	if(page<minPage){//小于当前最小页数
            		minP=page;
        			maxP= page+showPage-1;
            	}
            	loopPageElement(minP,maxP);
            	//设置活动样式start
            	currentObj.removeClass('active');
            	$.each(currentObj, function (index, thiz) {
                    if ($(thiz).find('a').html() == page&&!$(this).attr("lastPage")&&!$(this).attr("firstPage")) {
                        $(thiz).addClass('active');
                        callBack(page);
                    }
                });
            	//设置活动样式end
            },
            setActivePage:function(currPage,refresh){
            	if(refresh){
            		var o=getPageRange("pre",currPage);
                	loopPageElement(o.minPage, o.maxPage);
            	}
	           	$.each(currentObj, function (index, thiz) {
                    if ($(thiz).find('a').html() == currPage) {
                        $(thiz).trigger("click",true);
                    }
	            });
            },
            template:{
            	wrapper:'<ul class="pagination"></ul>',
            	preButton:'<li class="previous"><a href="#">&laquo;</a></li>',
            	nextButton:'<li class="next"><a href="#">&raquo;</a></li>',
            	moreElement:'<li class="disabled hidden"><a href="#">...</a></li>',
            	pageElement:'<li><a href="#"></a></li>',
            	lastPage:'<li><a href="#"></a></li>',
            	firstPage:'<li><a href="#"></a></li>'
            }
        };
        $.extend(defaults.template, options.template || {});
        delete options.template;
        $.extend(defaults, options || {});
        if (defaults.totalCount == '') {
            //alert('总数不能为空!');
            $(this).empty();
            return false;
        } else if (Number(defaults.totalCount) <= 0) {
            //alert('总数要大于0!');
            $(this).empty();
            return false;
        }
        if (defaults.showPage == '') {
            defaults.showPage = '10';
        } else if (Number(defaults.showPage) <= 0)defaults.showPage = '10';
        if (defaults.limit == '') {
            defaults.limit = '5';
        } else if (Number(defaults.limit) <= 0)defaults.limit = '5';
        var totalCount = Number(defaults.totalCount), showPage = Math.ceil(Number(defaults.showPage)),
            limit = Number(defaults.limit), totalPage = Math.ceil(totalCount / limit);
        var that=this;
        function createElement(){
        	if (totalPage >= 0) {
//        		var html = [];
//                html.push(' <ul class="pagination">');
//                html.push(' <li class="previous"><a href="#">&laquo;</a></li>');
//                html.push('<li class="disabled hidden"><a href="#">...</a></li>');
                var l=Math.min(totalPage,showPage);
                if(l==0){
                	l=1;
                }
                showPage=l;
                var wrapper=$(defaults.template.wrapper);
                var preButton=$(defaults.template.preButton);
                wrapper.append(preButton);
                firstPage=$(defaults.template.firstPage);
                firstPage.find('a').html(1);
                firstPage.attr("firstPage",true);
                firstPage.addClass('hidden');
                wrapper.append(firstPage);
                wrapper.append($(defaults.template.moreElement));
                for (var i = 1; i <= l; i++) {
                	var item=$(defaults.template.pageElement);
                    if (i == 1) item.addClass("active").find("a").html(i);//html.push(' <li class="active"><a href="#">' + i + '</a></li>');
                    else item.find("a").html(i);//html.push(' <li><a href="#">' + i + '</a></li>');
                    wrapper.append(item);
                }
                wrapper.append($(defaults.template.moreElement));
                lastPage=$(defaults.template.lastPage);
                lastPage.find('a').html(totalPage);
                lastPage.attr("lastPage",true);
                lastPage.addClass('hidden');
                wrapper.append(lastPage);
                var nextButton=$(defaults.template.nextButton);
                wrapper.append(nextButton);
                $(that).find(">*").remove();
                $(that).append(wrapper);
//                html.push('<li class="disabled hidden"><a href="#">...</a></li>');
//                html.push('<li class="next"><a href="#">&raquo;</a></li></ul>');
//                $(that).html(html.join(''));
                if (totalPage > showPage) {
                	if(totalPage > showPage+1){
                		$(that).find('ul.pagination li.next').prev().prev().removeClass('hidden');
                	}
                	lastPage.removeClass('hidden');
                }
        	}
        }
        var pageObj,preObj,currentObj,nextObj,moreBefore,moreAfter,firstPage,lastPage;
        function bindEvent(){
        	pageObj = $(that).find('ul.pagination'), preObj = pageObj.find('li.previous'),
            currentObj = pageObj.find('li').not('.previous,.disabled,.next'),
            nextObj = pageObj.find('li.next');
        	moreBefore=preObj.next().next(),moreAfter=nextObj.prev().prev();
        	currentObj.off("click").click(function (event,notCallback) {
                event.preventDefault();
                var currPage = Number($(this).find('a').html()), activeObj = pageObj.find('li[class="active"]'),
                    activePage = Number(activeObj.find('a').html());
                if (currPage == activePage) return false;
                if (totalPage > showPage) {
                    var maxPage = currPage, minPage = 1;
                    if ($(this).prev().attr('class')
                        && $(this).prev().attr('class').indexOf('disabled') >= 0&&!$(this).attr("lastPage")||$(this).attr("firstPage")) {
//                    	//解决点击自动切换上一页数字变成负数start
//                    	if(currPage - 1>1)minPage = currPage - 1;
//                    	else minPage=1;
//                    	//解决点击自动切换上一页数字变成负数end
////                    	minPage = currPage - 1;
//                        maxPage = minPage + showPage - 1;
//                        loopPageElement(minPage, maxPage);
                    	var o=getPageRange("pre",currPage+1);
                    	loopPageElement(o.minPage, o.maxPage);
                    } else if (($(this).next().attr('class')
                        && $(this).next().attr('class').indexOf('disabled') >= 0&&!$(this).attr("firstPage"))||$(this).attr("lastPage")) {
//                        if (totalPage - currPage >= 1) maxPage = currPage + 1;
//                        else  maxPage = totalPage;
//                        if (maxPage - showPage > 0) minPage = (maxPage - showPage) + 1;
//                        loopPageElement(minPage, maxPage)
                    	var o=getPageRange("next",currPage-1);
                    	loopPageElement(o.minPage, o.maxPage);
                    }               
                }
                activeObj.removeClass('active');
                $.each(currentObj, function (index, thiz) {
                    if ($(thiz).find('a').html() == currPage&&!$(this).attr("lastPage")&&!$(this).attr("firstPage")) {
                        $(thiz).addClass('active');
                        if(!notCallback){
                        	callBack(currPage);
                        }
                    }
                });
            });
            preObj.off("click").click(function (event) {
                event.preventDefault();
                var activeObj = pageObj.find('li[class="active"]'), activePage = Number(activeObj.find('a').html());
                if (activePage <= 1) return false;
                if (totalPage > showPage) {
                    var maxPage = activePage, minPage = 1;                  
                    if ((activeObj.prev().prev().attr('class'))
                        && (activeObj.prev().prev().attr('class').indexOf('disabled')) >= 0) {
//                        minPage = activePage - 1;
//                        if (minPage > 1) minPage = minPage - 1;
//                        maxPage = minPage + showPage - 1;
//                        loopPageElement(minPage, maxPage);
                    	var o=getPageRange("pre",activePage);
                    	loopPageElement(o.minPage, o.maxPage);
                    }
                }
                $.each(currentObj, function (index, thiz) {
                    if ($(thiz).find('a').html() == (activePage - 1)&&!$(this).attr("firstPage")) {
                        activeObj.removeClass('active');
                        $(thiz).addClass('active');
                        callBack(activePage - 1);
                    }
                });
            });
            nextObj.off("click").click(function (event) {
                event.preventDefault();
                var activeObj = pageObj.find('li[class="active"]'), activePage = Number(activeObj.find('a').html());
                if (activePage >= totalPage) return false;
                if (totalPage > showPage) {
                    var maxPage = activePage, minPage = 1;                  
                    if ((activeObj.next().next().attr('class'))
                        && (activeObj.next().next().attr('class').indexOf('disabled')) >= 0) {
//                        maxPage = activePage + 2;
//                        if (maxPage > totalPage) maxPage = totalPage;
//                        minPage = maxPage - showPage + 1;
//                        loopPageElement(minPage, maxPage);
                    	var o=getPageRange("next",activePage);
                    	loopPageElement(o.minPage, o.maxPage);
                    }
                }
                $.each(currentObj, function (index, thiz) {
                    if ($(thiz).find('a').html() == (activePage + 1)&&!$(this).attr("lastPage")) {
                        activeObj.removeClass('active');
                        $(thiz).addClass('active');
                        callBack(activePage + 1);
                    }
                });
            });
        }
        createElement();
        bindEvent();
            function loopPageElement(minPage, maxPage) {
            	//计算首页和更多显示start
                var tempObj = preObj.next().next();
                if (minPage <= 2 && (moreBefore.attr('class').indexOf('hidden')) < 0){
                	moreBefore.addClass('hidden');
                }
                else if (minPage > 2 && (moreBefore.attr('class').indexOf('hidden')) > 0){
                	moreBefore.removeClass('hidden');
                }
                if(minPage!=1){
            		firstPage.removeClass('hidden');
            	}else{
            		firstPage.addClass('hidden');
            	}
                if (maxPage >= totalPage-1 && (moreAfter.attr('class').indexOf('hidden')) < 0){
                	moreAfter.addClass('hidden');
                }else if (maxPage < totalPage-1 && (moreAfter.attr('class').indexOf('hidden')) > 0){
                	moreAfter.removeClass('hidden');
                }
                if(maxPage!=totalPage){
                	lastPage.removeClass('hidden');
            	}else{
            		lastPage.addClass('hidden');
            	}
                //计算首页和更多显示end
                for (var i = minPage; i <= maxPage; i++) {
                    var obj = tempObj.next().find('a');
                    if (!isNaN(obj.html()))obj.html(i);
                    tempObj = tempObj.next();
                }
            }
            /*计算前移后移
             * flag(pre前移,next后移)
             * activePage(当前活动页数)
             * */
            
            function getPageRange(flag,activePage){
            	var o={};
            	if(flag=="pre"){
            		var prePageRange=activePage-showPage+1;
            		if(prePageRange>0){
            			o.minPage=prePageRange;
            			o.maxPage=activePage;
            		}else {
            			o.minPage=1;
            			o.maxPage=1+showPage-1;
            		}
            	}
            	if(flag=="next"){
            		var nextPageRange=activePage+showPage-1;
            		if(nextPageRange<=totalPage){
            			o.minPage=activePage;
            			o.maxPage=nextPageRange;
            		}else {
            			o.minPage=totalPage-showPage+1;
            			o.maxPage=totalPage;
            		}
            	}
            	return o;
            }
            function callBack(curr) {
                defaults.callback(curr, defaults.limit, totalCount);
            }
//
//            currentObj.click(function (event) {
//                event.preventDefault();
//                var currPage = Number($(this).find('a').html()), activeObj = pageObj.find('li[class="active"]'),
//                    activePage = Number(activeObj.find('a').html());
//                if (currPage == activePage) return false;
//                if (totalPage > showPage) {
//                    var maxPage = currPage, minPage = 1;
//                    if (($(this).prev().attr('class'))
//                        && ($(this).prev().attr('class').indexOf('disabled')) >= 0) {
//                    	//解决点击自动切换上一页数字变成负数start
//                    	if(currPage - 1>1)minPage = currPage - 1;
//                    	else minPage=1;
//                    	//解决点击自动切换上一页数字变成负数end
////                    	minPage = currPage - 1;
//                        maxPage = minPage + showPage - 1;
//                        loopPageElement(minPage, maxPage);
//                    } else if (($(this).next().attr('class'))
//                        && ($(this).next().attr('class').indexOf('disabled')) >= 0) {
//                        if (totalPage - currPage >= 1) maxPage = currPage + 1;
//                        else  maxPage = totalPage;
//                        if (maxPage - showPage > 0) minPage = (maxPage - showPage) + 1;
//                        loopPageElement(minPage, maxPage)
//                    }                  
//                }
//                activeObj.removeClass('active');
//                $.each(currentObj, function (index, thiz) {
//                    if ($(thiz).find('a').html() == currPage) {
//                        $(thiz).addClass('active');
//                        callBack(currPage);
//                    }
//                });
//            });
//            preObj.click(function (event) {
//                event.preventDefault();
//                var activeObj = pageObj.find('li[class="active"]'), activePage = Number(activeObj.find('a').html());
//                if (activePage <= 1) return false;
//                if (totalPage > showPage) {
//                    var maxPage = activePage, minPage = 1;                  
//                    if ((activeObj.prev().prev().attr('class'))
//                        && (activeObj.prev().prev().attr('class').indexOf('disabled')) >= 0) {
//                        minPage = activePage - 1;
//                        if (minPage > 1) minPage = minPage - 1;
//                        maxPage = minPage + showPage - 1;
//                        loopPageElement(minPage, maxPage);
//                    }
//                }
//                $.each(currentObj, function (index, thiz) {
//                    if ($(thiz).find('a').html() == (activePage - 1)) {
//                        activeObj.removeClass('active');
//                        $(thiz).addClass('active');
//                        callBack(activePage - 1);
//                    }
//                });
//            });
//            nextObj.click(function (event) {
//                event.preventDefault();
//                var activeObj = pageObj.find('li[class="active"]'), activePage = Number(activeObj.find('a').html());
//                if (activePage >= totalPage) return false;
//                if (totalPage > showPage) {
//                    var maxPage = activePage, minPage = 1;                  
//                    if ((activeObj.next().next().attr('class'))
//                        && (activeObj.next().next().attr('class').indexOf('disabled')) >= 0) {
//                        maxPage = activePage + 2;
//                        if (maxPage > totalPage) maxPage = totalPage;
//                        minPage = maxPage - showPage + 1;
//                        loopPageElement(minPage, maxPage);
//                    }
//                }
//                $.each(currentObj, function (index, thiz) {
//                    if ($(thiz).find('a').html() == (activePage + 1)) {
//                        activeObj.removeClass('active');
//                        $(thiz).addClass('active');
//                        callBack(activePage + 1);
//                    }
//                });
//            });
//        }
        return defaults;
    };
})(jQuery);