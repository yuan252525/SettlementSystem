<template lang="html">
  <div>
    <div class="">
      <div class="logo-icon-con">
        <img src="../../../../static/img/zhyimg/zhy-logo.png" />
        <img style="margin-left: 30px;" src="../../../../static/img/zhyimg/title.png" />
      </div>
    </div>
    <div class="jxdd_sticky clearfix">
      <!-- content start-->
      <div class="">
        <div class="jxdd_cont">
          <!-- header start -->
          <!-- header end-->
          <!-- 100% type start -->
          <div class="jxdd_w100">
            <!-- cont start -->
            <div class="jxdd_w100">
              <div class="green-con relative">
                <img class="bgimg absolute" src="../../../../static/img/zhyimg/zhy-tooling.png">
                <div class="login-con absolute">
                  <p class="user-login-title">用户登录</p>
                  <i-form >
                    <p class="user-til">&nbsp;&nbsp;用户名</p>
                    <Form-item >
                      <div class="user-con relative">
                        <Input class="people" ></Input>
                        <Icon type="ios-person-outline" slot="prepend" class="person"></Icon>
                        <Icon type="close" slot="pend" class="clears"></Icon>
                      </div>
                    </Form-item>
                    <p class="user-til">&nbsp;&nbsp;密码</p>
                    <Form-item >
                      <div class="user-con relative">
                        <Input class="clock" type="password"></Input>
                        <Icon type="ios-locked-outline" slot="prepend" class="locked"></Icon>
                        <Icon type="close" slot="pend" class="clears"></Icon>
                        <p class="verify-erro-tips" ></p>
                      </div>
                    </Form-item>
                    <p class="user-til">&nbsp;&nbsp;验证码</p>
                    <Form-item >
                      <div class="user-con relative">
                        <input type="text" class="verifys radius4" />
                        <img  class="verify-img">
                        <p class="verify-erro-tips"></p>
                      </div>
                    </Form-item>
                    <span class="verify-erro-tips"></span>

                      <Button class="sub-btns radius6" type="primary" >登录</Button>

                  </i-form>
                </div>
                <div class="triangles absolute"></div>
              </div>

            </div>
            <!-- cont end -->
          </div>
          <!-- 100% type end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    ready: function() {

    }
  }
</script>
<style>
  .ivu-input {
    width: 286px !important;
    height: 42px !important;
    border: 3px solid #ccc !important;
    padding-left: 35px !important;
    padding-right: 42px !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    float: left;
  }

  .ivu-icon-ios-person-outline:before,
  .ivu-icon-ios-locked-outline:before {
    font-size: 23px;
  }

  .ivu-form-inline .ivu-form-item {
    width: 371px;
    margin-right: 0 !important;
  }

  .ivu-form-item-content {
    line-height: 15px !important;
    font-size: 16px !important;
  }

  #sub-con .ivu-form-item-error .ivu-input:focus {
    border-color: #11B69D !important;
    box-shadow: rgba(17, 182, 157, .9) !important;
  }

  #sub-con .ivu-form-item-error-tip {
    position: absolute !important;
    top: 100% !important;
    text-align: right;
    right: 0 !important;
  }

  input[type="text"]:focus,
  input[type="password"]:focus {
    border: 3px solid #11B69D !important;
  }

  .ivu-btn-primary:hover {
    background-color: #11B69D !important;
    border-color: #e5e5e5 !important;
  }
</style>
<style >
  .jxdd_header {
    height: 225px;
    background: #fff;
  }

  .logo-icon-con {
    float: left;
    margin-left: 78px;
    margin-top: 89px;
  }

  .green-con {
    width: 100%;
    height: 682px;
    background: #11b69d;
  }

  .bgimg {
    top: 179px;
    left: 265px;
  }

  .login-con {
    width: 452px;
    height: 600px;
    padding-left: 40px;
    padding-right: 40px;
    background: #fff;
    top: 1px;
    right: 253px;
    box-shadow: -12px 12px 3px #0d9c94 !important;
    z-index: 10;
    border-top: 1px solid #11b69d;
    border-right: 1px solid #11b69d;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .jxdd_cont {
    top: 225px;
  }

  .triangles {
    width: 0;
    height: 0;
    border-bottom: 13px solid #0d9c94;
    border-left: 12px solid transparent;
    top: -13px;
    right: 705px;
  }

  .user-login-title {
    font-family: "微软雅黑";
    font-size: 26px;
    font-weight: bold;
    color: #11B69D;
    margin-top: 35px;
    text-align: center;
  }

  .clears {
    position: absolute;
    top: 16px;
    right: 118px;
    color: #ccc;
  }

  .user-til {
    font-family: "微软雅黑";
    font-size: 18px;
    color: #666;
    margin-top: 42px;
    margin-bottom: 10px;
  }

  .locked,
  .person {
    position: absolute;
    top: 11px;
    left: 12px;
  }

  .verifys {
    width: 153px !important;
    border: 3px solid #ccc;
    height: 42px;
    padding: 0 42px 0 35px;

    background-size: 23px;
    background-position: 5px center;
  }

  .verify-img {
    width: 143px;
    height: 42px;
    display: inline-block;
    float: right;
  }

  .verify-erro-tips {
    text-align: left;
    color: #f30;
    font-family: "微软雅黑";
  }

  .sub-btns {
    width: 100%;
    height: 63px;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    font-size: 20px;
    color: #fff;
    background: #11B69D;
  }
</style>
