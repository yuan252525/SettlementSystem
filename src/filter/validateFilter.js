/**
 * [ks 验证器标题]
 * @type {Array}
 */
const ks = {
	name:'名称',
	attrName:'属性名称',
	content_length:'内容长度',
	default_value:'默认值',
	width_advice:'图片尺寸',
	height_advice:'图片尺寸',
	size_limit:'图片大小',
	number_limit:'图片数量'
}

/**
 * [vs 验证器提示信息]
 * @type {Array}
 */
const vs = [{
	k: 'defaulttext',
	v: '请输入1~200个字，中文、英文、数字、特殊字符(不包括“|”和“&”)'
}, {
	k: 'mulidefaulttext',
	v: '请输入1~500个字，中文、英文、数字、特殊字符(不包括“|”和“&”)'
}, {
	k: 'empty',
	v: '请输入'
}, {
	k: 'mainname',
	v: '请输入1~20个字 “中文、英文、数字、‘-’、‘（’、‘）’”'
}, {
	k: 'guanggaoname',
	v: '请输入1~30个字 “中文、英文、数字、‘-’、‘（’、‘）’”'
}, {
	k: 'length',
	v: '请输入小于等于50的正整数'
}, {
	k: 'mulilength',
	v: '请输入小于等于500的正整数'
}, {
	k: 'selectdefault',
	v: '默认值每行不能大于20个字，默认值不能超过50行；默认值不能包含字符“|”和“&”'
}, {
	k: 'picsize',
	v: '请输入大于等于10小于等于2000的正整数'
}, {
	k: 'piclimit',
	v: '请输入大于等于1小于等于2000的正整数'
}, {
	k: 'numlimit',
	v: '请输入大于等于1小于等于10的正整数'
}];

const normalMsg = (data, title) => {
	for(let item of vs) {
		if(data[item.k]) {
			return item.k === 'empty' ? item.v + ks[title] : item.v
			break;
		}
	}
};

export {
	normalMsg
};
