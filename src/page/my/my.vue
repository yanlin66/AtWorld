<template>
  <div>
    <header id='head_top4'>
      <div class="h-set" @click = "gotoAddress({path: '/seat'})">
        <i></i>
      </div>
    </header>
    <div class="main main-bg">
      <div class="myhome-warp">
        <div class="myhome-tx">
          <div class="i-left">
            <img v-bind:src="myinfo.imgsrc" >
          </div>
          <div class="i-right">
            <div class="i-name">{{myinfo.name}} <img src="../../images/erweima.png" class="erweima" @click = "gotoAddress({path: '/erweima'})"></div>
            <div class="i-status">{{myinfo.type}}</div>
            <div class="i-bottom">邀请码：{{myinfo.yqm}}</div>
            <i class="iconfont i-qianjin  icon-qianjin-copy"  @click = "gotoAddress({path: '/home'})"></i>
          </div>
        </div>
        <div class="myhome-box">
          <div class="box-in">
            <a @click = "goSign()">
              <img src="../../images/qiandao-icon1.png">
              <span>每日签到</span>
            </a>
          </div>
          <div class="box-in">
            <a @click = "gotoAddress({path: '/lottery'})">
              <img src="../../images/choujiang-icon.png">
              <span>去抽奖</span>
            </a>
          </div>
          <div class="box-in">
            <a href="javascript:;">
              <div>积分：<i id="btmoney">{{myinfo.btmoney}}</i></div>
              <span><i id="time-h">{{timeH}}</i>后赠送10积分</span>
            </a>
          </div>
        </div>
        <ul class="myhome-list">
          <li>
            <a @click = "gotoAddress({path: '/infor'})">
              <i class="icon"></i>
              <span>个人资料</span>
              <i class="qianjin-icon"></i>
            </a>
          </li>
          <li>
            <a @click = "gotoAddress({path: '/mymoney'})">
              <i class="icon"></i>
              <span>我的钱包</span>
              <i class="qianjin-icon"></i>
            </a>
          </li>
          <li>
            <a @click = "gotoAddress({path: '/myprize'})">
              <i class="icon"></i>
              <span>我的奖品</span>
              <i class="qianjin-icon"></i>
            </a>
          </li>
          <li>
            <a @click = "gotoAddress({path: '/mycollection'})">
              <i class="icon"></i>
              <span>我的收藏</span>
              <i class="qianjin-icon"></i>
            </a>
          </li>
          <li>
            <a @click = "gotoAddress({path: '/myenroll'})">
              <i class="icon"></i>
              <span>我的报名</span>
              <i class="qianjin-icon"></i>
            </a>
          </li>
        </ul>
        <ul class="myhome-list-1">
          <li>
            <a @click = "gotoAddress({path: '/mygroom'})">
              <i class="icon"></i>
              <span>我的推荐</span>
              <i class="qianjin-icon"></i>
            </a>
          </li>
          <li>
            <a @click = "gotoAddress({path: '/mynotice'})">
              <i class="icon"></i>
              <span>消息通知</span>
              <i class="qianjin-icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--签到-->
    <div class="mask-warp-index">
      <div class="mask-box">
        <a @click = "gotoAddress({path: '/lottery'})" class="cj"></a>
        <i class="mask-close iconfont icon-guanbi"></i>
      </div>
    </div>

    <foot-guide  is-flag4="true"></foot-guide>
  </div>
</template>

