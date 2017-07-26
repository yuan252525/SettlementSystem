import Vue from 'vue';
import app from './App';
import iview from 'iview';
import 'iview/dist/styles/iview.css';
import '../../../../static/css/base.css';

Vue.use(iview)

// new Vue({
//     el: '#vcon',
//     template: '<div><app/></div>',
//     components: { app }
// });

new Vue({
  render: x => x(app)
}).$mount("#login")


