<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "Project_List",

  props: {
    projects: Array,
    name: String,
  },

  components: {
    ProjectCard,
  },
};
</script>

<template>
  <div class="container">
    <h1>{{ name }}</h1>
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<style lang="scss" scoped></style>