<script>
  import footGuide from 'src/components/footer/footGuide'
  import $ from 'src/plugins/jquery.min.js'

  export default {
    data(){
      return{
        timeH:'',
        myinfo: {
            name: sessionStorage.getItem("username") || localStorage.getItem('username'),
            type: sessionStorage.getItem("usertype") || localStorage.getItem('usertype'),
            yqm: sessionStorage.getItem("usererweima") || localStorage.getItem('usererweima'),
            btmoney:sessionStorage.getItem("usermoney")|| localStorage.getItem('usermoney'),
            imgsrc:sessionStorage.getItem("usertx")  || localStorage.getItem('usertx'),
        },
        newjf:''
      }
    },
    created () {
      let that=this;
      let newDate =new Date();
      let EndTime = localStorage.getItem("login-time"); //截止时间
      let NowTime = new Date();
      let t = NowTime.getTime()-EndTime;
      let h = Math.floor(t / 1000 / 60 / 60 % 24);
      let m = Math.floor(t / 1000 / 60 % 60);
      let cc=parseInt(localStorage.getItem('usermoney'));
      that.newjf=parseInt(t / 1000 / 60 / 60)*10+cc;
      localStorage.setItem('usermoney',that.newjf);
      if (m > 0) {
        that.timeH = (60-m)+'分钟';
      } else {
        that.timeH = '1时'+m+'分';
      }
    },
    components:{
      footGuide,
    },
    mounted() {
      let that=this;

      //判断账号状态 如果休眠不显示倒计时
      if(localStorage.getItem('status')==='休眠中'){
        $(".myhome-warp .myhome-box .box-in:eq(2) span").html('已冻结');
      }

      $("#btmoney").html(that.newjf);
      $(".mask-close").click(function () {
        $(".mask-warp-index").hide();
      })
    },
    methods: {
      gotoAddress(path){
        this.$router.push(path)
      },
      goSign(){
        if(localStorage.getItem('signstatus') === '0'){
          $(".mask-warp-index").show();
          localStorage.setItem('signstatus','1');
          let lotterynum=localStorage.getItem('lotterynum')+1;
          localStorage.setItem('lotterynum',lotterynum);
        }else{
          alert('今日已签到')
        }
      },
    },
  }

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';

  header{
    width: 100%;height: .88rem;background-color: #FF9933;
    padding: 0 .24rem;position: static;top: 0;left: 0;z-index: 999;
    .h-set{
      width: .7rem;height: .88rem;
      position: absolute;right: .24rem;top: 0;
      display: flex;display: -webkit-flex;align-items: center;justify-content: flex-end;
      i{
        display: inline-block;width: .4rem;height: .4rem;
        background: url(../../images/set-icon.png) no-repeat center;background-size: contain;
      }
    }
  }
  //个人中心
  .myhome-warp{
    width: 100%;padding-bottom: 1.2rem;
    .myhome-tx{
      width: 100%;padding:0 .36rem;height: 2.1rem;background-color: #FF9933;
      display: flex;display: -webkit-flex;justify-content: space-between;
      .i-left{
        width: 1.6rem;height: 1.6rem;border: 4px solid rgba(255,255,255,.6);margin-left: .3rem;border-radius: 50%;
        overflow: hidden;
        img{
          display: block;width: 100%;height: 100%;
        }
      }
      .i-right{
        width: 67%;height: 100%;padding-left: .24rem;position: relative;
        .i-name{
          font-size: .3rem;color: #fff;line-height: .6rem;height: .6rem;
          display: flex;display: -webkit-flex;align-items: center;
          .erweima{
            display: block;width: .4rem;height: .4rem;margin-left: .2rem;
          }
        }
        .i-status{
          font-size: .24rem;color: #fff;
        }
        .i-bottom{
          font-size: .24rem;color: #fff;margin-top: .3rem;
        }
        .i-qianjin{
          position: absolute;top: 0;bottom: 0;right:.24rem;margin: auto;
          font-size: .4rem;color: #fff;line-height: 1.6rem;
        }
      }
    }
    .myhome-box{
      width: 100%;background-color: #fff;height: 2.1rem;padding: 0 .36rem;
      display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;
      .box-in{
        width: 2.5rem;text-align: center;line-height: .3rem;
        img{
          width: .6rem;display: block;margin: .25rem auto 0;
        }
        span{
          font-size: .24rem;color: #282828;
        }
        div{
          height: .8rem;text-align: center;line-height: 1.2rem;font-size: .3rem;
          i{
            color: #ff0505;font-style: normal;
          }
        }
      }
    }
    .myhome-list{
      width: 100%;margin-top: .2rem;background-color: #fff;
      li{
        width: 100%;height: .88rem;border-bottom: 1px solid #ddd;position: relative;padding: 0 .24rem;
        a{
          width: 100%;height: 100%;position: relative;
          display: flex;display: -webkit-flex;align-items: center;justify-content: flex-start;
        }
        .icon{
          width: .4rem;height:.4rem;display: inline-block;
          background-repeat: no-repeat;background-position:center;background-size: contain;
        }
        span{
          font-size: .3rem;color: #656565;margin-left: .2rem;
        }
        .qianjin-icon{
          display: inline-block;width: .3rem;height: .3rem;background-image: url(../../images/more.png);
          background-repeat: no-repeat;background-position:center;background-size: contain;
          position: absolute;right: 0;top: 0;bottom: 0;margin: auto;
        }
      }
      li:nth-child(1){
        .icon{
          background-image: url(../../images/gerenziliao.png);
        }
      }
      li:nth-child(2){
        .icon{
          background-image: url(../../images/wodeqianbao.png);
        }
      }
      li:nth-child(3){
        .icon{
          background-image: url(../../images/wodeliping.png);
        }
      }
      li:nth-child(4){
        .icon{
          background-image: url(../../images/wodeshoucang.png);
        }
      }
      li:nth-child(5){
        border-bottom: none;
        .icon{
          background-image: url(../../images/wodebaoming.png);
        }
      }
    }
    .myhome-list-1{
      width: 100%;margin-top: .2rem;background-color: #fff;
      li{
        width: 100%;height: .88rem;border-bottom: 1px solid #ddd;position: relative;padding: 0 .24rem;
        a{
          width: 100%;height: 100%;position: relative;
          display: flex;display: -webkit-flex;align-items: center;justify-content: flex-start;
        }
        .icon{
          width: .4rem;height:.4rem;display: inline-block;
          background-repeat: no-repeat;background-position:center;background-size: contain;
        }
        span{
          font-size: .3rem;color: #656565;margin-left: .2rem;
        }
        .qianjin-icon{
          display: inline-block;width: .3rem;height: .3rem;background-image: url(../../images/more.png);
          background-repeat: no-repeat;background-position:center;background-size: contain;
          position: absolute;right: 0;top: 0;bottom: 0;margin: auto;
        }
      }
      li:nth-child(1){
        .icon{
          background-image: url(../../images/wodetuijie.png);
        }
      }
      li:nth-child(2){
        border-bottom: none;
        .icon{
          background-image: url(../../images/xiaoxitongzhi.png);
        }
      }
    }
  }

  //签到
  .mask-warp-index{
    width: 100%;position: fixed;top:0;bottom: 0;left: 0;right: 0;margin: auto;
    background-color: rgba(0,0,0,0.4);z-index: 9999;display: none;
    .mask-box{
      width: 5.48rem;height:6.5rem;border-radius: 10px;background-image:url(../../images/tankuang.jpg);
      background-repeat: no-repeat;background-position: center;background-size: contain;
      position: absolute;top:0;bottom: 0;left: 0;right: 0;margin: auto;
      .cj{
        display: block; position: absolute;bottom: .65rem;left: 0;right: 0;margin: auto;
        width: 3rem;height: .88rem;
      }
      .mask-close{
        font-size: .4rem;color: #fff;text-align: center;
        position: absolute;bottom: -1.2rem;left: 0;right: 0;margin: auto;
      }
    }
  }
</style>
