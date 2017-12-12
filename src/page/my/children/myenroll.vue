<template>
  <div>
    <header>
      <div class="h-return">
        <a @click = "gotoAddress({path: '/my'})"><i class="iconfont icon-fanhui"></i></a>
      </div>
      <div class="h-con">我的报名</div>
    </header>
    <div class="main main-bg">
      <div class="enlist-warp">
        <ul>
          <!--这个li循环多少  下面那个就循环多少-->
          <li>
            <div class="enlist-con">
              <a href="javascript:;"></a>
              <div class="work-con">
                <div class="w-left" style="background-image: url(image/work1.jpg)"></div>
                <div class="w-right">
                  <div class="title">苏州品卓招售后客服 福利丰福福利丰福福利丰福</div>
                  <div class="money">4000-5000</div>
                  <div class="w-bottom">
                    <div class="w-type">已报名</div>
                    <div class="w-seat"><i class="iconfont icon-timezone"></i>苏州市园区</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="r-del">删除</div>
          </li>
        </ul>
      </div>
      <!--上面li循环多少  下面就循环多少-->
      <div class="del-warp">
        <a href="javascript:;"></a>
      </div>
    </div>
    <a  @click = "gotoAddress({path: '/home'})" class="enlist-btn">去找职位</a>
  </div>
</template>

<script>
  import $ from 'src/plugins/jquery.min.js'

  export default {
    data(){
      return{
        instrus:[
          {
            title:'UI-界面设计',
            imgsrc: 'http://palpitation.shop/public/images/work1.png',
            money:'4000-5000',
            type:['五险一金','餐补','班车'],
            num:'1560',
            eart:'苏州市园区',
          },
          {
            title:'WUI-前端开发',
            imgsrc: 'http://palpitation.shop/public/images/work2.png',
            money:'5000-6000',
            type:['五险一金','餐补'],
            num:'160',
            eart:'苏州市虎丘区',
          },
        ]
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

  .work-warp{
    width: 100%;
    .work-catgory{
      width: 100%;height: .88rem;border-bottom: 1px solid #ddd;background-color: #fff;
      ul{
        width: 100%;height: 100%;
        display: flex;display: -webkit-flex;justify-content: space-around;align-items: center;
        li{
          font-size: .24rem;color: #656565;position: relative;
          i{
            margin-left: .1rem;font-size: .24rem;
          }
        }
        li:after{
          content: "";position: absolute;right: -.2rem;top: 0;height: 100%;width: 1px;background-color: #ddd;
        }
        li:last-child:after{
          content: "";width: 0;
        }
      }
    }
    .work-list{
      width: 100%;background-color: #fff;padding: 0 .24rem;
    }
    .work-con{
      width: 100%;padding: .2rem 0;border-bottom: 1px solid #f2f2f2;position: relative;
      display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;
      .w-left{
        width: 30%;height: 1.6rem;
        img{
          display: block;width: 100%;height: 100%;
        }
      }
      .w-right{
        width: 70%;height: 1.6rem;padding-left: .24rem;
        .title{
          width: 90%;font-size: .3rem;color: #282828;
          overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
        }
        .money{
          width: 100%;font-size: .28rem;color: #ff0101;line-height: .42rem;margin-bottom: .1rem;
          span{
            color: #686868;
          }
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
        width: .35rem;height: .8rem;background: url(../../../images/list-fl.png) no-repeat center;
        background-size: contain;position: absolute;top: 0;right: 0;
      }
    }
  }
</style>
