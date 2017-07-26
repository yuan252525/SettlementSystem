
var dataUrl = '/login/index.html';

if(!getCookie('access_token')){
	openUrl({"url":dataUrl});
}

function openUrl(data){
	data.target = data.target ? data.target : "_self";
	window.open(data.url,data.target);
}
var storageType = 'localStorage';
function getSession(key){
	if(window.localStorage){
		return window[storageType].getItem(key);
	}else{
		console.log("浏览器不支持sessionstorage储存");
		return;
	}
}

function getCookie(key){
	var name = key + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++)
	  {
	  var c = ca[i].trim();
	  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	  }
	return "";
}
