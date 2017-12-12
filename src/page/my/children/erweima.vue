<template>
  <div>
    <header>
      <div class="h-return">
        <a @click = "goback()"><i class="iconfont icon-fanhui"></i></a>
      </div>
      <div class="h-con">
        我的推广二维码
      </div>
    </header>
    <div class="main main-bg">
      <div class="tj-warp" >
        <div class="ewm-big">
          <img src="../../../images/erweima-big.jpg">
        </div>
        <div class="yqm">邀请码：{{yqm}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'src/plugins/jquery.min.js'

  export default {
    data(){
      return{
        yqm: this.$route.query.plan>0?sessionStorage.getItem("usererweima") : localStorage.getItem('usererweima')
      }
    },
    created () {

    },
    components:{
    },
    methods: {
      goback(){
        history.go(-1);
      }
    },
  }

</script>

<style lang="scss" scoped>
  @import '../../../style/mixin';

  .main-bg{
    bottom: 0;
  }
  header{
    width: 100%;height: .88rem;background-color: #22b4b9;
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

  .tj-warp{
    position: absolute;top: 0;left: 0;bottom: 0;right: 0;margin: auto;
    background-repeat: no-repeat;background-position: center;background-size: 100% 100%;
    padding-top: 74.5%;background-image: url(../../../images/tuijian-bg.jpg);
    .ewm-big{
      width: 40%;padding: .05rem;border-radius: 5px;background-color: #fff;border: .07rem solid #86d6d9;margin: 0 auto .3rem;
      img{
        width: 100%;display: block;margin: 0 auto;
      }
    }
    .yqm{
      font-size: .32rem;color: #282828;text-align: center;
    }
  }
</style>
