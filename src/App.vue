<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      title: "Hello ",
      projects: [],
    };
  },

  // la sintassi del component cosi' e' condensata quella completa sarebbe cosi'
  // components:{AppHeader:AppHeader},
  // ossia {nome che il componente che avra' nel template:parte che punta alla import}
  // chiave e variabile con stesso nome si possono condensare

  components: {
    AppHeader,
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
  <AppHeader />

  <h1>{{ title }}</h1>
  <ul>
    <li v-for="project in projects">
      {{ project.name }}
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
