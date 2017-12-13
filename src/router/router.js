import App from '../App';

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
const worker = r => require.ensure([], () => r(require('../page/worker/worker')), 'worker');
const workdetails = r => require.ensure([], () => r(require('../page/worker/child/details')), 'workdetails');
const article = r => require.ensure([], () => r(require('../page/article/article')), 'article');
const my = r => require.ensure([], () => r(require('../page/my/my')), 'my');
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login');
const reg = r => require.ensure([], () => r(require('../page/reg/reg')), 'reg');
const seat = r => require.ensure([], () => r(require('../page/seat/seat')), 'seat');
const about = r => require.ensure([], () => r(require('../page/seat/about')), 'about');
const editpassword = r => require.ensure([], () => r(require('../page/seat/editpassword')), 'editpassword');
const infor = r => require.ensure([], () => r(require('../page/my/children/infor')), 'infor');
const mymoney = r => require.ensure([], () => r(require('../page/my/children/mymoney')), 'mymoney');
const myprize = r => require.ensure([], () => r(require('../page/my/children/myprize')), 'myprize');
const mycollection =r => require.ensure([], () => r(require('../page/my/children/mycollection')), 'mycollection');
const myenroll =r => require.ensure([], () => r(require('../page/my/children/myenroll')), 'myenroll');
const mygroom =r => require.ensure([], () => r(require('../page/my/children/mygroom')), 'mygroom');
const mynotice =r => require.ensure([], () => r(require('../page/my/children/mynotice')), 'mynotice');
const erweima =r => require.ensure([], () => r(require('../page/my/children/erweima')), 'erweima');
const person =r => require.ensure([], () => r(require('../page/recomend/person')), 'person');
const profit =r => require.ensure([], () => r(require('../page/recomend/profit')), 'profit');
const lottery =r => require.ensure([], () => r(require('../page/lottery/lottery')), 'lottery');

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/login'
        },
        //首页
        {
            path: '/home',
            component: home
        },
        //找工作
        {
          path: '/worker',
          component: worker
        },
        {
          path: '/workdetails',
          component: workdetails
        },
        //安娉助手
        {
          path: '/article',
          component: article
        },
        //个人中心
        {
          path: '/my',
          component: my
        },
        //个人资料
        {
          path: '/infor',
          component: infor
        },
        //抽奖
        {
          path: '/lottery',
          component: lottery
        },
        //我的钱包
        {
          path: '/mymoney',
          component: mymoney
        },
        //我的奖品
       {
          path: '/myprize',
          component: myprize
       },
      //我的收藏
      {
        path: '/mycollection',
        component: mycollection
      },
      //我的报名
      {
        path: '/mygroom',
        component: mygroom
      },
      //我的推荐
      {
        path: '/myenroll',
        component: myenroll
      },
      //我的二维码
      {
        path: '/erweima',
        component: erweima
      },
      //推荐人数榜单
      {
        path: '/person',
        component: person
      },
      //推荐收益榜单
      {
        path: '/profit',
        component: profit
      },
      //我的消息
      {
        path: '/mynotice',
        component: mynotice
      },
        //设置
       {
         path: '/seat',
         component: seat
       },
        //修改密码
      {
        path: '/editpassword',
        component: editpassword
      },
      //关于app
      {
        path: '/about',
        component: about
      },
        //登录
        {
          path: '/login',
          component: login
        },
        //注册
        {
          path: '/reg',
          component: reg
        },
    ]
}]
