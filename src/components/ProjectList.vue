<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "Project_List",

  props: {
    projects: Array,
    name: String,
    pages: Array,
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
    <!-- non serve lasciare previous e next perche' le ha in se gia' la chiamata axios -->
    <nav aria-label="Page navigation example ">
  <ul class="pagination mt-5">
   

    <li v-for="page in pages" class="page-item">
      <button 
      type="button" 
      class="page-link" 
      :class="{disabled: !page.url,
      active:page.active
    }" 
    @click="$emit('changePages',page.url)"
      v-html="page.label"></button>

    </li>
   
    
  </ul>
</nav>

  </section>
</template>


<style lang="scss" scoped></style>
