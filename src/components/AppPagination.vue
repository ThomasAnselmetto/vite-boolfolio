<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  name:'AppPagination',
  props:{pages:Array},
  
};
</script>

<template>
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
</template>

<style lang="scss" scoped></style>