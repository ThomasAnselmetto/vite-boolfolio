<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  .
  <div class="row justify-content-center align-items-center g-2">
    <div class="col">
      <div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h2 class="card-title fw-bold">{{ project.name }}</h2>
          <p class="card-text">
            {{ project.description }}
          </p>
        </div>
        <div class="card-body">
          <h3>{{}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
