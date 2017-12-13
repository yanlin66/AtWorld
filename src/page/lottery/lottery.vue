<template>
  <div>
    <header>
      <div class="h-return">
        <a  @click = "goback()"><i class="iconfont icon-fanhui"></i></a>
      </div>
    </header>
    <div class="main main-img">
      <div class="lottery-draw">
        <div class="lottery-warp">
          <!--转盘内容-->
          <div class="lottery-con"></div>
          <div class="go-start"></div>
        </div>
        <div class="lottery-down"></div>
        <!--剩余抽奖机会-->
        <div class="day-bg">
          <img src="../../images/lottery/zj-bg.png">
          <div class="day-chance">
            <span>今日剩余次数：<i id="lotterynum">{{lottery}}</i></span>
            <div>每日分享可获得1-3次抽奖机会</div>
          </div>
          <ul class="day-zj">
            <li>
              <span>张三</span><span>157XXXX6621</span><span>phone8一台</span>
            </li>
            <li>
              <span>张三</span><span>157XXXX6621</span><span>phone8一台</span>
            </li>
            <li>
              <span>张三</span><span>157XXXX6621</span><span>phone8一台</span>
            </li>
            <li>
              <span>张三</span><span>157XXXX6621</span><span>phone8一台</span>
            </li>
          </ul>
        </div>
      </div>
      <!--活动说明-->
      <div class="cj-bottom">
        <img src="../../images/lottery/cj-bottom.jpg">
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'src/plugins/jquery.min.js'

  export default {
    data(){
      return{
        lottery:localStorage.getItem('lotterynum'),
        prize:'',
      }
    },
    mounted(){
      let that=this;
    /*
    * prizetype值
    * 1是没中
    * 2是一元话费
    * 3是二元话费
    * 4是100M流量
    * */
      $(function () {
        window.requestAnimFrame = (function () {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60)
          }
        })();
        let totalDeg = 360 * 3 + 0;
        let steps = [];
        let lostDeg = [15, 60, 105, 150, 195, 240, 285, 330];
        let prizeDeg = [15, 60, 105,150];
        let sncode;
        //抽取次数
        let count = 0;
        let now = 0;
        let a = 0.01;let i;
        let outter, inner, timer, running = false;

        function countSteps() {
          let t = Math.sqrt(2 * totalDeg / a);
          //console.log('接受传来的初始度数：'+totalDeg);
          let v = a * t;
          for (i = 0; i < t; i++) {
            steps.push((2 * v * i - a * i * i) / 2);
          }
          steps.push(totalDeg);
          //console.log('最后添加旋转角度：'+totalDeg)
        }
        function step() {
          outter.style.webkitTransform = 'rotate(' + steps[now++] + 'deg)';
          //console.log('rotate(' + steps[now++] + 'deg)');
          if (now < steps.length) {
            requestAnimFrame(step)
          } else {
            //console.log('大转盘开始按钮再次点击按钮open');
            running = false;
            setTimeout(function () {
              //console.log('正常运行-判断结果');
              if (that.prize != null) {
                let type = "";
                console.log(that.prize);
                if(that.prize === '2'){
                  alert('恭喜您抽中1元话费')
                }else if(that.prize === '3'){
                  alert('恭喜您抽中2元话费')
                }else if(that.prize === '4'){
                  alert('恭喜您抽中100兆流量')
                }

              } else {
                alert("不好意思，您未中奖，谢谢您的参与，下次再接再厉！");
              }
            }, 200)
          }
        }

        //开始游戏
        function start(deg) {
          //console.log('开始执行大转盘');
          deg = deg || lostDeg[parseInt((lostDeg.length)/2 * Math.random())];
          //console.log('随机deg:'+parseInt((lostDeg.length)/2 * Math.random()));
          running = true;
          //console.log('大转盘开始按钮再次点击按钮失效');
          clearInterval(timer);
          totalDeg = 360 * 5 + deg;
          //console.log('执行totalDeg='+totalDeg);
          steps = [];
          //console.log('清空旋转角度数组');
          now = 0;
          //console.log('重置判断条件为0');
          countSteps();
          //console.log('闭包调用step（）');
          requestAnimFrame(step)
        }

        window.start = start;
        outter = document.querySelector(".sign-con");
        inner = document.querySelector(".go-start");
        i = 10;
        $(".go-start").click(function () {
          if($("#lotterynum").text()<1){
            alert('抽奖次数不足');
            return false;
          }
          //抽奖次数处理
          let lotterynum=$("#lotterynum").text()-1;
          $("#lotterynum").text(lotterynum);
          localStorage.setItem('lotterynum',lotterynum);


          if (running) return;

          //运行代码
          $.ajax({
            dataType:"JSONP",
            jsonp:"callback",//请求自动带上callback参数，callback值为jsonpCallback的值
            jsonpCallback:"lottery",//接口服务器应该返回字符串数据格式：login(JSON数据)
            url: "http://palpitation.shop/api/sign.php",
            beforeSend: function () {
              running = true;
              timer = setInterval(function () {
                i += 5;
                outter.style.webkitTransform = 'rotate(' + i + 'deg)';
              }, 1)
            },
            success: function (data) {
              if (data.error == "invalid") {
                alert("您今天已经抽了 3 次奖。");
                count = 3;
                clearInterval(timer);
                return
              }
              if (data.success) {
                that.prize = data.prizetype;
                start(prizeDeg[data.prizetype - 1])
              } else {
                that.prize = null;
                start(prizeDeg[0])
              }
              running = false;
              count++
            },
            error: function () {
              that.prize = null;
              start(prizeDeg[0]);
              running = false;
              count++
            },
            timeout: 4000
          })
        })

      });
    },
    methods: {
      gotoAddress(path){
        this.$router.push(path)
      },
      goback(){
        history.go(-1);
      }
    },
  }

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';

  .main{
    bottom: 0;top: 0;
  }
  header{
    width: 100%;height: .88rem;background-color: rgba(255,255,255,0);
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

  //大转盘
  .main-img{
    background-repeat: no-repeat;background-position: top;background-size: contain;
    background-color: #ea5243;background-image: url(../../images/lottery/lottery-bg.jpg);
    .cj-bottom{
      width: 100%;
      img{
        display: block;width: 100%;
      }
    }
  }
  .lottery-draw{
    width: 100%;padding: 0 .36rem;
    .lottery-warp{
      width: 5.6rem;height: 5.6rem;margin: .88rem auto 0;position: relative;background-image: url(../../images/lottery/lottery-conbg-ajj.png);
      background-repeat: no-repeat;background-position: center;background-size: contain;
      .lottery-con{
        width: 5rem;height: 5rem;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;
        background-repeat: no-repeat;background-position: center;background-size: contain;background-image: url(../../images/lottery/lottery-con-add.png);
      }
      .go-start{
        width: 2.2rem;height: 2.2rem;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;background-image: url(../../images/lottery/rotate-static.png);
        background-repeat: no-repeat;background-position: center;background-size: contain;z-index: 999;
      }
    }
    .lottery-down{
      width: .66rem;height: .4rem;margin:.2rem auto;background-image: url(../../images/lottery/lottery-down.png);
      background-repeat: no-repeat;background-position: center;background-size: contain;
    }
    .day-bg{
      width: 100%;position: relative;
      img{
        display: block;width: 100%;
      }
      .day-chance{
        width: 100%;text-align: center;padding-top: .15rem;
        position: absolute;left: 0;top: 0;
        span{
          font-size: .36rem;color: #f4e92b;display: block;height: .7rem;line-height: .7rem;
          i{
            color: #f4e92b;
          }
        }
        div{
          font-size: .24rem;color: #f4e92b;padding: .1rem 0 .15rem;
        }
      }
      .day-zj{
        width: 100%;padding: 0 .6rem;
        position: absolute;bottom: .3rem;left: 0;right: 0;margin: auto;
        height: 2.4rem;
        li{
          width: 100%;display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;
          span{
            font-size: .28rem;color: #fff;line-height: .6rem;
          }
        }
      }
    }
  }
</style>
