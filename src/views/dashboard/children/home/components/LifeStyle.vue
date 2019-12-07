<template>
    <div class="lifeWrapper">
  <van-cell-group class="group"  :border="false">
  <van-cell class="cell" v-for="(value,index) in LifeStyleData" :title="value.brf" :value="value.txt" :label="value.type" :key="index" />
</van-cell-group>
    </div>
</template>
<script>
export default {
    props:{LifeStyleData:Array}
}
</script>
<style scoped>
.lifeWrapper{
    
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