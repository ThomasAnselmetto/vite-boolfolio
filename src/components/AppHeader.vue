<script>
// import MyComponent from "./components/MyComponent.vue";

// non vogliamo i link perche le app di vue sono app single page che non si devono ricaricare

export default {
  name: "AppHeader",

  props: {
    name: String,
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">{{name}}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-auto flex-grow-0" id="navbarNav">
      <ul class="navbar-nav">
        <li> <router-link :to="{name:'home'}" class="nav-link">Home</router-link></li>
        
      </ul>
    </div>
  </div>
</nav>
        

    

 
  
  
    
</template>

<style lang="scss" scoped></style>
