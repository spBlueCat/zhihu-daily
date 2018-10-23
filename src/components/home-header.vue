<template>
  <div class="header">
    <div class="header-top">
      <div class="nav-logo" @click="showSlideBar"></div>
      <div class="home">首页</div>
    </div>
  </div>
</template>

<script>
    export default {
        methods:{
          showSlideBar:function(){
            this.$store.dispatch('showSlideBar')
          }
        }
    }
</script>

<style lang="scss" scoped>
    $Blue: #65ccff;
    $B:#000;
    $F:#FFF;

    .header{
        width: 100%;
        height: 4.5rem;
        background: $Blue;
        position: fixed;
        z-index: 999;
        .header-top{
            width: 90%;
            height: inherit;
            margin: auto;
            display: flex;
            align-items: center;
            .nav-logo{
                width: 1.5rem;
                height: .2rem;
                color: $F;
                border-top: .2rem $F solid;
                border-bottom: .2rem $F solid;
                padding:.3rem 0;
                background-clip:content-box;
                background-color: $F;
                box-sizing: content-box;
            }
            .home{
                margin-left: 4rem;
                color: $F;
                font-size:1.2rem;
            }
        }
    }
</style>
