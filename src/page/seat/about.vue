<template>
  <div>
    <header>
      <div class="h-return">
        <a @click = "gotoAddress({path: '/seat'})"><i class="iconfont icon-fanhui"></i></a>
      </div>
      <div class="h-con">
        关于应用
      </div>
    </header>
    <div class="main">
      <p>
        <img src="https://avatars0.githubusercontent.com/u/23165837?s=460&v=4">
        开发者：Seek<br>
        开发环境：Vue+php<br>
        开发目的：展示<br>
        已有功能：登录，注册
        <span>开发日期：2017/12/10</span>
      </p>
    </div>
  </div>
</template>

<script>
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
    min-height: 0;
  }
  p{
    padding: 1rem .48rem;font-size: .4rem;color: #666;line-height: 1.4;
    img{
      display: block;width: 3rem;margin-bottom: .2rem;
    }
    span{
      display: block;color: #f93;margin-top: 1rem;
      width: 100%;text-align: right;
    }
  }
</style>
