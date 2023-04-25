<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
  data() {
    return {
      name: "Portfolio Projects",
      projects: {
        list:[],
        pages:[],
      },
      
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
    AppHeader,
    ProjectList,
  },

  emits:['changePages'],

  methods: {
    fetchProjects(endpoint = null) {
      if(!endpoint) endpoint = 'http://127.0.0.1:8000/api/projects'
      axios.get(endpoint).then((response) => {
        this.projects.list = response.data.data;
        this.projects.pages = response.data.links;
      });
    },
  },
  // ricordarci del this per accedere ai metodi e a data

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <AppHeader :name="name" />
  <!-- invio tramite props l'array di progetti
   -->
   <!-- rispettivamente stiamo passando con i props projects, pages, name e ricevendo changePages come emits dal figlio -->

  <ProjectList :projects="projects.list" :pages="projects.pages" name="Project List" @changePages="fetchProjects"/>
</template>

<style lang="scss" scoped></style>



<!-- ! appuntino per la pagination -->

<!-- - creo l'array della paginazione
- tolgo il get e lascio il paginate nel controller api su laravel
- cambio la parte dell'oggetto dove cerchero' i dati che e (data)
-creo il button al posto di a e aggiungo bind emit e controllli vari
type="button" 
      class="page-link" 
      :class="{disabled: !page.url,
      active:page.active
    }" 
    @click="$emit('changePages',page.url)"
      v-html="page.label"

creo emits:['changePages']  e ricevo nel @changePages il parametro dell'url funzione che eseguira poi fetch

-importante la parte dell'endpoint dove inserisco la condizione per gli url -->