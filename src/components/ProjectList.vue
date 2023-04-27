<!-- ! mi creo il componente in modo tale che gestisca liste e paginazione in modo tale che sia riutilizzabile e che si debbano cambiare solo le specifiche es chiamata axios mi bastera' includere projectlist in un altro componente-->

<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";
import AppPagination from "./AppPagination.vue";

//  diamo a prjectlist la gestione di chiamata axios e paginazione

export default {
  data() {
    return {
      title: "Hello world",
      projects: {
        list:[],
        pages:[],
      },
    }
  },

  name: "Projects_List",

  props: {
    title:String,
  },

  components: {
    ProjectCard,AppPagination
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
  <section>
    <h1 class="my-5">{{ name }}</h1>
    <div v-if="projects.list.length" class="row g-4">

      <ProjectCard
        v-for="project in projects.list"
        :key="project.id"
        :project="project"
        :isDetail="false"
      />
    </div>
    <h2 v-else class="text-muted">There are no projects</h2>
    <!-- non serve lasciare previous e next perche' le ha in se gia' la chiamata axios -->
    <!-- todo:stampare il componente della paginazione -->
    <AppPagination :pages="projects.pages" @changePages="fetchProjects"/>
  </section>
</template>


<style lang="scss" scoped></style>





