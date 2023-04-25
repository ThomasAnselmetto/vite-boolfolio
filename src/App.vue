<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
  data() {
    return {
      name: "Portfolio Projects",
      projects: [],
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

  methods: {
    fetchProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        this.projects = response.data;
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
  <ProjectList :projects="projects" name="Project List" />
</template>

<style lang="scss" scoped></style>
