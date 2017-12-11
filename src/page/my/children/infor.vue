<template>
  <div>
    <header>
      <div class="h-return">
        <a @click = "gotoAddress({path: '/my'})"><i class="iconfont icon-fanhui"></i></a>
      </div>
      <div class="h-con">
        设置
      </div>
    </header>
    <div class="main main-bg">
      <div class="myinfo-warp">
        <div class="info-tx">
          <span class="i-left">头像</span>
          <div class="i-right" v-bind:style="{backgroundImage: 'url('+myinfo.imgsrc+')'}"></div>
        </div>
        <div class="info-type">
          <span class="i-left">求职状态 </span>
          <div class="i-right">
            <input type="text" value="在职-暂不考虑" id="job" readonly="readonly"><i class="iconfont icon-qianjin-copy"></i>
          </div>
        </div>
        <div class="infor-warp">
          <ul>
            <li>
              <span class="i-left">姓名 </span>
              <label><input type="text" placeholder="请输入您的姓名" v-bind:value="myinfo.name"></label>
            </li>
            <li>
              <span class="i-left">性别 </span>
              <div class="i-right">
                <input type="text" v-bind:value="myinfo.sex" id="sex" readonly="readonly"><i class="iconfont icon-qianjin-copy"></i>
              </div>
            </li>
            <li>
              <span class="i-left">手机号 </span>
              <label><input type="text" placeholder="请输入手机号" value="15826479226"></label>
            </li>
            <li>
              <span class="i-left">籍贯 </span>
              <div class="i-right">
                <input id="city-picker" type="text" value="江苏省 苏州市" readonly="readonly">
                <i class="iconfont icon-qianjin-copy"></i>
              </div>
            </li>
            <li>
              <span class="i-left">座右铭 </span>
              <label><input type="text" placeholder="请输入小于7个字的座右铭" value=""></label>
            </li>
          </ul>
        </div>
        <button class="i-save">保存</button>
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
    bottom: 0;
  }
  header{
    width: 100%;height: .88rem;background-color: #FF9933;
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

  //个人中心
  .myinfo-warp{
    width: 100%;
    .info-tx{
      width: 100%;padding: .2rem .24rem;background-color: #fbfbfb;margin-bottom: .2rem;
      display: flex;display: -webkit-flex;align-items: center;justify-content: space-between;
      .i-left{
        font-size: .3rem;color: #656565;
      }
      .i-right{
        width: 1.35rem;height: 1.35rem;border-radius: 50%;
        background-position: center;background-repeat: no-repeat;background-size: contain;
      }
    }
    .info-type{
      width: 100%;padding: 0 .24rem;height:.88rem;background-color: #fff;margin-bottom: .2rem;
      display: flex;display: -webkit-flex;align-items: center;justify-content: space-between;
      .i-left{
        font-size: .3rem;color: #656565;
      }
      .i-right{
        width: 50%;height: 100%;
        font-size: .3rem;color: #656565;position: relative;
        input{
          display: block;width: 100%;padding-right: .35rem;height: 100%;background-color: rgba(0,0,0,0);
          text-align: right;font-size: .3rem;position: relative;z-index: 99;
        }
        i{
          position: absolute;top: 0;bottom: 0;right: 0;margin: auto;
          font-size: .3rem;color: #656565;line-height: .88rem;
        }
      }
    }
    .infor-warp{
      width: 100%;background-color: #fff;margin-bottom: .2rem;
      ul{
        width: 100%;
        li{
          width: 100%;padding: 0 .24rem;height:.88rem;background-color: #fff;border-bottom: 1px solid #ddd;
          display: flex;display: -webkit-flex;align-items: center;justify-content: space-between;
          .i-left{
            font-size: .3rem;color: #656565;
          }
          label{
            display: block;width: 50%;font-size: .3rem;color: #656565;
            input{
              display: block;width: 100%;height:100%;font-size: .3rem;text-align: right;padding-right: .1rem;
            }
          }
          .i-right{
            width: 50%;height: 100%;
            font-size: .3rem;color: #656565;position: relative;
            input{
              display: block;width: 100%;padding-right: .35rem;height: 100%;background-color: rgba(0,0,0,0);
              text-align: right;font-size: .3rem;position: relative;z-index: 99;
            }
            i{
              position: absolute;top: 0;bottom: 0;right: 0;margin: auto;
              font-size: .3rem;color: #656565;line-height: .88rem;
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
    .i-save{
      display: block;width: 90%;height: .88rem;line-height: .88rem;border-radius: 3px;margin: .88rem auto;
      font-size: .3rem;color: #fff;background-color: #FF9933;text-align: center;
    }
  }
</style>
