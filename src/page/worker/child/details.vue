<template>
  <div>
    <header>
      <div class="h-return">
        <a @click = "gotoAddress({path: '/home'})"><i class="iconfont icon-fanhui"></i></a>
      </div>
      <div class="h-con">职位详情</div>
    </header>
    <div class="main main-bg">
      <div class="job-details">
        <div class="job-top">
          <div class="j-top">
            <div class="w-left" v-bind:style="{backgroundImage: 'url('+instrus.imgsrc+')'}"></div>
            <div class="w-right">
              <div class="title">{{instrus.title}}</div>
              <div class="w-money">{{instrus.money}}</div>
              <div class="w-seat"><i class="iconfont icon-timezone"></i>{{instrus.eart}}</div>
              <div class="w-bottom">
                <div class="w-num"><span>{{instrus.num}}</span>人报名</div>
                <div class="w-time">{{instrus.time}}</div>
              </div>
              <!--已认证标签-->
              <div class="w-renzheng"></div>
            </div>
          </div>
          <!--入职通知-->
          <div class="notice-bottom">
            <div class="a-left">
              <img src="../../../images/rz-ico.png">
            </div>
            <div class="a-right" id="scroll_div">
              <ul id="inwarp_scroll" style="top: 0;">
                <li>王** 已成功入职 苏州华硕 返现3000元</li><li>王** 已成功入职 苏州华硕 返现3000元</li><li>王** 已成功入职 苏州华硕 返现3000元</li><li>王** 已成功入职 苏州华硕 返现3000元</li><li>王** 已成功入职 苏州华硕 返现3000元</li><li>王** 已成功入职 苏州华硕 返现3000元</li><li>王** 已成功入职 苏州华硕 返现3000元</li><li>王** 已成功入职 苏州华硕 返现3000元</li><li>王** 已成功入职 苏州华硕 返现3000元</li><li>王** 已成功入职 苏州华硕 返现3000元</li><li>王** 已成功入职 苏州华硕 返现3000元</li><li>王** 已成功入职 苏州华硕 返现3000元</li><li>王** 已成功入职 苏州华硕 返现3000元</li><li>王** 已成功入职 苏州华硕 返现3000元</li></ul>
            </div>
          </div>
        </div>
        <!--返现说明-->
        <div class="job-fx">
          <div class="job-money">
            <div class="j-top">
              <span>返现说明</span>
              <span>返现倒计时：<i>02天06时21分42秒</i></span>
            </div>
            <ul>
              <li>
                <div>时间：</div>
                <div><i>2017-10-26</i> 至 <i>2017-20-28</i></div>
              </li>
              <li>
                <div>返现金额：</div>
                <div><span>1800元</span></div>
              </li>
              <li>
                <div>返现要求：</div>
                <div>入职满 <i>46</i> 天</div>
              </li>
            </ul>
          </div>
          <dl>
            <dt>查看更多返现记录 <i class="iconfont icon-xiala"></i></dt>
            <dd>领返现：<span>1800</span>元（<i>2017-10-26</i> 至 <i>2017-10-28</i>） 入职满<i>46</i>天</dd>
            <dd>领返现：<span>1800</span>元（<i>2017-10-26</i> 至 <i>2017-10-28</i>） 入职满<i>46</i>天</dd>
            <dd>领返现：<span>1800</span>元（<i>2017-10-26</i> 至 <i>2017-10-28</i>） 入职满<i>46</i>天</dd>
            <dd>领返现：<span>1800</span>元（<i>2017-10-26</i> 至 <i>2017-10-28</i>） 入职满<i>46</i>天</dd>
            <dd>领返现：<span>1800</span>元（<i>2017-10-26</i> 至 <i>2017-10-28</i>） 入职满<i>46</i>天</dd>
          </dl>
        </div>
        <!--薪资说明+岗位介绍+福利待遇-->
        <div class="job-con">
          <div class="job-money">
            <div class="j-top">薪资说明</div>
            <ul>
              <li>
                <div>综合薪资：</div>
                <div><span>4000-5000元/月</span></div>
              </li>
              <li>
                <div>基本工资：</div>
                <div>2190+补贴</div>
              </li>
              <li>
                <div>基本工资：</div>
                <div>4000-5000元/月</div>
              </li>
              <li>
                <div>加班工资：</div>
                <div>平时加班1.5倍工资，周末加班2倍工资，<br>节假日加班3倍工资</div>
              </li>
            </ul>
          </div>
          <div class="job-show">
            <div class="j-top">岗位介绍</div>
            <ul>
              <li>
                <div class="j-cat">工作内容</div>
                <div><span>做什么：</span>操作工，主要做手机组件：手机外壳、手机键盘、 手机金属件、手机镜片</div>
                <div><span>环境：</span>空调车间、站坐班都有，普通工作服</div>
              </li>
              <li>
                <div class="j-cat">工作时间</div>
                <div><span>做多久：</span>两班倒，早8点和晚8点倒班，半个月倒一次班</div>
                <div><span>休息：</span>做六休一，月休4天</div>
              </li>
            </ul>
          </div>
          <div class="job-dy">
            <div class="j-top">福利待遇</div>
            <ul class="clear">
              <li>五险一金</li>
              <li>餐补</li>
              <li>班车</li>
            </ul>
          </div>
        </div>
        <!--公司介绍+地址-->
        <div class="job-nav">
          <!--公司介绍-->
          <div class="j-con">
            <div class="j-title">企业介绍</div>
            <div class="j-name">
              和联集团（苏州）有限公司 <i class="yl-bg-contain"></i>
            </div>
            <div class="j-info">
              <span><i class="j-info1"></i>民营</span>
              <span><i class="j-info2"></i>1000-2000人</span>
            </div>
            <p>
              该报告显示，受“一带一路”倡议利好，中国的跨境电子商务迎来前所未有的发展机遇，随着中国-东盟合作的进一步深入，东南亚地区数字贸易发展呈现出巨大潜力
            </p>
          </div>
          <!--周边配套-->
          <div class="job-pos clear">
            <div class="j-title">企业地址</div>
            <div class="z-con">
              <div class="j-left">
                <i class="iconfont icon-timezone"></i>苏州市工业园区纳米大学国家科技园E栋1206室
              </div>
              <div class="j-right">
                <a href="">周边配套</a>
              </div>
            </div>
          </div>
        </div>
        <!--员工评论-->
        <div class="job-comment">
          <div class="j-top">薪资说明</div>
          <div class="comment-warp">
            <ul>
              <li>
                <div class="c-top">
                  <div class="c-left"  v-bind:style="{backgroundImage: 'url('+instrus.usertx+')'}"></div>
                  <div class="c-right">
                    <div class="c-t">
                      <span>李广发</span><i>10-18&nbsp;18:10</i>
                    </div>
                    <p>已入职8天，感觉这里挺好的，准备长期干下去。已入 职8天，感觉这里挺好的，准备长期干下去</p>
                  </div>
                </div>
                <div class="c-bottom">
                  <span><i class="iconfont icon-dianzan"></i>112</span>
                </div>
              </li>
              <li>
                <div class="c-top">
                  <div class="c-left"  v-bind:style="{backgroundImage: 'url('+instrus.usertx+')'}"></div>
                  <div class="c-right">
                    <div class="c-t">
                      <span>李广发</span><i>10-18&nbsp;18:10</i>
                    </div>
                    <p>已入职8天，感觉这里挺好的</p>
                  </div>
                </div>
                <div class="c-bottom">
                  <span><i class="iconfont icon-dianzan"></i>112</span>
                </div>
              </li>
              <li>
                <div class="c-top">
                  <div class="c-left"  v-bind:style="{backgroundImage: 'url('+instrus.usertx+')'}"></div>
                  <div class="c-right">
                    <div class="c-t">
                      <span>李广发</span><i>10-18&nbsp;18:10</i>
                    </div>
                    <p>已入职8天，感觉这里挺好的</p>
                  </div>
                </div>
                <div class="c-bottom">
                  <span><i class="iconfont icon-dianzan"></i>112</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="j-more">加载更多</div>
        </div>
        <div style="height: 1.1rem"></div>
        <!--推荐朋友-->
        <a  @click = "gotoAddress({path: '/mygroom'})"><div class="job-groom"></div></a>
      </div>
    </div>

    <div class="job-tw">
      <div class="t-img">
        <div class="icon" style=""></div>
        <div class="wen">分享</div>
      </div>
      <div class="t-img">
        <div class="icon" style=""></div>
        <div class="wen"><a>提问(<span>59</span>)</a></div>
      </div>
      <div class="t-img">
        <div class="icon" style=""></div>
        <div class="wen">我要报名</div>
      </div>
      <div class="t-img">
        <div class="icon" style=""></div>
        <div class="wen">收藏</div>
      </div>
      <div class="t-img">
        <div class="icon" style=""></div>
        <div class="wen">电话咨询</div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'src/plugins/jquery.min.js'

  export default {
    data(){
      return{
        instrus:
          {
            title:'UI-界面设计',
            imgsrc: 'http://palpitation.shop/public/images/work1.png',
            money:'4000-5000',
            type:['五险一金','餐补','班车'],
            num:'1560',
            eart:'苏州市园区',
            time:'2017-12-16',
            usertx:localStorage.getItem('usertx'),
          },
      }
    },
    created () {

    },
    components:{

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

  //职位详情
  .job-details{
    width: 100%;
    .job-top{
      width: 100%;padding: 0 .24rem;background-color: #fff;
      .j-top{
        width: 100%;padding: .3rem 0;border-bottom: 1px solid #ddd;position: relative;
        display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;
        .w-left{
          width: 30%;height: 1.6rem;
          background-position: center;background-repeat: no-repeat;background-size: contain;
        }
        .w-right{
          width: 70%;height: 1.6rem;padding-left: .24rem;
          .title{
            width: 90%;font-size: .3rem;color: #282828;
            overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
          }
          .w-money{
            font-size: .22rem;color: #ff0101;border-radius: 2px;line-height: 1.4;position: relative;left: -.1rem;
          }
          .w-seat{
            font-size: .24rem;color: #989898;max-width: 60%;line-height: .6rem;
            overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
            i{
              color: #f90;font-size: .26rem;margin-right: .1rem;
            }
          }
          .w-renzheng{
            width: 1.5rem;height: 1.5rem;background: url(../../../images/renzheng-img.png) no-repeat center;background-size: contain;position: absolute;right: 0;top: .15rem;
          }
          .w-bottom{
            width: 100%;
            display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;
            .w-num{
              font-size: .24rem;color: #989898;max-width: 50%;
              overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
              span{
                color: #f90;
              }
            }
            .w-time{
              font-size: .24rem;color: #989898;
            }
          }
        }
      }
      .notice-bottom{
        width: 100%;height: 1.2rem;position: relative;padding: .2rem 0;
        .a-left{
          width: .8rem;height: 100%;display: flex;display: -webkit-flex;align-items: center;
          position: absolute;left: 0;top: 0;
          img{
            width: .62rem;
          }
        }
        .a-right{
          width: 100%;height: .8rem;position: relative;overflow: hidden;white-space: nowrap;
        }
        #inwarp_scroll{
          color: #fff;
          width: 100%;height: auto;
          position:absolute;z-index: 9999;
          left: 0;
          top:0;
        }
        #inwarp_scroll li{
          color: #282828;font-size: .26rem;line-height: .4rem;
          text-align: left;padding-left: .8rem;
        }
      }
    }
    .job-fx{
      width: 100%;background-color: #fff;padding: 0 .24rem;margin-top: .2rem;
      .job-money{
        padding: .25rem 0;border-bottom: 1px solid #ddd;
        .j-top{
          width: 100%;padding-left:.22rem;line-height: 1.5;position: relative;margin-bottom: .15rem;
          display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;
          span{
            font-size: .3rem;color: #282828;
            i{
              color: #f90;
            }
          }
        }
        .j-top:before{
          content: "";position: absolute;left: 0;top: 0;width: .08rem;height: 100%;background-color: #f90;
        }
        ul{
          width: 100%;
          li{
            font-size: .26rem;line-height:.5rem;display: flex;display: -webkit-flex;
            color: #989898;
            i{
              color: #f90;
            }
            span{
              color: #ff0101;
            }
          }
        }
      }
      dl{
        width: 100%;padding: .2rem 0;
        dt{
          font-size: .24rem;line-height: .6rem;text-align: right;padding-right: .2rem;
          i{
            display: inline-block;font-size: .36rem;position: relative;top: 2px;
          }
        }
        dd{
          font-size: .24rem;line-height: .4rem;display: none;
          span{
            color: #ff0101;
          }
          i{
            color: #f90;
          }
        }
      }
    }
    .job-nav{
      width: 100%;padding: .2rem .24rem 0;background-color: #fff;margin-top: .2rem;
      .j-con{
        width: 100%;border-bottom: 1px solid #ddd;
        .j-title{
          width: 100%;margin: .25rem 0;font-size: .3rem;color: #282828;padding-left: .22rem;
          position: relative;
        }
        .j-title:before{
          content: "";position: absolute;left: 0;top: 0;width: .08rem;height: 100%;background-color: #f90;
        }
        .j-name{
          width: 100%;font-size: .26rem;color: #282828;
          i{
            display: inline-block;width: 1rem;height: .32rem;margin-left: .15rem;background-repeat: no-repeat;background-position: center;background-size: contain;
            background-image: url(../../../images/renzheng-ico.png);vertical-align: middle;
          }
        }
        .j-info{
          width: 100%;line-height: .4rem;
          span{
            font-size: .24rem;color: #989898;margin-right: .3rem;
            i{
              display: inline-block;width: .3rem;height: .3rem;vertical-align: middle;margin-right: .1rem;
              background-repeat: no-repeat;background-position: center;background-size: contain;
            }
            .j-info1{
              background-image: url(../../../images/my-ico.png)
            }
            .j-info2{
              background-image: url(../../../images/my-ico.png);
            }
          }
        }
        p{
          width: 100%;font-size: .24rem;color: #989898;padding-bottom: .25rem;
        }
      }
      .job-pos{
        width: 100%;position: relative;
        .j-title{
          width: 100%;margin: .25rem 0;font-size: .3rem;color: #282828;padding-left: .22rem;
          position: relative;
        }
        .j-title:before{
          content: "";position: absolute;left: 0;top: 0;width: .08rem;height: 100%;background-color: #f90;
        }
        .z-con{
          padding-bottom: .2rem;
          display: flex;display: -webkit-flex;align-items: center;justify-content: space-between;
          .j-left{
            font-size: .3rem;color: #989898;max-width: 80%;
            overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
            i{
              font-size: .3rem;color: #f90;margin-right: .15rem;
            }
          }
          .j-right{
            font-size: .3rem;
            a{
              color: #f90;
            }
          }
        }
      }
    }
    .job-con{
      width: 100%;background-color: #fff;padding: 0 .24rem;margin-top: .2rem;
      .job-money{
        padding: .25rem 0;border-bottom: 1px solid #ddd;
        .j-top{
          width: 100%;font-size: .3rem;color: #282828;padding-left:.22rem;line-height: 1.5;
          position: relative;margin-bottom: .15rem;
        }
        .j-top:before{
          content: "";position: absolute;left: 0;top: 0;width: .08rem;height: 100%;background-color: #f90;
        }
        ul{
          width: 100%;
          li{
            font-size: .26rem;line-height:.5rem;display: flex;display: -webkit-flex;
            color: #989898;
            span{
              color: #ff0101;
            }
          }
        }
      }
      .job-show{
        padding: .25rem 0;border-bottom: 1px solid #ddd;
        .j-top{
          width: 100%;font-size: .3rem;color: #282828;padding-left:.22rem;line-height: 1.5;
          position: relative;margin-bottom: .15rem;
        }
        .j-top:before{
          content: "";position: absolute;left: 0;top: 0;width: .08rem;height: 100%;background-color: #f90;
        }
        ul{
          width: 100%;
          li{
            font-size: .26rem;line-height:.5rem;color: #989898;
            .j-cat{
              color: #fdae3f;
            }
            span{
              color: #f90;
            }
          }
        }
      }
      .job-dy{
        padding: .25rem 0;
        .j-top{
          width: 100%;font-size: .3rem;color: #282828;padding-left:.22rem;line-height: 1.5;
          position: relative;margin-bottom: .25rem;
        }
        .j-top:before{
          content: "";position: absolute;left: 0;top: 0;width: .08rem;height: 100%;background-color: #f90;
        }
        ul{
          width: 100%;
          li{
            display: inline-block;padding:0 .15rem;float: left;margin-right: .25rem;
            font-size: .26rem;line-height:.44rem;color: #f90;
            border: 1px solid #f90;border-radius: .2rem;
          }
        }
      }
    }
    .job-comment{
      width: 100%;background-color: #fff;padding: .3rem .24rem 0;margin-top: .2rem;
      .j-top{
        width: 100%;font-size: .3rem;color: #282828;padding-left:.22rem;line-height: 1.5;
        position: relative;margin-bottom: .25rem;
      }
      .j-top:before{
        content: "";position: absolute;left: 0;top: 0;width: .08rem;height: 100%;background-color: #f90;
      }
      .comment-warp{
        width: 100%;
        ul{
          width: 100%;
          li{
            width: 100%;border-bottom: 1px solid #ddd;padding-top: .2rem;
            .c-top{
              width: 100%;
              display: flex;display: -webkit-flex;justify-content: space-between;
              .c-left{
                width: 1rem;height: 1rem;background-repeat: no-repeat;background-position: center;background-size: contain;
                border-radius: 50%;
              }
              .c-right{
                font-size: .24rem;width: 80%;
                .c-t{
                  display: flex;display: -webkit-flex;justify-content: space-between;line-height: .45rem;margin-bottom: .2rem;
                  span{
                    color: #282828;
                  }
                  i{
                    font-style: normal;color: #989898;
                  }
                }
                p{
                  font-size: .24rem;color: #656565;
                }
              }
            }
            .c-bottom{
              width: 100%;text-align: right;padding-bottom: .1rem;line-height: .24rem;
              span{
                font-size: .24rem;color: #989898;
                i{
                  font-size: .24rem;color: #989898;margin-right: .1rem;
                }
              }
            }
          }
        }
      }
      .j-more{
        width: 100%;height: .8rem;line-height: .8rem;text-align: center;font-size: .24rem;color: #989898;
      }
    }
    .job-groom{
      position: fixed;bottom: 1.16rem;right: .24rem;z-index: 9999;width: 1.3rem;height: 1.3rem;
      background: url(../../../images/tuijian-img.png) no-repeat center;background-size: contain;
    }
  }

  //底部
  .job-tw {
    position: fixed;
    bottom: 0;right: 0;left: 0;
    z-index: 9999;margin: auto;
    background-color: #fff;
    height: .88rem;display: flex;display: -webkit-flex;
    border-top: 1px solid #f2f2f2;
  }
  .job-tw .t-img {
    width: 20%;
  }
  .job-tw .t-img .icon {
    width: .42rem;
    height: .42rem;
    margin: .1rem auto 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .job-tw .t-img .wen {
    width: 100%;
    font-size: .24rem;
    color: #989898;
    text-align: center;
  }
  .job-tw .t-img .wen span {
    color: #25cc5a;
  }
  .job-tw .t-img:nth-child(1) .icon{
    background-image: url(../../../images/icon/share.png);
  }
  .job-tw .t-img:nth-child(2) .icon{
    background-image: url(../../../images/icon/tiwen.png);
  }
  .job-tw .t-img:nth-child(3) .icon{
    background-image: url(../../../images/icon/baoming.png);
  }
  .job-tw .t-img:nth-child(4) .icon{
    background-image: url(../../../images/icon/shoucang_nor.png);
  }
  .job-tw .t-img:nth-child(5) .icon{
    background-image: url(../../../images/icon/phone.png);
  }
</style>
