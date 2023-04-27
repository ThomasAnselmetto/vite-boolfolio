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
  
  
    <div class="col">
      <div class="card text-bg-light border-primary">
        
        <div class="card-header border-primary d-flex justify-content-between align-items-start">
          <h2 class="card-title fw-bold w-50">{{ project.name }}</h2>
          
          <div class="type-tech">
            <span v-if="project.type" 
            class="badge fs-5" :style="{backgroundColor: project.type.color}" >{{project.type.label}}
            </span>
            <hr v-if="project.type">
            <h6 class="fw-bold">Used technologies</h6>
            <div v-if="project.technologies.length" class="technologies d-flex flex-column align-items-end">
              <span v-for="technology in project.technologies" 
              :key="technology.id" 
              class="badge rounded-pill my-1 fs-7"
              :style="{backgroundColor: technology.color}"
              >{{ technology.label }}</span>
            </div>
          </div>
        </div>


        
        <div class="card-body text-primary fw-bold ">
     
          <p class="card-text">

            <!-- se siamo sul dettaglio prendi la description come ti arriva dalla chiamata axios altrimenti stampa abstract(che la riduce) -->

            {{ isDetail ? project.description : abstract }}
          </p>
        </div>
          <div class="card-footer border-primary">
            <h3>Created At: <br> {{ project.created_at }}</h3>

            <router-link 
            v-if="!isDetail"
            class="btn btn-sm btn-success fw-bold ms-auto" 
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

  
       

<style lang="scss" scoped>
.card-header{
  height: 12rem;
}
.card-body{
  min-height: 10rem;
}
</style>
