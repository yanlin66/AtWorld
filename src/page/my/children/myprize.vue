<template>
  <div>
    <header>
      <div class="h-return">
        <a @click = "gotoAddress({path: '/my'})"><i class="iconfont icon-fanhui"></i></a>
      </div>
      <div class="h-con">我的奖品</div>
    </header>
    <div class="main main-bg">
      <div class="groom-warp">
        <div class="groom-top">
          <ul>
            <li  v-for="todo in myprize">
              <span class="g-two">{{ todo.time }}</span>
              <span class="g-three">{{ todo.name }}</span>
              <span class="g-four">{{ todo.prize }}</span>
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
        myprize: [
          {
            time:'2017-12-01',
            name:'转盘抽奖',
            prize:'2元红包'
          },
          {
            time:'2017-12-02',
            name:'转盘抽奖',
            prize:'10元红包'
          },
          {
            time:'2017-12-03',
            name:'转盘抽奖',
            prize:'5元红包'
          },
        ]
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

  .groom-warp{
    width: 100%;
    .groom-top{
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
          .g-four{
            width:1.5rem;text-align: center;
            color: #656565;
            i{
              color: #ff0101;
            }
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
    .groom-bottom{
      margin-top: .2rem;width: 100%;padding: .55rem .45rem .45rem;background-color: #fff;
      img{
        display: block;width: 90%;margin: 0 auto .4rem;
      }
      form{
        width: 100%;
        display: block;padding: 0 .5rem;
        label{
          width: 100%;display: flex;display: -webkit-flex;align-items: center;position: relative;
          span{
            width: 40%;font-size: .3rem;color: #282828;
          }
          input{
            display: block;width: 60%;height:.7rem;margin: .2rem auto;border-radius: 3px;
            background-color: #fff;border-bottom: 1px solid #bbb;font-size: .28rem;padding-right: .6rem;
          }
          i{
            width: .4rem;height: .4rem;cursor: pointer;
            background: url(../../../images/tongxun-phone.png) no-repeat center;background-size: contain;
            position: absolute;right: .15rem;top: .3rem;
          }
        }
        button{
          display: block;width: 2.8rem;height: .7rem;margin: .8rem auto 0;
          font-size: .3rem;background-color: #f90;color: #fff;border-radius: 5px;
        }
      }
    }
  }
</style>
