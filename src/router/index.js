import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/dashboard/Dashboard.vue'
//懒加载
const Home=()=>import('../views/dashboard/children/home/Home.vue');
const City=()=>import('../views/dashboard/children/city/City.vue');
const SearchCity=()=>import('../views/dashboard/children/city/chidrens/SearchCity.vue')
Vue.use(VueRouter)

const routes = [
  {
    path:'/',redirect:'/dashboard'
  }
  ,
{ 
  path:'/dashboard',component:Dashboard,name:'dashboard',
  children:[
    {
      path:'/dashboard',redirect:'/dashboard/home'
    },
    {
      path:'home',name:'home',component:Home,
      children:[
       
      ]
    },
    {
      path:'city',name:'city',component:City,
      children:[
        {path:'SearchCity',name:'searchCity',component: SearchCity},
      ]
    }
  ]
}
]

const router = new VueRouter({
  routes
})

export default router
