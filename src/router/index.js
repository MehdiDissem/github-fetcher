import { createWebHistory, createRouter } from "vue-router"
import SearchComp from "@/components/SearchComp.vue"
import NotFound from "@/components/NotFound.vue"
import DetailsComp from "@/components/DetailsComp.vue"

const routes = [
    {
      path: "/",
      name: "SearchComp",
      component: SearchComp,
    },
    {
      path:"/notfound",
      name:"NotFound",
      component:NotFound
    },
    {
      path:"/details",
      name:"DetailsComp",
      component:DetailsComp
    }
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router