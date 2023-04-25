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
  <section class="container">
    <h1 class="my-5">{{ name }}</h1>
    <div v-if="projects.length" class="row g-4">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
    <h2 v-else class="text-muted">There are no projects</h2>

    <nav aria-label="Page navigation example ">
  <ul class="pagination mt-5">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

  </section>
</template>


<style lang="scss" scoped></style>
