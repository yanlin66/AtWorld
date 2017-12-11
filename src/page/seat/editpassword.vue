<template>
  <div>
    <header>
      <div class="h-return">
        <a @click = "gotoAddress({path: '/seat'})"><i class="iconfont icon-fanhui"></i></a>
      </div>
      <div class="h-con">
        修改密码
      </div>
    </header>
    <div class="main">
      <div class="login-warp">
        <form action="javascript:;">
          <label>
            <span>旧密码</span><input type="password" placeholder="请输入旧密码" id="oldpassword">
          </label>
          <label>
            <span>新密码</span><input type="password" placeholder="请输入新密码" id="newpassword">
          </label>
          <label>
            <span>确认</span><input type="password" placeholder="请再次输入新密码" id="qrpassword">
          </label>
          <button class="fg-btn" @click="edit()">确认</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'src/plugins/jquery.min.js'
  export default {
    methods: {
      gotoAddress(path){
        this.$router.push(path)
      },
      edit(){
        if($("#oldpassword").val() === localStorage.getItem("l-password")){
           if($("#newpassword").val() === $("#qrpassword").val()){
             localStorage.setItem("l-password",$("#qrpassword").val());
             let msg=confirm("密码修改成功，是否重新登录");
             if(msg){
               that.$router.push('/login');
             }else{
               //关闭
             }
           }else{
             alert('新密码两次输入不一致');
           }
        }else {
          alert('旧密码输入有误，请重新输入')
        }

      },
    },
  }

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';

  header{
    width: 100%;height: .88rem;background-color: #FF9933;
    padding: 0 .24rem;position: fixed;top: 0;left: 0;z-index: 999;
    .h-con{
      width: 100%;height: 100%;line-height: .88rem;text-align: center;
      font-size: .36rem;color: #fff;
    }
    .h-return{
      position: absolute;left: .24rem;top: 0;height: .88rem;
      i{
        position: absolute;left: 0;top: 0;bottom: 0;margin: auto;
        color: #fff;font-size: .4rem;line-height: .88rem;
      }
    }
  }
  //个人中心
  .main-bg{
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
        display: inline-block;width: .25rem;height: .25rem;margin-right: .2rem;
        font-family:"iconfont" !important;color:#f93;position: relative;top: 2px;
        font-size:.32rem;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      input:after{
        content: "\e604";
      }
      input:checked{
        background-color: #fff;
      }
      input:checked:after{
        content: "\e606";
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
