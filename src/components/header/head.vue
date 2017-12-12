<template>
    <header id='head_top'>
      <div class="h-return">
        <i class="iconfont icon-tixing" @click = "gotoAddress({path: '/mynotice'})"></i>
      </div>
      <div class="h-qd">
        <i @click = "goSign()"></i>
      </div>
    </header>
</template>

<script>
    import $ from 'src/plugins/jquery.min.js'

    export default {
        methods: {
          gotoAddress(path){
            this.$router.push(path)
          },
          goSign(){
            $(".mask-warp-index").show();
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
      .h-qd{
        width: .45rem;height: .88rem;display: flex;display: -webkit-flex;align-items: center;
        position: absolute;right: .24rem;top: 0;
        i{
          display: inline-block;cursor: pointer;
          width: .45rem;height: .45rem;background: url(../../images/qiandao-icon.png) no-repeat center;
          background-size: contain;
        }
      }
    }
</style>
