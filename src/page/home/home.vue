<template>
  	<div>
      <head-top></head-top>
      <div class="main main-bg">
        <div class="index-warp">
          <!--banner-->
          <div class="banner">
            <div class="swiper-container swiper-container-horizontal">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="../../images/index/banner1.png">
                </div>
                <div class="swiper-slide">
                  <img src="../../images/index/banner2.png">
                </div>
              </div>
            </div>
          </div>
          <!--分类入口-->
          <ul class="index-catgory">
            <li v-for="list in catgory.catgory">
              <div class="index-icon"></div>
              <span>{{list.cname}}</span>
            </li>
          </ul>
          <!--通告-->
          <div class="index-notice">
            <div class="notice-head">
              <i class="iconfont icon-tongzhi"></i>通告&nbsp;{{info}}
            </div>
            <ul class="notice-top">
              <li>
                <span>2000W</span>
                <div>IT开发人数</div>
              </li>
              <li>
                <span>88亿</span>
                <div>PC端热度</div>
              </li>
              <li>
                <span>150亿</span>
                <div>移动端热度</div>
              </li>
            </ul>
            <div class="notice-bottom">
              <div class="a-left">
                <img src="../../images/rz-ico.png">
              </div>
              <div class="a-right" id="scroll_div">
                <ul id="inwarp_scroll" :style="{ top }">
                  <li v-for="tojob in addinfo">{{tojob.links.author}}&nbsp;&nbsp;新增&nbsp;&nbsp;{{tojob.name}} 权限为：&nbsp;&nbsp;{{tojob.links.qx}}</li>
                </ul>
              </div>
            </div>
          </div>
          <!--热门推荐-->
          <div class="index-list">
            <div class="list-head">
              <i class="iconfont icon-remen"></i>热门推荐
            </div>
            <div class="work-list">
                <div class="work-con" v-for="todo in instrus.xjob" v-on:click="workxq({path: '/workdetails&id='+todo.id})">
                  <div class="w-left" :style="{backgroundImage: 'url(' + todo.imgsrc + ')'}">
                    <div class="lt-tj"></div>
                  </div>
                  <div class="w-right">
                    <div class="title"> {{ todo.zname }}</div>
                    <div class="money"> {{ todo.money }}</div>
                    <ul class="clear w-type">
                      <li v-for="to in tags[todo.id]">{{to}}</li>
                    </ul>
                    <div class="w-bottom">
                      <div class="w-num"> {{ todo.pnum }}人预览</div>
                      <div class="w-seat"><i class="iconfont icon-timezone"></i> {{ todo.eart }}</div>
                    </div>
                  </div>
                  <!--返利标签-->
                  <div class="w-fl"></div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <!--签到-->
      <div class="mask-warp-index">
        <div class="mask-box">
          <a @click = "gotoAddress({path: '/lottery'})" class="cj"></a>
          <i class="mask-close iconfont icon-guanbi"></i>
        </div>
      </div>

      <foot-guide is-flag1="true"></foot-guide>
    </div>
</template>

<script>
  import footGuide from 'src/components/footer/footGuide'
  import headTop from 'src/components/header/head'
  import $ from 'src/plugins/jquery.min.js'
  import 'src/plugins/swiper.min.js'
