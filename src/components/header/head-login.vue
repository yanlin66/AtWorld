<template>
    <header id='head_top'>
      <div class="h-con">{{header}}</div>
    </header>
</template>

<script>
    export default {
    	data(){
            return{

            }
        },
        mounted(){

        },
        props: ['header'],
        computed: {

        },
        methods: {

        },

    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    header{
      width: 100%;height: .88rem;background-color: #FF9933;
      padding: 0 .24rem;position: fixed;top: 0;left: 0;z-index: 999;
      .h-con{
        width: 100%;height: 100%;line-height: .88rem;text-align: center;
        font-size: .36rem;color: #fff;
      }
    }
</style>
