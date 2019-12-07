<template>
<div id="dasboard">
  <transition name="router-slider" mode="out-in">
        <router-view></router-view>
           </transition>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='less'>
  #dasboard{
    width: 100%;
   height: 100%;
  }
//   .router-slider-enter-active,.router-slider-leave-active{
//      transition: all .3s ease;

//  }
//   .router-slider-enter{

//       transform: translate3d(2rem,0,0);
//       opacity: 0;
//   }
</style>