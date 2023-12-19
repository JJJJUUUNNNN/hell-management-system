import {createRouter,createWebHistory} from 'vue-router'

export const contantRoutes=[
  {
    path:'/',
    redirect:'/home',
    name:'Layout',
    component:()=>import('')
  }
]

const router=createRouter({
  history:createWebHistory(),
  routes:contantRoutes
})

export default router