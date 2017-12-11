<template>
  <div id="protocol_mask">
    <div class="mask-warp">
      <div class="mask-content">
        <p>
          本网站只是开发者演示所用网站，注册以及之后填写的所有信息都为自愿，关于信息的安全性本网站一概不负责，如有问题，请见谅。。。<br/><br/>
          对于您的注册和访问，开发人员Seek在此向您致敬 ·--vv--·<br/><br/><span id="time"></span>
        </p>
      </div>
      <div class="close-mask"></div>
    </div>
  </div>
</template>

<script>
  import $ from '../../plugins/jquery.min'
  export default {
    data(){
      return{
        time:'4'
      }
    },
    mounted(){
      let that=this;
      //向上循环播放
      setInterval(_ => {
        that.time--;
        $("#time").html(that.time+'s关闭');
        if(that.time<1){
          that.time=4;
          $(".mask-warp").hide();
        }
      }, 1000);
    },
  }

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';

  .mask-warp{
    position: fixed;top: 0;left: 0;right: 0;bottom: 0;margin: auto;z-index: 999;
    background-color: rgba(0,0,0,.6);display: none;
    .mask-content{
      width: 5rem;border-radius: 10px;background-color: #fff;margin: 3rem auto 0;z-index: 9999;
      p{
        width: 100%;height:6rem;padding: .24rem .3rem;color: #555;line-height: 1.6;font-size: .32rem;text-align: center;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
      }
    }
    .close-mask{
      position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;
    }
  }
  #time{
    color: #f93;
  }

</style>
