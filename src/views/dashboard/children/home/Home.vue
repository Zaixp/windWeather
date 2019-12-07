<template>
<van-loading class="loading" v-if="loading" type="spinner" color="#1989fa" >zxp正在定位.</van-loading>
    <div class="home" v-else>  
  <!-- 头部导航栏 -->
 <van-nav-bar  class="nav" :fixed="true"
 @click-left="onClickLeft" >
  <van-icon @click="show=true" name="plus" slot="right" size='1.5rem'  color="white" />
   <van-icon name="wap-nav" slot="left" size='1.5rem' color="white" />
    <div slot='title' class="city" @click="getPosition()"><van-icon name="location" size="1rem" /><span style="vertical-align: middle;">{{currentCity.city}}</span></div> 
</van-nav-bar>
<!-- 天气卡片 -->
<WeatherCard :now="now" :airNowCity="airNowCity"/>
<!-- 天气预报 -->
<WeatherForecast :forecastData='forecastData'/>
<!-- 小时预报 -->
 <Hourly :hourlyData='hourlyData'/>
<!-- 生活指数 -->
<LifeStyle :LifeStyleData="LifeStyleData"/>
<van-overlay :show="show" @click="show = false" >
    <div class="wrapper" @click.stop>
    <div class="block" >
      <span>分享天气</span>
      <span>设置</span>
    </div>
  </div>
</van-overlay>
<!-- 底部 -->
<div class="footer">天气数据来自和风天气</div>
    </div>
</template>
<script>
import {Toast} from'vant'
import WeatherCard from './components/WeatherCard'
import Hourly from './components/Hourly'
import WeatherForecast from './components/WeatherForecast'
import LifeStyle from './components/LifeStyle.vue'
import {getNowData,getAirData, getForecastData,getLifeStyleData,getHourlyData} from '../../../../servive/api/index.js'
import{mapState,mapMutations} from 'vuex'
export default {

  data()
  {
    return{
      loading:true,
      now:{},
      show:false,
      airNowCity:{},
      forecastData:[],
      LifeStyleData:[],
      hourlyData:[],
    }
  },
  computed:{
    ...mapState(["currentCity","isGetLocation"])
  }
  ,
    components:{
   WeatherCard,
   WeatherForecast,
   LifeStyle,
    Hourly 
    }
   ,
   mounted()

   {     //判断是否定位 
       if(this.isGetLocation)
        {this.getPosition();}
        else{
          //得到数据
           this.getHomeData();
        }  
    
   },
  methods: {
    ...mapMutations(['updateCurrentCity','updateIsGetLocation','updateToCityList']),
    onClickLeft() {
    this.$router.push('city');
    },
    //得到home数据
   async  getHomeData()
    {    
        
       
          getNowData(this.currentCity.city)
           .then(r=>{
           
             this.now=r.HeWeather6[0].now;
             //更新到城市列表
             let data=r.HeWeather6[0];
            
            this.updateToCityList({data});
           });

           getAirData(this.currentCity.city)
          .then((r)=>{
      this.airNowCity=r.HeWeather6[0].air_now_city; });
      getHourlyData(this.currentCity.city)
          .then((r)=>{
            // console.log(r);
      this.hourlyData=r.HeWeather6[0].hourly;
       getForecastData(this.currentCity.city)
       .then(r=>{
       this.forecastData=r.HeWeather6[0].daily_forecast;
           this.loading=false;
       });
    
      });
     
      getLifeStyleData(this.currentCity.city)
      .then(r=>{
      this.LifeStyleData=r.HeWeather6[0].lifestyle;
      });

    },
    onClickRight() {
     
    },
        async   getPosition()
    {    
       Toast('正在定位');
       let geolocation = await new qq.maps.Geolocation('DOFBZ-GHUKX-UYO4N-7DFZO-IF7BJ-HPBDL', "myapp");
       geolocation.getLocation(this.suc,this.err);

    },
      suc(position){
        Toast.success('定位成功:当前是'+position.city);
        
     let city=position.city;
this.updateCurrentCity({city});
  this.getHomeData();
  //把定位关闭
      let temp=false;
    this.updateIsGetLocation({temp});    
      },
          err()
          {  
            Toast.fail('定位失败:当前是'+this.currentCity.city);
             this.getHomeData();
              // this.loading=false;
          }
  } 
}
</script>
<style scoped lang='less'>
.loading{

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.home{
    width: 100%;
    // height: 100%;
    background-image: linear-gradient(#31395d, #31395d);
   
   .nav{
         background-color: rgba(247, 238, 238, 0.2);
         color: white;
   }
   .city{
     color: white;
   }
}
.wrapper{
  background-color: #fefefe;
  width: 4.5rem;
  position: absolute;
  top: 0.2rem;
  right:  0.3rem;
  border-radius: 0.5rem;
  .block{
       
       span{
         text-align: center;
         display: inline-block;
         width: 100%;
         font-size: 0.8rem;
         height: 2rem;
         line-height: 2rem;
       }
  }

}
.footer{
  color: #999;
  font-size: 0.5rem;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
}
</style>