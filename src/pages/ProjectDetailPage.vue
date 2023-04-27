<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  name:'ProjectDetailPage',

  data() {
    return {
      project:null,
    }
  },
  // this(accediamo allo script di vue) + params:id)
  created(){
    axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
    .then((response)=>{
      this.project = response.data;
    });

  },

  components: {
    ProjectCard,
  },
};
</script>

<!-- ? se c'e' il progetto stampa la projectcard il punto (?) per il title funziona come per php-->

<template>
  <h1 class="my-4">Project Detail {{ project?.name }}</h1>
  <ProjectCard v-if="project" :project="project" :isDetail="true"/>
</template>

<style lang="scss" scoped></style>