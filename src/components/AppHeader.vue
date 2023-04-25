<script>
// import MyComponent from "./components/MyComponent.vue";

// non vogliamo i link perche le app di vue sono app single page che non si devono ricaricare

export default {
  name: "AppHeader",

  props: {
    name: String,
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">{{ name }}</span>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
