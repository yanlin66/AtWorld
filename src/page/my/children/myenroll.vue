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
          <li  v-for="todo in instrus">
            <div class="enlist-con">
              <a href="javascript:;"></a>
              <div class="work-con">
                <div class="w-left" v-bind:style="{backgroundImage: 'url('+todo.imgsrc+')'}"></div>
                <div class="w-right">
                  <div class="title">{{ todo.title }}</div>
                  <div class="money">{{ todo.money }}</div>
                  <div class="w-bottom">
                    <div class="w-type">{{todo.rztype}}</div>
                    <div class="w-seat"><i class="iconfont icon-timezone"></i>{{ todo.eart }}</div>
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
        <a href="javascript:;"   v-for="todo in instrus"></a>
      </div>
    </div>
    <a  @click = "gotoAddress({path: '/worker'})" class="enlist-btn">去找职位</a>
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
            rztype:'已报名',
            eart:'苏州市园区',
          },
          {
            title:'WUI-前端开发',
            imgsrc: 'http://palpitation.shop/public/images/work2.png',
            money:'5000-6000',
            rztype:'已入职',
            eart:'苏州市虎丘区',
          },
        ]
      }
    },
    created () {

    },
    mounted(){
      let that=this;
      $(function () {
        //侧滑显示删除按钮
        let expansion = null; //是否存在展开的list
        let container = document.querySelectorAll('.enlist-warp ul li');
        for(let i = 0; i < container.length; i++){
          let x, y, X, Y, swipeX, swipeY;
          container[i].addEventListener('touchstart', function(event) {
            x = event.changedTouches[0].pageX;
            y = event.changedTouches[0].pageY;
            swipeX = true;
            swipeY = true ;
            if(expansion){   //判断是否展开，如果展开则收起
              expansion.className = "";
              $(".del-warp").css("z-index","-1");
            }
          });
          container[i].addEventListener('touchmove', function(event){

            X = event.changedTouches[0].pageX;
            Y = event.changedTouches[0].pageY;
            // 左右滑动
            if(swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0){
              // 阻止事件冒泡
              event.stopPropagation();
              if(X - x > 10){   //右滑
                event.preventDefault();
                this.className = "";    //右滑收起
                $(".del-warp").css("z-index","-1");
              }
              if(x - X > 10){   //左滑
                event.preventDefault();
                this.className = "delleft";   //左滑展开
                $(".del-warp").css("z-index","999");
                expansion = this;
              }
              swipeY = false;
            }
            // 上下滑动
            if(swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
              swipeX = false;
            }
          });
        }
      });
      $(".del-warp a").click(function () {
        let index=$(this).index();
        $(".enlist-warp ul li").removeClass("delleft").eq(index).remove();
        $(".del-warp").css("z-index","-1");
      });
      $(".w-comment").click(function () {
        alert("评论键盘");
      })
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

  //我的报名
  .enlist-warp{
    width: 100%;background-color: #fff;
    ul{
      width: 100%;overflow: hidden;
      li{
        width: 120%;display: flex;display: -webkit-flex;
        border-bottom: 1px solid #ddd;position: relative;
        .enlist-con{
          width: 84%;height: 2rem;background-color: #fff;padding: 0 .24rem;position: relative;
          a{
            position: absolute;left: 0;top: 0;width: 100%;height: 100%;z-index: 991;
          }
          .work-con{
            width: 100%;padding: .2rem 0;border-bottom: 1px solid #ddd;
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
              .money{
                width: 100%;font-size: .3rem;color: #ff0101;line-height: .6rem;
              }
              .w-bottom{
                width: 100%;margin-top: .2rem;position: relative;
                display: flex;display: -webkit-flex;justify-content: space-between;align-items: center;
                .w-type{
                  padding: 0 .2rem;font-size: .24rem;color: #f90;border-radius: .2rem;border: 1px solid #f90;line-height: 1.6;
                }
                .w-comment{
                  position: absolute;left: 1.4rem;top: 0;font-size: .28rem;color: #989898;line-height: 1.6;z-index: 992;cursor: pointer;
                  i{
                    color: #686868;font-size: .3rem;margin-right: .1rem;
                  }
                }
                .w-seat{
                  font-size: .24rem;color: #989898;max-width: 60%;
                  overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
                  i{
                    color: #f90;font-size: .32rem;margin-right: .1rem;
                  }
                }
              }
            }
          }
        }
        .r-del{
          width: 16%;height: 2rem;background-color: #ff6150;font-size: .3rem;color: #fff;
          line-height: 2rem;text-align: center;
        }
      }
      li:last-child{
        border-bottom: none;
      }
      .delleft{
        transform:translateX(-16%);-webkit-transform:translateX(-16%);
      }
    }
  }
  //删除按钮列表
  .del-warp{
    position: fixed;top: .88rem;right: 0;width: 20%;z-index: -1;
    a{
      display: block;width: 100%;height: 2rem;
    }
  }

  .enlist-btn {
    position: fixed;left: 0;right: 0;bottom: 0;height: 1rem;margin: auto;
    text-align: center;line-height: 1rem;font-size: .3rem;  color: #fff;background-color: #f90;z-index: 999;
  }
</style>
