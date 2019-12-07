import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityList:{
       
    },

    currentCity:{
      city:"泉州市",  
    }
    ,
    isGetLocation:true
  },
  mutations: {
    updateCurrentCity(state,{city})
    {

    state.currentCity.city=city;
    },
    updateIsGetLocation(state,{temp})
    {
      state.isGetLocation=temp;
    },
    updateToCityList(state,{data})
    {    
     
      let cityList=state.cityList;
        if(!cityList[data.basic.cid])
        {
          cityList[data.basic.cid]={
            basic:data.basic,
            now:data.now
          }
        }
        else{
          cityList[data.basic.cid].now=data.now;
        }
        state.cityList={...cityList};
    }
    
  },
  actions: {
  },
  modules: {
  }
})
