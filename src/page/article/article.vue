<template>
  <div>
    <head-top3></head-top3>
    <div class="main main-bg">
      <div class="ap-help">
        <ul class="clear">
          <li>
            <img src="../../images/zs1.jpg">
            <div>入职风采</div>
          </li>
          <li>
            <img src="../../images/zs2.jpg">
            <div>报名网点</div>
          </li>
          <li>
            <img src="../../images/zs3.jpg">
            <div>新手入职</div>
          </li>
          <li>
            <img src="../../images/zs4.jpg">
            <div>常见问题</div>
          </li>
          <li>
            <img src="../../images/zs5.jpg">
            <div>平台介绍</div>
          </li>
          <li>
            <img src="../../images/zs6.jpg">
            <div>分享赚钱</div>
          </li>
          <li>
            <img src="../../images/zs7.jpg">
            <div>我要投诉</div>
          </li>
          <li>
            <img src="../../images/zs8.jpg">
            <div>法律援助</div>
          </li>
        </ul>
      </div>
      <div style="height: 1.2rem"></div>
    </div>
    <foot-guide  is-flag3="true"></foot-guide>
  </div>
</template>

<script>
  import footGuide from 'src/components/footer/footGuide'
  import headTop3 from 'src/components/header/head-article'
  import 'src/plugins/swiper.min.js'
  export default {
    data(){
      return{

      }
    },

    components:{
      footGuide,headTop3,
    },

  }

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  @import "../../style/swiper.min.css";

  //安娉助手
  .ap-help{
    width: 100%;padding: .3rem .24rem 0;
    ul{
      width: 100%;
      li{
        width: 48.5%;position: relative;float: left;margin-right: 3%;margin-bottom: .2rem;
        img{
          display: block;width: 100%;border-radius: 5px;
        }
        div{
          position: absolute;top: 0;left: 0;width: 100%;height: 100%;padding: 1rem;font-size: .32rem;color: #fff;line-height: inherit;
        }
      }
      li:nth-child(2n){
        margin-right: 0;
      }
    }
  }
</style>
