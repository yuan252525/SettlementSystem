/*
关于按键的处理
*/
const code = {
    reskey: evt => {
        evt = evt || (window.event ? window.event : '');
        return evt.keyCode ? evt.keyCode : (evt.which ? evt.which : evt.charCode);
    }
};
export default {
    code
};
export { code };
