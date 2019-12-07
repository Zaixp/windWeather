<template>
<div>
    <van-cell-group v-for="city in cityList" :key="city.basic.cid" :class="showEdit?'edit':''">
<van-cell :icon="(city.basic.location+'市')===currentCity.city?'location-o':''" :title="city.basic.location" :value="city.now.tmp+'°C'"   size="large" :label="city.basic.admin_area"  class="city">
</van-cell>
<van-cell :value="city.now.wind_dir" size="large" >
    <div slot="title" class="tept">{{city.now.cond_txt}}</div>
</van-cell>

<van-button icon="clear" size="small" v-if="showEdit" ></van-button>
    </van-cell-group>
</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    props:{
        showEdit:Boolean
    },
    computed:{
       ...mapState(['cityList','currentCity']) 
    }
}
</script>
<style scoped>
.city .van-cell__value{
   color: #555;
    font-size: 1.3rem;
}
.tept{
    font-size: 0.7rem;
    color: #999;
}
.van-button--default
{   
    position: absolute;
    right: 0;
    bottom: 40%;
    color: red;
    background-color: #fff;
    border: none;
}
.van-button__icon{
    font-size: 1.5rem;
}
</style>