<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  name: "ProjectCard",
  props: {
    project: Object,
    // creo una props che risponde vero o falso se sono sul detail o meno
    isDetail: Boolean,
  },

  // components: {
  //   MyComponent,
  // },

  // creo una computed per l'abstract dei caratteri

  computed:{
    abstract(){
      // abbreviazione dei caratteri delle cards

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

            <!-- se siamo sul dettaglio prendi la description come ti arriva dalla chiamata axios altrimenti stampa abstract(che la riduce) -->

            {{ isDetail ? project.description : abstract }}
          </p>
        </div>
          <div class="card-footer">
            <h3>Created At: <br> {{ project.created_at }}</h3>

            <router-link 
            v-if="!isDetail"
            class="btn btn-sm btn-primary ms-auto" 
            :to="{
            name:'project-detail',
            params:{
              slug:project.slug,
              }
            }
            ">View Project</router-link>

            <!-- * mi passo i parametri tramite il to="" usando nome : parametro allineati con le rotte in index.js --> 
            
          </div>
      </div>
    </div>
  </template>

  
       

<style lang="scss" scoped></style>
