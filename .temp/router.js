import Vue from 'vue'
import Router from 'vue-router'
import App from '@/index'
import steam from "@/components/steamP/steam"
import traditionalCooking from "@/components/steamP/traditionalCooking"
// import caipu from "@/components/common/caipu"
// import caidan from "@/components/common/caidan"
Vue.use(Router)
module.exports = new Router({
  routes: [
    {
      path: "/",
      redirect: "/steam"
    },
    {
      path: '/steam',
      component: steam,
    },
    {
      path: '/traditionalCooking',
      name: 'traditionalCooking',
      component: traditionalCooking,
    }
   ]
})