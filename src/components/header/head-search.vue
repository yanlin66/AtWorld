<template>
  <header id='head_top2'>
      <label class="h-search-work">
        <input type="text" placeholder="产品经理"><i class="iconfont">&#xe60b;</i>
        <div class="colligate">共&nbsp;<span>{{colligate}}</span>&nbsp;条</div>
      </label>
  </header>
</template>

<script>
  export default {
    data(){
      return{
        colligate:'26'
      }
    },
    mounted(){

    },
    computed: {

    },
    methods: {

    },

  }

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';

  header{
    width: 100%;height: .88rem;background-color:#FF9933;
    padding: 0 .24rem;position: fixed;top: 0;left: 0;z-index: 999;
    .h-search-work {
      display: block;width: 100%;height: .88rem;padding: 0.13rem .12rem 0;
      position: relative;
      input {
        display: block;width: 100%;height: .62rem;padding: 0 1.4rem 0 .6rem;
        border-radius: .6rem;background-color: #fff;
        color: #656565;font-size: .28rem;
      }
      i {
        font-size: .32rem;  color: #9ea19f;  line-height: .88rem;
        position: absolute; left: .25rem;  top: 0;  bottom: 0;  margin: auto;
      }
      .colligate {
        position: absolute;right: .35rem;top: 0;bottom: 0;margin: auto;
        line-height: .88rem;font-size: .26rem;color: #656565;
      }
    }
  }
</style>
