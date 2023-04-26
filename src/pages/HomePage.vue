<!-- ? tutto cio' che e' relativo alle chiamate ai project in axios voglio spostarlo in home page perche' la chiamata dei progetti non e' una cosa che succede in tutto il sito ma su una pagina specifica importiamo anche ProjectList-->

<script>

import ProjectList from "../components/ProjectList.vue";
// import MyComponent from "./components/MyComponent.vue";

export default {
  components: {
    ProjectList,
  },

  
};
</script>

<template>
  <!-- invio tramite props l'array di progetti
   -->
   <!-- rispettivamente stiamo passando con i props projects, pages, name e ricevendo changePages come emits dal figlio -->
  <ProjectList 
  
  name="Project List" 
  @changePages="fetchProjects"/>
</template>

<style lang="scss" scoped></style>
