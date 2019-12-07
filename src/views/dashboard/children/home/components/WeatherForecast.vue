<template>
    <div class="forecast">
       <van-cell-group class="group" :border="false" >
  <van-cell  
  :title="'今天·'+forecastData[0].cond_txt_d"
   :value="forecastData[0].tmp_max+'°/'+forecastData[0].tmp_min+'°'"
    :label="forecastData[0].wind_dir"  
    class="cell" />
     <van-cell  
  :title="'明天·'+forecastData[1].cond_txt_d"
   :value="forecastData[1].tmp_max+'°/'+forecastData[1].tmp_min+'°'"
    :label="forecastData[1].wind_dir"  
    class="cell" />
  <van-cell  
  :title="'后天·'+forecastData[2].cond_txt_d"
   :value="forecastData[2].tmp_max+'°/'+forecastData[2].tmp_min+'°'"
    :label="forecastData[2].wind_dir"  
    class="cell" />

</van-cell-group>
    </div>
</template>
<script>
export default {
    props:{
        forecastData:Array
    }
}
</script>
<style scoped lang='less'>
.forecast{
margin-top: 0.5rem;
padding: 1rem 1rem;

}
.group{color: #f5f5f5;
    background-color: rgba(255, 255, 255,0.2);
    border-radius:0.5rem; 
}
.van-cell__value{
    color: #ddd;
}
.group  .cell{
background: transparent;
color: #f5f5f5;
}
</style>