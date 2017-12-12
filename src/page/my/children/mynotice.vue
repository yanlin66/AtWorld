<template>
  <div>
    <header>
      <div class="h-return">
        <a @click = "gotoAddress()"><i class="iconfont icon-fanhui"></i></a>
      </div>
      <div class="h-con">
        我的消息
      </div>
    </header>
    <div class="main">
      <div class="notice-warp">
        <ul>
          <li v-for="todo in mynotice">
            <div class="title">
              {{todo.name}}
            </div>
            <p>
              {{todo.content}}
            </p>
            <div class="time">{{todo.time}}</div>
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
        mynotice:[
          {
            name:'系统消息',
            content:'版本开发中，如有建议请私密开发人员',
            time:'2017-12-12'
          },
          {
            name:'系统消息',
            content:'个人中心一级页面框架完毕',
            time:'2017-12-11'
          },
          {
            name:'系统消息',
            content:'实现功能登录注册',
            time:'2017-12-10'
          }
        ]
      }
    },
    created () {

    },
    methods: {
      gotoAddress(){
        //返回上一页
        history.go(-1);
      }
    },
  }

</script>

<style lang="scss" scoped>
  @import '../../../style/mixin';

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

  //通知
  .notice-warp{
    width: 100%;
    ul{
      width: 100%;
      li{
        width: 100%;padding: 0 .24rem;border-bottom: 1px solid #ddd;position: relative;
        a{
          position: absolute;top: 0;left: 0;width: 100%;height: 100%;
        }
        .title{
          padding-top: .2rem;width: 100%;line-height: .46rem;
          font-size: .3rem;color: #282828;
        }
        p{
          font-size: .24rem;line-height: .4rem;color: #656565;
        }
        .time{
          font-size: .24rem;line-height: .5rem;color: #989898;text-align: right;
          padding-bottom: .1rem;
        }
      }
    }
  }
</style>
