<template>
  <div>
    <header id='head_top3'>
      <div class="h-con">
        AtWorld-Help
      </div>
    </header>
    <div class="main main-bg">
      <div class="ap-help">
        <img class="apzs-bg" src="../../images/apzs/apzs-bg.png">
        <ul class="ap-type1">
          <li>
            <div>
              <a @click = "gotoAddress({path: '/lottery'})">
                <img src="../../images/apzs/rztp.png">
                <span>Help风采</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a @click = "gotoAddress({path: '/lottery'})">
                <img src="../../images/apzs/bmwd.png">
                <span>Help网点</span>
              </a>
            </div>
          </li>
        </ul>
        <ul class="ap-type2">
          <li>
            <div>
              <a @click = "gotoAddress({path: '/lottery'})">
                <img src="../../images/apzs/new.png">
                <span>新手指导</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a @click = "gotoAddress({path: '/lottery'})">
                <img src="../../images/apzs/pingtai.png">
                <span>常见问题</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a @click = "gotoAddress({path: '/lottery'})">
                <img src="../../images/apzs/zhuanqian.png">
                <span>分享抽奖</span>
              </a>
            </div>
          </li>
        </ul>
        <ul class="ap-type2">
          <li>
            <div>
              <a @click = "gotoAddress({path: '/lottery'})">
                <img src="../../images/apzs/falvyuanzhu.png">
                <span>Help声明</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a @click = "gotoAddress({path: '/lottery'})">
                <img src="../../images/apzs/wenti.png">
                <span>法律援助</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a @click = "gotoAddress({path: '/lottery'})">
                <img src="../../images/apzs/tousu.png">
                <span>我要投诉</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <foot-guide  is-flag3="true"></foot-guide>
  </div>
</template>

<script>
  import footGuide from 'src/components/footer/footGuide'
  import 'src/plugins/swiper.min.js'
  export default {
    data(){
      return{

      }
    },
    components:{
      footGuide,
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
    width: 100%;height: 5rem;background-color: rgba(0,0,0,0);
    padding: 0 .24rem;position: fixed;top: 0;left: 0;z-index: 999;
    .h-con{
      width: 100%;height: 100%;line-height: 5rem;text-align: center;
      font-size: .6rem;color: #fff;font-weight: 600;
    }
  }
  .main{
    top: 0;
  }
  //安娉助手
  .ap-help {
    width: 100%;
  }
  .ap-help .apzs-bg {
    display: block;
    width: 100%;
  }
  .ap-help .ap-type1 {
    width: 100%;
    margin: .1rem 0;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
  }
  .ap-help .ap-type1 li {
    width: 49%;
    position: relative;
    float: left;
    height: 2rem;
    background-color: #fff;
    border-radius: .3rem;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }
  .ap-help .ap-type1 li div a {
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }
  .ap-help .ap-type1 li div a img {
    width: 1.1rem;
    margin-right: .2rem;
  }
  .ap-help .ap-type1 li div a span {
    font-size: .28rem;
    color: #989898;
  }
  .ap-help .ap-type2 {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .1rem;
  }
  .ap-help .ap-type2 li {
    width: 32.5%;
    position: relative;
    float: left;
    height: 2rem;
    background-color: #fff;
    border-radius: .3rem;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }
  .ap-help .ap-type2 li div a {
    text-align: center;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .ap-help .ap-type2 li div a img {
    width: .8rem;
    height: .8rem;
    display: block;
    margin-bottom: .2rem;
  }
  .ap-help .ap-type2 li div a span {
    font-size: .28rem;
    color: #989898;
  }
</style>
