import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//每一个页面都要声明一个常量,作为懒加载使用
const index = r => require.ensure([], () => r(require('@/components/index')), 'index');
const vheader = r => require.ensure([], () => r(require('@/components/vheader/vheader')), 'vheader');
const singleRecharge = r => require.ensure([], () => r(require('@/view/accountRecharge/singleRecharge')), 'singleRecharge');
const batchRecharge = r => require.ensure([], () => r(require('@/view/accountRecharge/batchRecharge')), 'batchRecharge');

//把所有的路由节点页面写到children数组中建议使用对象
export default new Router({
  routes: [
    {
      path: '/',
      name:'vheader',
      redirect: '/index'
    },{
      path: '/index',
      component: vheader,
      children: [
        { path: '/index', component: index},
        { path: '/singleRecharge', component: singleRecharge},
        { path: '/batchRecharge', component: batchRecharge},
      ]
    }
  ]

})

