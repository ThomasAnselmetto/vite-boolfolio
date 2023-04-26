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
    axios.get('http://127.0.0.1:8000/api/projects/${this.$route.params.id}')
    .then((response)=>{
      this.project = response.data;
    });

  },

  components: {
    ProjectCard,
  },
};
</script>

<template>
  <ProjectCard v-if="project" :project="project"/>
</template>

<style lang="scss" scoped></style>