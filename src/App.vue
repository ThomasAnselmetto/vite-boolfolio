<script>

import AppHeader from "./components/AppHeader.vue";



export default {
  data() {
    return {
      name: "Portfolio Projects",
      
      
      // types: {
      //   data:[],
      //   pages:{},
      // },
      // technologies: {
      //   data:[],
      //   pages:{},
      // },



    };
  },

  // la sintassi del component cosi' e' condensata quella completa sarebbe cosi'
  // components:{AppHeader:AppHeader},
  // ossia {nome che il componente che avra' nel template:parte che punta alla import}
  // chiave e variabile con stesso nome si possono condensare

  components: {
    AppHeader
  },
};

</script>

<template>
  <AppHeader :name="name" />
  <main class="container">
    <router-view></router-view>
    <!-- todo: inserire router component-->
  </main>

  
</template>

<style lang="scss" scoped></style>







 
  
