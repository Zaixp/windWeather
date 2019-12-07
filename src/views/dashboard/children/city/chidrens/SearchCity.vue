<template>
    <div id="search">
    <van-nav-bar  left-text="返回" left-arrow @click-left="onclickLeft()">
  
</van-nav-bar>
   <form action="/">
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    show-action
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
    </div>
</template>
<script>
export default {
    data()
    {
        return{
       value:''
        }
    },
    methods:{
   onclickLeft()
{
 this.$router.go(-1);
},
onSearch()
{

},
onCancel()
{
    
}
    }
}
</script>
<style scoped>
#search
{
    width: 100%;
    height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 200;
  background-color: #fefefe;

}

</style>