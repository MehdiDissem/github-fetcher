import { createWebHistory, createRouter } from "vue-router"
import SearchComp from "@/components/SearchComp.vue"
import NotFound from "@/components/NotFound.vue"
import DetailsComp from "@/components/DetailsComp.vue"
import ReposComp from "@/components/ReposComp.vue"

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
    },
    {
      path:"/ReposComp",
      name:"ReposComp",
      component:ReposComp
    }
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router