
let format = (value) => {
    return value >= 10 ? value : '0' + value;
};
/**
 * 时间格式化
 */
export let dateFilter = (time, type) => {
    if(!time || time === '---'){
        return time;
    }
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    let result;
    switch (type) {
    case 0: // 01-05
        result = `${format(month)}-${format(day)}`;
        break;
    case 1: // 11:12
        result = `${format(hours)}-${format(minutes)}`;
        break;
    case 2: // 2015-01-05
        result = `${year}-${format(month)}-${format(day)}`;
        break;
    case 3: // 2015-01-05 11:12
        result = `${year}-${format(month)}-${format(day)} ${format(hours)}:${format(minutes)}`;
        break;
    case 4: // 2015-01-05 11:12:06
        result = `${year}-${format(month)}-${format(day)} ${format(hours)}:${format(minutes)}:${format(second)}`;
        break;
    default: // 2015-01-05 11:12:06
        result = `${year}-${format(month)}-${format(day)} ${format(hours)}:${format(minutes)}:${format(second)}`;
    }
    return result;
};

/**
 * 返回小数点2位
 */
export const mycurrency1 = (value) => {
    value = value || '0.00';
    return parseFloat(value.toString()).toFixed(2);
};
