<template>
  <div style="width:100%;height:100%;">
    <div class="jxdd_header">
      <div class="jxdd_header_stl" @click="goIndex()">
        <!--<Icon class="floatL" @click="leMenuSAH(1)" type="android-menu"></Icon>-->
        <div class="img_ic_div">
          <img class="img_ic" src="../../../static/img/header/ddlogo.jpg" alt="">
        </div>
        <span class="text">欢迎登入云商柜台操作系统</span>
      </div>
      <div class="jxdd_header_sel">
        <div class="fla">
          <img class="svg btn" src="../../../static/img/header/user.svg" height="21" />
          <span>当前用户名:MR.li</span>
        </div>
        <div class="rit" style="text-align: left">
          <img class="svg btn" src="../../../static/img/header/exit.svg" height="21" />
          <span @click="logout()">退出</span>
        </div>
      </div>
    </div>
    <div>
      <div class="btn-sel" >
        <div class="jxdd_content_sel h_le_menu">
          <Row>
            <Col>
            <Menu :theme="theme2" :open-names="['1']" accordion>
              <div v-for="(menu,index) in operationMenus">
                <Submenu :name="index" :key="'1'+index">
                  <template slot="title">
                    {{menu.names}}
                  </template>
                  <div class="met"  ref="abc">
                    <div v-for="(item,i) in menu.subMenus">
                      <Menu-item :name="'1-1'+i" :key="'1-'+i" @click.native="openPage(item)" >{{item.name}}</Menu-item>
                    </div>
                  </div>
                </Submenu>
              </div>
            </Menu>
            </Col>
          </Row>
        </div>
      </div>
      <div class="box-text">
        <router-view></router-view>
      </div>
      <div class="jxdd_footer"></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
    import propUtils from '../../common/propUtils';
    import openMethod from '../../common/openMethod';
    import cacheUtils from '../../common/cacheUtils';
    import api from '../../api';
    export default{
        data(){
            return{
              theme2: 'dark',
              hMenu0: 0,
              hMenu0270: '-270px',
              modal1:false,
              submenu: true,
              menus: [],
              operationMenus: '',
              goodsMenus: ''
            }
        },
        // 菜单数据
        created() {
          this.operationMenus = propUtils.getMenusProp('operation_menus');
        },
        mounted () {
          this.$refs.abc[6].style = 'width: 100%;height: 355px;overflow: auto';
        },
        methods:{
          /**
           * @param 跳转到主页
           */
          goIndex(){
            this.$router.push('/index');
          },
          openPage(item) {
            this.$router.push(item.routerName);

          },
          /**
           * @param 退出页面
           */
          logout() {
            openMethod.openMode.method({
              'url': api.ManagPath.login
            })
          },
        },
    };
</script>

<style>
  .jxdd_content_sel{
    height:100%;
    position: fixed;
    z-index: 2;
    margin-top:80px;
    background: #24282b;
  }
  .jxdd_header{
    position: fixed;
    z-index: 2;
  }
  .jxdd_header_stl{
    width:384px;
    height:80px;
    float: left;
  }
  .jxdd_header_sel{
    width:384px;
    height:80px;
    float: right;
  }
  .text{
    font-size:20px;
    color:#fff;
    display: inline-block;
    float: left;
    margin-top: 29px;
    margin-left:15px;
  }
  .floatL{
    color:#fff;
    font-size:27px;
    margin:22px 26px 10px 42px;
    cursor:pointer;
  }
  .img_ic_div{
    width:30px;
    height:30px;
    float: left;
    margin-top: 26px;
    margin-left: 39px;
    cursor:pointer;
  }
  .img_ic{
    width:30px;
    height:30px;
    border-radius: 50%;
    display: block;
  }
  .fla{
    width:60%;
    height:80px;
    float: left;
    text-align: center;
    line-height: 80px;
    color: #FFFFFF;
    cursor:pointer;
  }
  .rit{
    width:40%;
    height:80px;
    float: right;
    text-align: center;
    line-height: 80px;
    color: #FFFFFF;
    cursor:pointer;
    padding-right:10px;
  }
  .btn{
    margin-bottom:3px
  }
  .ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title{
    padding: 18px 30px!important;
    font-size: 15px;
    font-family: '微软雅黑';
  }
  .h_le_menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active{
    background: #11b69d !important;
  }
  .h_le_menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item:hover {
    background: #11b69d !important;
  }
  .ivu-menu-dark{
    background: #24282b!important;
  }
  .btn-sel{
    transition: left 1.0s;
    -moz-transition: left 1.0s;
    /* Firefox 4 */
    -webkit-transition: left 1.0s;
    /* Safari 和 Chrome */
    -o-transition: left 1.0s;
    /* Opera */
    position: absolute;
    /*left: -270px;*/
    z-index: 5;
  }
  .jxdd_sel{
    width: 250px;
    height: 70px;
    background: #11b69d;
    color: #FFFFFF;
    font-size: 20px;
    position: absolute;
    top: -70px;
    z-index: 6;
    text-align: center;
    line-height: 70px;
    cursor:pointer;
    padding-right:30px;
  }
  .jxdd_span{
    position: absolute;
    width: 15px;
    height: 9px;
    background: #04584b;
    right: -9px;
    top: -6px;
    transform: rotate(146deg);
    -moz-transform: rotate(146deg);
    -webkit-transform: rotate(146deg);
    -o-transform: rotate(146deg);
    z-index: 1;
  }
  .btn_sel{
    margin-right: 15px;
  }
  .box-text{
    height:100%;
  }
  .menu_box{
    width: 100%;
    height: 355px;
    overflow: auto;
  }
  /* 设置滚动条的样式 */::-webkit-scrollbar {    width: 12px;}/* 滚动槽 */::-webkit-scrollbar-track {    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);    border-radius: 10px;}/* 滚动条滑块 */::-webkit-scrollbar-thumb {    border-radius: 10px;    background: rgba(0,0,0,0.1);    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);}::-webkit-scrollbar-thumb:window-inactive {    background: rgba(255,0,0,0.4);}
</style>
