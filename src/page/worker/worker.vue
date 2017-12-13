<template>
  	<div>
      <head-top2></head-top2>
      <div class="main">
        <div class="work-warp">
          <div class="work-catgory">
            <ul>
              <li>职位性质<i class="iconfont icon-xiala1"></i></li>
              <li>福利<i class="iconfont icon-xiala1"></i></li>
              <li>性别<i class="iconfont icon-xiala1"></i></li>
              <li>年龄<i class="iconfont icon-xiala1"></i></li>
              <li>薪资<i class="iconfont icon-xiala1"></i></li>
            </ul>
          </div>
          <div class="work-list">
              <div class="work-con"  v-for="todo in instrus" @click = "workxq({path: '/workdetails'})">
                <div class="w-left"><img v-bind:src="todo.imgsrc"></div>
                <div class="w-right">
                  <div class="title">{{ todo.title }}</div>
                  <div class="money">{{ todo.money }}</div>
                  <ul class="clear w-type">
                    <li v-for="to in todo.type">{{to}}</li>
                  </ul>
                  <div class="w-bottom">
                    <div class="w-num">{{ todo.num }}人报名</div>
                    <div class="w-seat"><i class="iconfont icon-timezone"></i>{{ todo.eart }}</div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <foot-guide  is-flag2="true"></foot-guide>
    </div>

</template>

<script>
  import footGuide from 'src/components/footer/footGuide'
  import headTop2 from 'src/components/header/head-search'
export default {
    data(){
        return{
          //招聘信息
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
            {
              title:'测试专员',
              imgsrc: 'http://palpitation.shop/public/images/work3.png',
              money:'3000-4000',
              type:['五险一金','餐补'],
              num:'10',
              eart:'苏州市虎丘区',
            },
          ]
        }
    },

	  mounted(){

    },

    components:{
      footGuide,headTop2,
    },

    computed:{


    },

    methods:{
        //点击图标刷新页面
      reload(){
        window.location.reload();
      },
      workxq(path){
        this.$router.push(path)
      },
    },
}

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';

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
        width: .35rem;height: .8rem;background: url(../../images/list-fl.png) no-repeat center;
        background-size: contain;position: absolute;top: 0;right: 0;
      }
    }
  }
</style>