export default {
  data(){
    return{
      isFlag:true,
      //职位类型
      catgory:'',
      //入职信息
      addinfo:'',
      //标签
      tags:[],
      //招聘信息
      instrus:'',
      info:'',
      activeIndex: 0
    }
  },
  created () {
    let that=this;
    $.ajax({
      dataType:"JSONP",
      jsonp:"callback",//请求自动带上callback参数，callback值为jsonpCallback的值
      jsonpCallback:"h5",//接口服务器应该返回字符串数据格式：login(JSON数据)
      type:"post",
      url:"http://palpitation.shop/api/h5.php",//接口服务器地址
      success:function(response){
        that.addinfo=response.h5;
      },
      error:function(e){
        console.log(e.status+','+ e.statusText);
      }
    });
    $.ajax({
      dataType:"JSONP",
      jsonp:"callback",
      jsonpCallback:"catgory",
      type:"post",
      url:"http://palpitation.shop/api/catgory.php",
      success:function(response){
        that.catgory=response;
      }
    });
    $.ajax({
      dataType:"JSONP",
      jsonp:"callback",//请求自动带上callback参数，callback值为jsonpCallback的值
      jsonpCallback:"xjob",//接口服务器应该返回字符串数据格式：login(JSON数据)
      type:"post",
      url:"http://palpitation.shop/api/xjob.php",//接口服务器地址
      success:function(response){
        //成功执行
        that.instrus=response;
      }
    });
  },
  computed: {
    //向上循环播放
    top() {
      return - this.activeIndex * 0.88 + 'rem';
    }
  },
  mounted(){
    let that=this;
    //初始化swiper
    new Swiper('.swiper-container', {
      autoplay: 5000,
    });
    //向上循环播放
    setInterval(_ => {
      if(that.activeIndex < that.addinfo.length-1) {
        that.activeIndex += 1;
      } else {
        that.activeIndex = 0;
      }
    }, 3000);

    $(".mask-close").click(function () {
      $(".mask-warp-index").hide();
    })
  },
  components:{
    footGuide,headTop,
  },
  methods:{
    workxq(path){
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
  }
}
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  @import "../../style/swiper.min.css";
  //首页
  .index-warp{
    width: 100%;
    .banner{
      width: 100%;height: 3.6rem;
      .swiper-container{
        width: 100%;height: 100%;
        img{
          display: block;
          width: 100%;height: 3.6rem;
        }
      }
    }
    .index-catgory{
      width: 100%;padding: .24rem .24rem;display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;background-color: #fff;
      li{
        width: 25%;text-align: center;display: -webkit-flex;justify-content: space-between;align-items: center;flex-direction: column;
        .index-icon{
          width: 1rem;height: 1rem;margin-bottom: .2rem;
          background-repeat: no-repeat;background-position: center;background-size: contain;
        }
        span{
          font-size: .32rem;color: #656565;
        }
      }
      li:nth-child(1){
        .index-icon{
          background-image: url(../../images/index/img-icon1.png);
        }
      }
      li:nth-child(2){
        .index-icon{
          background-image: url(../../images/index/img-icon2.png);
        }
      }
      li:nth-child(3){
        .index-icon{
          background-image: url(../../images/index/img-icon3.png);
        }
      }
      li:nth-child(4){
        .index-icon{
          background-image: url(../../images/index/img-icon4.png);
        }
      }
    }
    .index-notice{
      width: 100%;padding:0 .24rem;background-color: #fff;margin-top: .2rem;
      .notice-head{
        width: 100%;font-size: .3rem;color: #282828;padding: .24rem 0 0;
        i{
          font-size: .32rem;color:#FF9933;margin-right: .1rem;
        }
      }
      .notice-top{
        width: 100%;display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;border-bottom: 1px solid #f2f2f2;
        li{
          width: 33%;text-align: center;padding:0 0 .4rem;
          span{
            font-size: .42rem;color:#FF9933;
          }
          div{
            font-size: .26rem;color: #686868;
          }
        }
      }
      .notice-bottom{
        width: 100%;height: .88rem;position: relative;
        .a-left{
          width: .65rem;height: 100%;display: flex;display: -webkit-flex;align-items: center;
          position: absolute;left: 0;top: 0;
          img{
            width: .65rem;
          }
        }
        .a-right{
          width: 100%;height: 100%;position: relative;overflow: hidden;white-space: nowrap;
        }
        #inwarp_scroll{
          color: #fff;
          width: 100%;height: auto;
          position:absolute;z-index: 9999;
          left: 0;
          top:0;
        }
        #inwarp_scroll li{
          color: #686868;font-size: .26rem;line-height: .88rem;
          text-align: left;padding-left: .8rem;
        }
      }
    }
    .index-list{
      width: 100%;padding: 0 .24rem;margin-top: .2rem;background-color: #fff;
      .list-head{
        width: 100%;padding: .24rem 0;font-size: .3rem;color: #282828;border-bottom: 1px solid #f2f2f2;
        i{
          font-size: .36rem;color:#FF9933;
        }
      }
      .work-list{
        width: 100%;background-color: #fff;
        .work-con{
          width: 100%;padding: .2rem 0;border-bottom: 1px solid #f2f2f2;position: relative;
          display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;
          .w-left{
            width: 30%;height: 1.6rem;position: relative;
            background-position: center;background-repeat: no-repeat;background-size: cover;
            .lt-tj{
              width: .8rem;height: .8rem;background: url(../../images/lt-tuijian.png) no-repeat center;
              background-size: contain;position: absolute;top: 0;left: 0;
            }
          }
          .w-right{
            width: 70%;height: 1.6rem;padding-left: .24rem;
            .title{
              width: 90%;font-size: .3rem;color: #282828;
              overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
            }
            .money{
              width: 100%;font-size: .28rem;color: #FF9933;line-height: .42rem;margin-bottom: .1rem;
            }
            .w-type{
              width: 90%;height: .4rem;
              li{
                float: left;display: inline-block;margin-right: .2rem;
                padding: 0 .15rem;font-size: .2rem;color: #FF9933;border-radius: .2rem;border: 1px solid #FF9933;line-height: 1.2;
              }
            }
            .w-bottom{
              width: 100%;
              display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;
              .w-num{
                font-size: .24rem;color: #989898;max-width: 40%;
                overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
              }
              .w-seat{
                font-size: .24rem;color: #989898;max-width: 60%;
                overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
                i{
                  color: #FF9933;font-size: .24rem;margin-right: .1rem;
                }
              }
            }
          }
          .w-fl{
            width: .35rem;height: .8rem;background: url(../../images/list-fl.png) no-repeat center;
            background-size: contain;position: absolute;top: 0;right: 0;
          }
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
