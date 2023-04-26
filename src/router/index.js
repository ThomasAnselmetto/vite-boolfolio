// creato il file js per la gestione del router importiamo createRouter

import {RouterLink, createRouter,createWebHistory} from 'vue-router';


// todo:import pages
import HomePage from "../pages/HomePage.vue";
import SecondComponent from "../pages/SecondComponent.vue";


//todo: creazione routes
const router = createRouter({

  // ? history(singolare quindi metodo)
  history:createWebHistory(),

  // ? le prossime due righe servono per dare la classe active di bootstrap
  linkActiveClass: 'active' ,
  LinkexactActiveClasslinkActiveClass: '' ,

  // ? routes(plurale quindi collection,array ecc)
  routes:[
    {
      path:'/',
      name:'home',
      component:HomePage,
    },
    {
      path:'/pagprova',
      name:'pagprova',
      component:SecondComponent,
    },
  ]
})

//todo:export router

export {router};