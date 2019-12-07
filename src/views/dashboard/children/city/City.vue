<template>
    <div id='city'>
        <!-- 导航 -->
<van-nav-bar  title="城市管理" left-text="返回" left-arrow  @click-left="onClickLeft" class="nav">
  <van-icon @click='edit()' name="edit" slot="right" size="1.2rem"  />
</van-nav-bar>
  <CityItem :showEdit='showEdit'></CityItem>
  <van-button type="info" size="small" class="btn" @click="searchCity()"><van-icon name="plus" /></van-button>
   <transition name="router-slider" mode="out-in">
        <router-view></router-view>
           </transition>
    </div>
</template>
<script>
import CityItem from './components/CItyItem'
export default {
    data()
    {
        return{

            showEdit:false
        }
    }
    ,
    methods:{
        edit(){
            // console.log(this.showEdit);
        this.showEdit=!this.showEdit;

        },
        onClickLeft()
        {
         this.$router.go(-1);
        },
        searchCity(){

        this.$router.push("city/searchCity");
        }
   
    },
    components:{
        CityItem 
    }
}
</script>
<style lang="less" scoped>
#city{
    width: 100%;
    height: 100%;
    position: relative;
    .nav{
        height: 3rem;
        color:"#111";
    }
    .van-button--small{
        position: fixed;
     min-width: 30px; 
    height: 30px;
    padding: 0 8px;
    font-size: 12px;
    line-height: 28px;
    border-radius: 50%;
    right: 1rem;
    bottom: 1rem;
    
    }
}
 .router-slider-enter-active,.router-slider-leave-active{
     transition: all .3s ease;

 }
  .router-slider-enter, .router-slider-leave-to{

      transform: translate3d(2rem,0,0);
      opacity: 0;
  }
</style>