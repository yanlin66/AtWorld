<template>
  <div>
    <head-top :header="headerHtml"></head-top>
    <div class="main">
      <div class="login-warp">
        <form action="">
          <label>
            <span>用户名</span><input type="text" placeholder="请输入用户名" class="l-phone"><i class="iconfont icon-cha1" id="user-clear"></i>
          </label>
          <label>
            <span>密码</span><input type="password" placeholder="请输入密码" class="l-passward"><i class="iconfont icon-yanjing1" id="passward-show"></i>
          </label>
          <!--<label>-->
            <!--<span>验证码</span><input type="text" placeholder="请输入验证码" id="code_input" style="padding-right: 2.5rem;">-->
            <!--<div id="v_container"><canvas id="verifyCanvas" width="115" height="50" style="cursor: pointer;">您的浏览器版本不支持canvas</canvas></div>-->
          <!--</label>-->
          <div class="fg-passward">
            <!--<a  @click = "gotoAddress({path: '/home'})">忘记密码?</a>-->
          </div>
          <button class="login-btn"  @click = "gohome()">登录</button>
          <div class="go-reg">
            没有账号？<a  @click = "gotoAddress({path: '/reg'})">立即注册</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from 'src/components/header/head-login'
  import $ from 'src/plugins/jquery.min.js'
  import verifyCode from 'src/plugins/gVerify.js'
  export default {
    data(){
      return{
        //账户信息
        addinfo:'',
        res:"",
        headerHtml:'登录'
      }
    },
    created () {
      let that=this;
      $.ajax({
        data:{'token':'f2abb3bd197166def142dc83dbe2b862'},
        dataType:"JSONP",
        jsonp:"callback",//请求自动带上callback参数，callback值为jsonpCallback的值
        jsonpCallback:"user",//接口服务器应该返回字符串数据格式：login(JSON数据)
        type:"post",
        url:"http://palpitation.shop/api/use.php",//接口服务器地址
        success:function(response){
          that.addinfo=response.user;
//          console.log(that.addinfo)
        },
        error:function(e){
          console.log(e.status+','+ e.statusText);
        }
      });
    },
    computed: {

    },
    mounted(){
      //验证码
//      let verifyCode=new GVerify("v_container");
//      this.res = verifyCode.validate(document.getElementById("code_input").value);

    },
    components:{
      headTop,
    },
    methods:{
      gotoAddress(path){
        this.$router.push(path)
      },
      gohome(){
        let that=this;
        //输入次数
        let num=0;
        //提示内容
        let msg;
        //点击登录次数
        let msgtype;
        //账号输入错误次数
        let namenum=0;
        //密码输入错误次数
        let passwordnum=0;
        //本地账户
        let localnum=0;
        let localpassnum=0;
        //判断输入次数
        if(num < 4){
            //遍历数据源 查询是否匹配到
            this.addinfo.forEach(function(value,index,array){
              if($(".l-phone").val() === value.links.author){
                if($(".l-passward").val() === value.links.passward){
                  //账号密码匹配正确--->跳转首页（可延伸，什么地方来跳到什么地方，需要参数）
                  num=0;
                  passwordnum=0;
                  //保存登录session
                  sessionStorage.setItem("username", value.links.author);
                  sessionStorage.setItem("usertype", value.aname);
                  sessionStorage.setItem("usererweima", value.erweima);
                  sessionStorage.setItem("usertx", value.links.tx);
                  //跳转首页
                  that.$router.push({ path:'/my', query: { plan: '1' }});
                }else{
                  //账号匹配成功，密码输入不正确（输入3次不正确，提示是否前往找回页面）
                  msgtype=2;
                  num++;
                }
              }else{
                //账号未匹配，输入3次之后询问是否前往注册页面
                msgtype=1;
                namenum++;
                num++;
              }
            });

            //匹配本地数据
            if($(".l-phone").val() === localStorage.getItem('l-phone')){
              if($(".l-passward").val() === localStorage.getItem('l-password')){
                //账号密码匹配正确--->跳转首页（可延伸，什么地方来跳到什么地方，需要参数）
                num=0;
                passwordnum=0;
                //跳转首页
                that.$router.push({ path: '/home'});
                let myDate = new Date();//获取系统当前时间
                localStorage.setItem("prve-login-time",localStorage.getItem("login-time"));
                localStorage.setItem("login-time",myDate.getTime());
                localStorage.setItem('statusnum','1');

                //判断账号状态
                let prvetime=localStorage.getItem("prve-login-time");
                let acttime=localStorage.getItem("login-time");
                localStorage.setItem('signstatus','');
                let iDays = Math.floor(Math.abs(acttime-prvetime) / (24 * 3600 * 1000));

                if(iDays >7){
                  localStorage.setItem('status','休眠中')
                }else{
                  localStorage.setItem('status','激活中')
                }
              }else{
                num++;
                localpassnum=1;
              }
            }else{
              num++;
              localnum=1;
            }

        }else{
          //判断超过3次，询问是否前往注册页面
          msg=confirm("是否前往注册页面");
          if(msg){
            that.$router.push('/reg');
          }else{
            //清空点击次数，只当每3次之后提示
            num=0;
            passwordnum=0;
          }
        }
        /*如果提示状态值为：
        *                 1为用户不存在
        *                 2为密码不正确
        */
        if (msgtype === 1 && namenum === this.addinfo.length && localnum === 1){
            alert('用户不存在')
        }
        if(msgtype === 2 && passwordnum<3 && localpassnum === 1){
           passwordnum++;
           alert('密码不正确')
        }
        if(passwordnum>3){
          //判断输入密码超过3次，询问是否前往找回密码页面
          msg=confirm("是否前往找回密码页面");
          if(msg){
            that.$router.push('/reg');
          }else{
            //清空点击次数，只当每3次之后提示
            num=0;
            passwordnum=0;
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  @import "../../style/swiper.min.css";
  //首页
  .main{
    bottom: 0;
  }
  .login-warp{
    margin-top: 1.2rem;width: 100%;padding: 0 .44rem;
    label{
      display: block;width: 100%;height: 1rem;
      position: relative;
      span{
        font-size: .28rem;color: #282828;padding-top: 1px;
        display: block;width: 1.2rem;height: 1rem;line-height: 1rem;
        position: absolute;left:0;top:0;
      }
      #v_container{
        position: absolute;right: 0;top: 0;
        width:2.3rem;height: 1rem;cursor: pointer;
      }
      ::-webkit-input-placeholder {color: #bbb;}
      :-moz-placeholder {color: #bbb;}
      ::-moz-placeholder {color: #bbb;}
      :-ms-input-placeholder {color: #bbb;}
      input{
        display: block;width: 100%;height:1rem;padding-left: 1.2rem;padding-right: .6rem;
        border-bottom: 1px solid #ddd;color: #282828;font-size: .28rem;border-radius: 0;
      }
      i{
        width: .6rem;text-align: center;color: #bbb;
        position: absolute;right: 0;top: 0;bottom: 0;margin: auto;line-height: 1rem;
      }
      .xt{
        width: 1.5rem;font-size: .3rem;
      }
      #user-clear{
        font-size: .5rem;
      }
      #passward-show{
        font-size: .40rem;
      }
      .yzm{
        position: absolute;right: 0;top: 0;bottom: 0;margin: auto;width: 1.5rem;
        font-size: .24rem;color:#f93;text-align: center;line-height: 1rem;
      }
      .yzm:before{
        content: "";
        position: absolute;left: -.22rem;top: 0;bottom: 0;margin: auto;
        width: 1px;height: .36rem;background-color: #ddd;
      }
    }
    .protocol{
      margin-top: .4rem;width: 100%;height: 1rem;position: relative;
      font-size: .26rem;color: #666;text-align: center;line-height: 1rem;
      span{
        color:#f93;
      }
      input{
        display: inline-block;width: .25rem;height: .25rem;margin-right: .2rem;
        font-family:"iconfont" !important;color:#f93;position: relative;top: 2px;
        font-size:.32rem;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      input:after{
        content: "\e604";
      }
      input:checked{
        background-color: #fff;
      }
      input:checked:after{
        content: "\e606";
      }
    }
    .fg-passward{
      width: 100%;text-align: right;
      height: .6rem;line-height: .6rem;
      a{
        color:#f93;font-size: .26rem;
      }
    }
    .login-btn{
      display: block;width:100%;height:1rem;background-color:#f93;color: #fff;
      font-size: .3rem;text-align: center;line-height: 1rem;border-radius: 5px;
      margin-top: .82rem;
    }
    .fg-btn{
      display: block;width:100%;height:1rem;background-color:#f93;color: #fff;
      font-size: .3rem;text-align: center;line-height: 1rem;border-radius: 5px;
      margin-top: .82rem;
    }
    .reg-btn{
      display: block;width:100%;height:1rem;background-color:#f93;color: #fff;
      font-size: .3rem;text-align: center;line-height: 1rem;border-radius: 5px;
    }
    .go-reg{
      width: 100%;height:1rem;text-align: center;line-height: 1rem;
      font-size: .3rem;
      a{
        color:#f93;
      }
    }
  }
</style>
