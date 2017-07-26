/**
 * &gt; 转义字符过滤器
 */
export const gtFilter = str => {
    var result = '';
    if(str){
        result = str.replace(new RegExp(/(&gt;)/g),'>');
    }
    return result;
};
