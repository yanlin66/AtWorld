<template>
  <div>
    <header>
      <div class="h-return">
        <a @click = "gotoAddress({path: '/mygroom'})"><i class="iconfont icon-fanhui"></i></a>
      </div>
      <div class="h-con">推荐排行总榜</div>
    </header>
    <div class="main main-bg">
      <div class="groom-warp">
        <div class="groom-top-tj">
          <ul>
            <li v-for="todo in profitlist">
              <span class="g-one">{{ todo.id }}</span>
              <span class="g-two">{{ todo.name }}</span>
              <span class="g-three">{{ todo.tel }}</span>
              <span class="g-four">{{ todo.money }}元</span>
            </li>
          </ul>
        </div>
      </div>
      <img src="../../images/1st.png" hidden id="t1">
      <img src="../../images/2cd.png" hidden id="t2">
      <img src="../../images/3th.png" hidden id="t3">
    </div>
  </div>
</template>

<script>
  import $ from 'src/plugins/jquery.min.js'

  export default {
    data(){
      return{
        profitlist:[
          {
            id:'1',
            name:'张三',
            money:'5600',
            tel:'15155111151',
          },
          {
            id:'2',
            name:'李四',
            money:'520',
            tel:'18012345671',
          },
          {
            id:'3',
            name:'王五',
            money:'100',
            tel:'16885859265',
          }
          ,
          {
            id:'4',
            name:'王五',
            money:'10',
            tel:'16885859265',
          },
        ]
      }
    },
    mounted(){
      $(function () {
        for(let i=0;i<$(".groom-top-tj ul li").length;i++){
          let dom=$(".groom-top-tj ul li").eq(i);
          if(dom.children(".g-one").html()==='1'){
            let t1=$("#t1").attr('src');
            dom.children(".g-one").html('<img src='+t1+'>').children("img").css("width",'.4rem')
          }else if(dom.children(".g-one").html()==='2'){
            let t2=$("#t2").attr('src');
            dom.children(".g-one").html('<img src='+t2+'>').children("img").css("width",'.4rem')
          }else if(dom.children(".g-one").html()==='3'){
            let t3=$("#t3").attr('src');
            dom.children(".g-one").html('<img src='+t3+'>').children("img").css("width",'.4rem')
          }
        }
      })
    },
    methods: {
      gotoAddress(path){
        this.$router.push(path)
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
    width: 100%;height: .88rem;background-color: #f90;
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

  .groom-top-tj{
    width: 100%;padding: 0 .24rem;background-color: #fff;
    ul{
      width: 100%;
      li{
        width: 100%;border-bottom: 1px solid #ddd;padding: 0 .1rem;
        display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;
        span{
          font-size: .28rem;line-height: .8rem;height: .8rem;color: #656565;
        }
        img{
          width: .4rem;
        }
        .g-one{
          width: .4rem;text-align: center;
          color: #282828;font-weight: 600;
        }
        .g-two{
          width: 20%;text-align: center;
        }
        .g-three{
          width: 30%;text-align: center;
        }
        .g-four{
          width:1.5rem;text-align: center;
          color: #ff0101;
        }
      }
      li:last-child{
        border-bottom: none;
      }
    }
    a{
      display: block;height: .8rem;line-height: .8rem;
      width: 100%;text-align: center;font-size: .26rem;color: #989898;
      i{
        font-size: .24rem;margin-left: .1rem;color: #989898;
      }
    }
  }
</style>
