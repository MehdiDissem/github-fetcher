import { createWebHistory, createRouter } from "vue-router"
import SearchComp from "@/components/SearchComp.vue"

const routes = [
    {
      path: "/",
      name: "SearchComp",
      component: SearchComp,
    },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router