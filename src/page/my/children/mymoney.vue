<template>
  <div>
    <header>
      <div class="h-return">
        <a @click = "gotoAddress({path: '/my'})"><i class="iconfont icon-fanhui"></i></a>
      </div>
      <div class="h-con"></div>
    </header>
    <div class="main main-bg">
      <div class="wallet-warp">
        <div class="wallet-top">
          <div class="wallet-money">
            <div class="wallet-name">账户余额</div>
            <div class="wallet-num">2020.00</div>
          </div>
          <ul>
            <li>
              <div class="wallet-name">返现余额(元)</div>
              <div class="wallet-num">202.00</div>
            </li>
            <li>
              <div class="wallet-name">冻结资金(元)</div>
              <div class="wallet-num">260.00</div>
            </li>
          </ul>
          <div class="wallet-up">
            返现金额当倒计时结束时，由平台线下打款，<br>详情咨询：400-800-9890<br>冻结资金倒计时结束且通过平台审核后，自动划分到账户
          </div>
        </div>
        <div class="wallet-tx">
          <div class="tx-left">
            <img src="../../../images/qianbao-lvse.png"><span>提现</span>
          </div>
          <i class="iconfont icon-qianjin-copy"></i>
        </div>
        <div class="wallet-bottom">
          <div class="wallet-catgory">
            <a href="" class="active">收益明细</a><a href="">提现明细</a>
          </div>
          <!--列表-->
          <ul>
            <li>
              <div class="w-top">
                <div class="wt-l">一级推荐</div>
                <div class="wt-r">+100</div>
              </div>
              <div class="w-bottom">
                <div class="wb-l">2017-10-01</div>
                <div class="wb-r">倒计时 4天12时25分36秒</div>
              </div>
            </li>
            <li>
              <div class="w-top">
                <div class="wt-l">一级推荐</div>
                <div class="wt-r">+100</div>
              </div>
              <div class="w-bottom">
                <div class="wb-l">2017-10-01</div>
                <div class="wb-r">倒计时 4天12时25分36秒</div>
              </div>
            </li>
            <li>
              <div class="w-top">
                <div class="wt-l">入职奖励</div>
                <div class="wt-r">+100</div>
              </div>
              <div class="w-bottom">
                <div class="wb-l">2017-10-01</div>
              </div>
            </li>
            <li>
              <div class="w-top">
                <div class="wt-l">转盘奖励</div>
                <div class="wt-r">+2</div>
              </div>
              <div class="w-bottom">
                <div class="wb-l">2017-10-01</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import footGuide from 'src/components/footer/footGuide'
  import $ from 'src/plugins/jquery.min.js'

  export default {
    data(){
      return{
        myinfo: {
          name: sessionStorage.getItem("username") || localStorage.getItem('username'),
          type: sessionStorage.getItem("usertype") || localStorage.getItem('usertype'),
          yqm: sessionStorage.getItem("usererweima") || localStorage.getItem('usererweima'),
          btmoney:sessionStorage.getItem("usermoney") || localStorage.getItem('usermoney'),
          imgsrc:sessionStorage.getItem("usertx")  || localStorage.getItem('usertx'),
          sex:sessionStorage.getItem("usersex")  || localStorage.getItem('usersex'),
        }
      }
    },
    created () {

    },
    components:{
      footGuide,
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
    position: static;padding-top: 0;
    top:0;
    bottom: 0;
  }
  header{
    width: 100%;height: .88rem;background-color: #ff6150;
    padding: 0 .24rem;
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

  //我的钱包
  .wallet-warp{
    width: 100%;
    .wallet-top{
      width: 100%;padding-bottom: .3rem;
      background: url(../../../images/money-bg.png) no-repeat bottom #FF6150;background-size: cover;
      .wallet-money{
        width: 100%;padding: 0 .24rem;text-align: center;
        .wallet-name{
          width: 100%;
          font-size: .26rem;color: #fff;
        }
        .wallet-num{
          width: 100%;
          font-size: .64rem;color: #fff;
        }
      }
      ul{
        width: 100%;padding: 0 .24rem;display: flex;display: -webkit-flex;justify-content: space-between;
        li{
          width: 50%;text-align: center;
          .wallet-name{
            width: 100%;
            font-size: .26rem;color: #fff;margin: .5rem auto .2rem;
          }
          .wallet-num{
            width: 100%;
            font-size: .64rem;color: #fff;
          }
        }
      }
      .wallet-up{
        display: block;width: 100%;padding: 0 .36rem;margin: 1rem auto 0;border-radius: 5px;
        font-size: .2rem;color: #fff;text-align: center;line-height: 1.4;
      }
    }
    .wallet-tx{
      width: 100%;padding: 0 .24rem;height: .88rem;background-color: #fff;
      display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;
      .tx-left{
        font-size: .3rem;color: #282828;
        display: flex;display: -webkit-flex;align-items: center;
        img{
          width: .4rem;margin-right: .2rem;
        }
      }
      .i{
        font-size: .4rem;color: #686868;
      }
    }
    .wallet-bottom{
      width: 100%;margin-top: .2rem;background-color: #fff;
      .wallet-catgory{
        width: 100%;padding: 0 .24rem;height: .88rem;border-bottom: 1px solid #ddd;
        display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;
        a{
          width: 50%;text-align: center;font-size: .32rem;color: #656565;height: 100%;line-height: .86rem;position: relative;
        }
        .active{
          color: #ff6150;
        }
        .active:after{
          content: "";
          width: 50%;height: 2px;background-color: #ff6150;position: absolute;bottom: -1px;left: 0;right: 0;margin: auto;
        }
      }
      ul{
        width: 100%;
        li{
          width: 100%;padding: .2rem .24rem;border-bottom: 1px solid #ddd;
          .w-top{
            display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;
            width: 100%;margin-bottom: .1rem;
            .wt-l{
              font-size: .3rem;color: #282828;
            }
            .wt-r{
              font-size: .3rem;color: #ff0303;
            }
          }
          .w-bottom{
            display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;
            width: 100%;
            .wb-l{
              font-size: .24rem;color: #989898;
            }
            .wb-r{
              font-size: .24rem;color: #989898;
            }
          }
        }
        li:last-child{
          border-bottom: none;
        }
      }
    }
    //绑定银行卡
    .infor-warp{
      width: 100%;background-color: #fff;margin-bottom: .2rem;
      ul{
        width: 100%;
        li{
          width: 100%;padding: 0 .24rem;height:.88rem;background-color: #fff;border-bottom: 1px solid #ddd;
          display: flex;display: -webkit-flex;align-items: center;
          .i-left{
            font-size: .3rem;color: #656565;width: 22%;
          }
          label{
            display: block;width: 75%;font-size: .3rem;color: #656565;height: 100%;
            input{
              display: block;width: 100%;height:100%;font-size: .3rem;
            }
          }
        }
      }
      .info-img{
        width: 100%;padding: 0 .24rem .3rem;
        .i-top{
          height: .88rem;width: 100%;line-height: .88rem;font-size: .3rem;color: #656565;
        }
        .i-bottom{
          width: 100%;height: 2.45rem;display: flex;display: -webkit-flex;align-items: center;justify-content: space-around;
          .i-img{
            width: 48%;height: 2.45rem;background-repeat: no-repeat;background-position: center;background-size: contain;position: relative;
            input{
              display: block;width: 100%;height: 100%;opacity: 0;
              position: absolute;left: 0;top: 0;z-index: 10;
            }
          }
        }
      }
    }
    //提现
    .withdrawals{
      width: 100%;
      .with-title{
        width: 100%;padding: .36rem 0 .2rem .24rem;font-size: .24rem;color: #282828;line-height: 1.1;
      }
      .with-card{
        width: 100%;background-color: #fff;padding: 0 .24rem;height: 1rem;
        a{
          display: flex;width: 100%;height: 100%;flex-direction:row-reverse;
          display: -webkit-flex;justify-content: space-between;align-items: center;
          span{
            font-size: .3rem; color: #656565;
            i{
              margin-left: .1rem;font-size: .3rem;color: #686868;
            }
          }
        }
      }
      .with-box{
        width: 100%;background-color: #fff;margin-top: .2rem;padding:0 .24rem;
        .box-top{
          width: 100%;padding: .36rem 0;font-size: .3rem;color: #282828;line-height: 1.2;
        }
        .box-content{
          width: 100%;padding-left: .48rem;height: .6rem;position: relative;
          input{
            display: block;width: 100%;height: 100%;border-bottom: 1px solid #ddd;
            font-size: .32rem;padding-left: .1rem;
          }
          i{
            position: absolute;left: 0;top: 0;bottom: 0;line-height: .6rem;
            font-size: .5rem;color: #282828;width: .4rem;text-align: center;
          }
        }
        .box-bottom{
          width: 100%;height: .7rem;display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;
          span{
            font-size: .24rem;color: #686868;
          }
          .all-with{
            color: #f93;cursor: pointer;
          }
        }
      }
    }
    //提现成功
    .withdrawals-success{
      .with-box{
        width: 100%;background-color: #fff;padding:0 .24rem;
        .box-top{
          width: 100%;padding: .36rem 0;font-size: .3rem;color: #282828;line-height: 1.2;
        }
        .box-content{
          width: 100%;height: .8rem;position: relative;font-size: .48rem;color: #282828;line-height: .5rem;
        }
        .box-bottom{
          width: 100%;height: .8rem;display: flex;display: -webkit-flex;align-items: center;border-top: 1px solid #ddd;
          span{
            font-size: .32rem;color: #686868;
          }
        }
      }
      .with-progress{
        width: 100%;background-color: #fff;margin-top: .2rem;
        .pro-top{
          width: 100%;height: 2rem;padding: 0 .24rem;
          li{
            width: 100%;text-align: center;position: relative;display: flex;display: -webkit-flex;align-items: center;height: 1rem;padding-left: 30%;
            span{
              font-size: .28rem;color: #686868;line-height: .45rem;margin-right: .2rem;
            }
            div{
              font-size: .22rem;color: #989898;line-height: 1.4;
            }
            i{
              width: .26rem;height: .26rem;background-color: #ddd;border-radius: 50%;
              position: absolute;left: 24%;top: 0;bottom:0;margin: auto;
            }
            .pro-line{
              width: 2px;height: .6rem;background-color: #ddd;
              position: absolute;left: 25.4%;
            }
          }
          .active{
            .pro-line{
              background-color: #f93;
            }
            span{
              color: #f93;
            }
            i{
              background-color: #f93;
            }
          }
          li:nth-child(1){
            margin-bottom: .2rem;
            .pro-line{
              top: 50%;
            }
          }
          li:nth-child(2){
            .pro-line{
              bottom: 50%;
            }
          }
        }
        .zhusi{
          font-size: .24rem;line-height: .3rem;margin-bottom: .2rem;color: #989898;padding-left: 26%;
          span{
            color: #eb6860;
          }
        }
        .pro-bottom{
          width: 100%;padding: 0 .24rem .15rem;border-bottom: 1px solid #ddd;border-top: 1px solid #ddd;
          li{
            font-size: .3rem;color: #282828;padding-top: .15rem;
            span{
              margin-left: .2rem;
            }
          }
        }
      }
    }
    //银行卡
    .bank-card{
      width: 100%;
      li{
        padding: 0 .24rem;display: flex;display: -webkit-flex;justify-content: space-between;
        background-color: #fff;margin-top:.2rem;
        span{
          font-size: .3rem;color: #686868;line-height: .88rem;
        }
        a{
          font-size: .3rem;color: #686868;line-height: .88rem;width: 100%;
          i{
            font-size: .32rem;color: #686868;margin-right: .1rem;
          }
        }
      }
    }
    .i-save{
      display: block;width: 90%;height: .88rem;line-height: .88rem;border-radius: 3px;margin: .88rem auto 0;
      font-size: .3rem;color: #fff;background-color: #ff6150;text-align: center;
    }
    .remarks{
      width: 100%;font-size: .24rem;color: #686868;text-align: center;line-height: .6rem;
    }
  }
</style>
