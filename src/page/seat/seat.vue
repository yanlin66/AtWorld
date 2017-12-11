<template>
  <div>
    <header>
      <div class="h-return">
        <a @click = "gotoAddress({path: '/my'})"><i class="iconfont icon-fanhui"></i></a>
      </div>
      <div class="h-con">
        设置
      </div>
    </header>
    <div class="main main-bg">
      <div class="fit-warp">
        <a @click = "gotoAddress({path: '/editpassword'})" style="margin-bottom: 0;border-bottom: 1px solid #ddd;">修改密码</a>
        <a  @click="clearinfo()">删除账号信息</a>
        <a @click = "gotoAddress({path: '/about'})">关于应用</a>
      </div>
      <a class="login-out" @click="outuser()">退出登录</a>
    </div>
  </div>
</template>

<script>
  import $ from 'src/plugins/jquery.min.js'

  export default {
    data(){
      return{

      }
    },
    created () {

    },
    methods: {
      gotoAddress(path){
        this.$router.push(path)
      },
      outuser(){
        this.$router.push('/login')
      },
      clearinfo(){
        //清空登录session
        localStorage.clear();
        this.$router.push('/login')
      }
    },
  }

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';

  .main-bg{
    bottom: 0;
  }
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

  .fit-warp{
    width: 100%;margin-top: .2rem;
    a{
      display: block;width: 100%;height: .88rem;line-height: .88rem;text-align: center;
      font-size: .3rem;color: #656565;background-color: #fff;margin: 0 auto .2rem;
    }
  }
  .login-out{
    display: block;width: 95%;height: .88rem;line-height: .88rem;text-align: center;
    font-size: .3rem;color: #fff;background-color: #FF9933;margin: 1rem auto 0;border-radius: 5px;
  }
</style>
