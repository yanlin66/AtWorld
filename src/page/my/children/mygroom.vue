<template>
  <div>
    <header>
      <div class="h-return">
        <a @click = "gotoAddress({path: '/my'})"><i class="iconfont icon-fanhui"></i></a>
      </div>
      <div class="h-con">
        我的推荐
      </div>
    </header>
    <div class="main main-bg">
      <div class="mytj-warp">
        <div class="m-top">
          <ul>
            <li>
              <div class="m-1st">400.00</div>
              <div class="m-2cd">收益</div>
            </li>
            <li>
              <a @click = "gotoAddress({path: '/erweima'})"></a>
              <div class="ewm">
                <img src="../../../images/erweima.png">
              </div>
              <div class="m-2cd">我的推广二维码</div>
            </li>
          </ul>
        </div>
        <ul class="m-com">
          <li><a @click = "gotoAddress({path: '/person'})"><i class="yl-bg-contain"></i>推荐排行榜</a></li>
          <li><a @click = "gotoAddress({path: '/profit'})"><i class="yl-bg-contain"></i>收益排行榜</a></li>
        </ul>
        <ul class="m-bottom">
          <li  v-for="todo in groominfo">
            <div class="m-t">
              <div class="m1">{{todo.name}}</div>
              <div class="m2">{{todo.tel}}</div>
              <div class="m3">推荐 <span>{{todo.num}}</span></div>
              <div class="m4">{{todo.money}}</div>
            </div>
            <div class="m5">{{todo.time}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'src/plugins/jquery.min.js'

  export default {
    data(){
      return{
        groominfo: [
          {
            name:'利尔丹',
            tel:'14822684521',
            num:'5',
            money:'+400',
            time:'2017-12-01'
          },
          {
            name:'小王',
            tel:'13764890400',
            num:'25',
            money:'+1400',
            time:'2017-12-13'
          },
          {
            name:'小赵',
            tel:'18235000000',
            num:'15',
            money:'+900',
            time:'2017-12-01'
          },
        ]
      }
    },
    methods: {
      gotoAddress(path){
        this.$router.push(path)
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
    width: 100%;height: .88rem;background-color: rgba(255,153,0,0.9);
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

  .mytj-warp{
    width: 100%;
    .m-top{
      width: 100%;background-color:rgba(255,153,0,0.9);padding: 0 .34rem;
      ul{
        width: 100%;display: flex;display: -webkit-flex;height: 100%;
        li{
          width: 50%;height: 100%;padding: .6rem 0;position: relative;
          .m-1st{
            font-size: .54rem;color: #fff;text-align: center;margin-bottom: .2rem;
          }
          .m-2cd{
            font-size: .26rem;color: #fff;text-align: center;
          }
          .ewm{
            width: .64rem;margin: .1rem auto .2rem;
            img{
              width: 100%;display: block;
            }
          }
          a{
            position: absolute;right: 0;top: 0;bottom: 0;left: 0;margin: auto;
          }
        }
        li:nth-child(1):after{
          content: "";
          position: absolute;right: 0;top: 0;bottom: 0;width: 1px;height: 1rem;margin: auto;
          background-color: #fff;
        }
      }
    }
    .m-com{
      width: 100%;padding: 0 .36rem;display: flex;display: -webkit-flex;background-color: #f90;
      li{
        width: 50%;height: 1.2rem;
        a{
          width: 100%;height: 100%;
          color: #fff;font-size: .32rem;display: flex;display: -webkit-flex;align-items: center;justify-content: center;
          i{
            display: inline-block;width: .36rem;height: .36rem;margin-right: .2rem;
            background-repeat: no-repeat;background-position: center;background-size: contain;
          }
        }
      }
      li:nth-child(1) a i{
        background-image: url(../../../images/tuijian-ico.png);
      }
      li:nth-child(2) a i{
        background-image: url(../../../images/souyi-ico.png);
      }
    }
    .m-bottom{
      width: 100%;margin-top: .2rem;background-color: #fff;padding: 0 .24rem;
      li{
        font-size: .3rem;line-height: .46rem;padding: .2rem 0;border-bottom: 1px solid #f2f2f2;
        color: #282828;text-align: center;
        .m-t{
          display: flex;display: -webkit-flex;justify-content: space-between;
        }
        .m1{
          width: 20%;text-align: center;
        }
        .m2{
          width: 36%;text-align: center;
        }
        .m3{
          width: 24%;text-align: center;
        }
        span{
          color:#f90;
        }
        .m4{
          color: #ff0303;text-align: center;width: 20%;
        }
        .m5{
          width: 20%;
          font-size: .24rem;color: #686868;text-align: center;
        }
      }
      li:last-child{
        border-bottom: none;
      }
    }
  }
</style>
