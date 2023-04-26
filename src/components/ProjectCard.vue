<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },

  // components: {
  //   MyComponent,
  // },

  // creo una computed per l'abstract dei caratteri

  computed:{
    abstract(){

      return this.project.description.slice(0,180) + " . . .";
    },
  },
};
</script>

<template>
  
  
    <div class="col-4">
      <div class="card">
        
        <div class="card-header">
          <h2 class="card-title fw-bold">{{ project.name }}</h2>
          
        </div>
        
        <div class="card-body">
          <p class="card-text">
            {{ abstract }}
          </p>
        </div>
          <div class="card-footer">
            <h3>Created At: <br> {{ project.created_at }}</h3>
            <router-link class="btn btn-sm btn-primary ms-auto" 
            :to="{
            name:'project-detail',
            params:{
              id:project.id,
              }
            }
            ">View Project</router-link>

            <!-- * mi passo i parametri tramite il to="" usando nome : parametro allineati con le rotte in index.js --> 
            
          </div>
      </div>
    </div>
  </template>

  
       

<style lang="scss" scoped></style>
