<template>
   <div id="weatherCard">
        <div class="bg">
      </div>
      <div class="card-wrap">
       <div class="card">
         
     <div class="temp"><h2><span>{{now.tmp}}</span><span>&#8451;</span></h2></div>
     <div class="weather-info">
        <span class="weather">{{now.cond_txt}}</span>
         <span class="pm">{{now.wind_dir}} {{now.wind_deg}}°</span>
         
     </div>
     <div class="date-wrap">
       <span class="week">{{week}}</span>
       <span class="date">{{date}}</span>
     </div>
      <div>
       <div class="icon">
            <img class="icon" :src="iconSrc">
            </div>
            
       </div>


      </div> 
     <div class="air">
    <span >空气质量:{{airNowCity.qlty}}</span>  <span >PM 2.5 {{airNowCity.pm25}}</span>
   </div> 
   <div class="udTime">{{airNowCity.pub_time}}</div>
   </div>
   
    </div>
</template>
<script>
import moment from 'moment'
import { Icon } from 'vant';
export default {
    props:{
       now:Object,
       airNowCity:Object
       
    },
    data()
    {
       return{
         
       }
    },
    mounted()
    {
      //  console.log(this.now);
    },
    computed:{
        date()
        {
           return moment().format('MMMM Do');
        },
        week()
        {
           return moment().format('dddd');
        },
         iconSrc()
         {   
            
       return 'https://cdn.heweather.com/cond_icon/'+this.now.cond_code+'.png';

         }
    }
}
</script>
<style scoped lang='less'>
@cardWrapBackground:#fff;
@cardBackground:rgba(222, 214, 214, 0.2);
#weatherCard{
 // background: @cardWrapBackground;
width: 100%;
height: 25rem;
padding:3rem 2rem; 
position: relative;
.bg{
  position: absolute;
 
   // background: url("./images/sunny.jpg") no-repeat;
   // // filter: blur(5px);
   // background-size: cover;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  
  }
  .bg::before{
   content: "";
    position:absolute;
  left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(0, 0, 0, 0.1)
}

 .udTime{
    color: #fff;
    font-size: 0.7rem;
    text-align: right;
    padding: 0.3rem 0.2rem;
 }
.card-wrap{

  width: 100%;
  height: 100%;
 position: relative;
 .air{
   display: flex;
   justify-content: space-around;
   width: 100%;
     position: absolute;
  color: #f5f5f5;
// background-color: #fff;
 z-index: 1;
 font-size: 0.7rem;
 bottom: 0;
  }
  .card{
      padding: 2rem 2rem;
     border-radius: 0.5rem;
width: 100%;
position: relative;
background-color:@cardBackground;
height: 15rem;
.temp{
 color: white;
font-size: 2.5rem;
}
.weather-info{
   padding: 1rem 0.5rem;
   font-size: 0.7rem;
       color: #fefefe;
   .weather{
      margin-right: 1rem;
   }
}
.icon{
  position: absolute;
  top: 1rem;
  right: 0;
  width: 6rem;
  height: 6rem;
  filter:contrast(50%) brightness(150%); 
  
}
.date-wrap{
   span{
      display: block;
    padding: 0.1rem 0.5rem;
   }
   .week{
      font-size: 1.4rem;
      color: #fff;
   }
   .date{
      font-size: 0.7rem;
       color: #fefefe;
   }
}
  }
}

}

</style>