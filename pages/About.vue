<template>
  <div>
    <div v-html="about"></div>
  </div>
</template>
<script>
import about from "../content/about.md";
export default {
  computed: {
    about() {
      return about;
    }
  }
};
</script>
