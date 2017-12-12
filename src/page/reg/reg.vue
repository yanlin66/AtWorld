<template>
  <div>
    <head-top :header="headerHtml"></head-top>
    <div class="main">
      <div class="login-warp">
        <form action="javascript:;">
          <label>
            <span>用户名</span><input type="tel" placeholder="请输入手机号码" maxlength="11" id="user">
          </label>
          <label>
            <span>密码</span><input type="password" placeholder="请输入6-20位密码" id="password">
          </label>
          <label>
            <span>昵称</span><input type="text" placeholder="请输入姓名" id="author">
          </label>
          <label>
            <span>邀请码</span><input type="text" placeholder="请输入邀请码" style="padding-right: 30%"><i class="xt">(选填)</i>
          </label>
          <div class="protocol">
            <input type="checkbox" checked>同意<span @click = "protocol()">《用户协议》</span>
          </div>
          <button type="submit" class="reg-btn"  @click = "reg()">注册</button>
          <div class="go-reg">
            已有账号？<a  @click = "gohref({path: '/login'})">立即登录</a>
          </div>
        </form>
      </div>
    </div>

    <protocol-mask></protocol-mask>
  </div>
</template>

<script>
  import headTop from 'src/components/header/head-login'
  import protocolMask from 'src/components/maskalert/protocol-mask'
  import $ from 'src/plugins/jquery.min.js'
  import verifyCode from 'src/plugins/gVerify.js'
  export default {
    data(){
      return{
        //账户信息
        addinfo:'',
        res:"",
        //输入次数
        num:0,
        headerHtml:'注册'
      }
    },
    mounted(){
      $(".close-mask").click(function () {
        $(".mask-warp").hide();
      })
    },
    components:{
      headTop,protocolMask
    },
    methods:{
      //跳转
      gohref(path){
        this.$router.push(path)
      },
      //查看用户协议
      protocol(){
        $(".mask-warp").show();
      },
      reg(){
        let user=$("#user").val();
        let password=$("#password").val();
        let author=$("#author").val();
        let that=this;
        let myDate = new Date();//获取系统当前时间
        //保存登录session
        localStorage.setItem("l-phone", user);
        localStorage.setItem("l-password", password);
        localStorage.setItem("username", author);
        localStorage.setItem("usertype", '普通登录');
        localStorage.setItem("usermoney", '100');
        localStorage.setItem("usererweima", '8888');
        localStorage.setItem("reg-time", myDate.getTime());
        localStorage.setItem("usertx", 'http://palpitation.shop/public/images/tx/cs.jpg');
        //跳转首页
        that.$router.push('/home');
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  //首页
  .main{
    bottom: 0;
  }
  .login-warp{
    margin-top: 1.2rem;width: 100%;padding: 0 .44rem;
    label{
      display: block;width: 100%;height: 1rem;
      position: relative;
      span{
        font-size: .28rem;color: #282828;padding-top: 1px;
        display: block;width: 1.2rem;height: 1rem;line-height: 1rem;
        position: absolute;left:0;top:0;
      }
      #v_container{
        position: absolute;right: 0;top: 0;
        width:2.3rem;height: 1rem;cursor: pointer;
      }
      ::-webkit-input-placeholder {color: #bbb;}
      :-moz-placeholder {color: #bbb;}
      ::-moz-placeholder {color: #bbb;}
      :-ms-input-placeholder {color: #bbb;}
      input{
        display: block;width: 100%;height:1rem;padding-left: 1.2rem;padding-right: .6rem;
        border-bottom: 1px solid #ddd;color: #282828;font-size: .28rem;border-radius: 0;
      }
      i{
        width: .6rem;text-align: center;color: #bbb;
        position: absolute;right: 0;top: 0;bottom: 0;margin: auto;line-height: 1rem;
      }
      .xt{
        width: 1.5rem;font-size: .3rem;
      }
      #user-clear{
        font-size: .5rem;
      }
      #passward-show{
        font-size: .40rem;
      }
      .yzm{
        position: absolute;right: 0;top: 0;bottom: 0;margin: auto;width: 1.5rem;
        font-size: .24rem;color:#f93;text-align: center;line-height: 1rem;
      }
      .yzm:before{
        content: "";
        position: absolute;left: -.22rem;top: 0;bottom: 0;margin: auto;
        width: 1px;height: .36rem;background-color: #ddd;
      }
    }
    .protocol{
      margin-top: .4rem;width: 100%;height: 1rem;position: relative;
      font-size: .26rem;color: #666;text-align: center;line-height: 1rem;
      span{
        color:#f93;
      }
      input{
        display: inline-block;width: .25rem;height: .25rem;margin-right: .2rem;background-color: transparent;
      }
    }
    .fg-passward{
      width: 100%;text-align: right;
      height: .6rem;line-height: .6rem;
      a{
        color:#f93;font-size: .26rem;
      }
    }
    .login-btn{
      display: block;width:100%;height:1rem;background-color:#f93;color: #fff;
      font-size: .3rem;text-align: center;line-height: 1rem;border-radius: 5px;
      margin-top: .82rem;
    }
    .fg-btn{
      display: block;width:100%;height:1rem;background-color:#f93;color: #fff;
      font-size: .3rem;text-align: center;line-height: 1rem;border-radius: 5px;
      margin-top: .82rem;
    }
    .reg-btn{
      display: block;width:100%;height:1rem;background-color:#f93;color: #fff;
      font-size: .3rem;text-align: center;line-height: 1rem;border-radius: 5px;
    }
    .go-reg{
      width: 100%;height:1rem;text-align: center;line-height: 1rem;
      font-size: .3rem;
      a{
        color:#f93;
      }
    }
  }
</style>
