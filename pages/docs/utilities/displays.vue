<template>
  <div>
    <div v-html="displays"></div>
  </div>
</template>
<script>
import displays from "../../../content/displays.md";
export default {
  layout: "doc",
  computed: {
    displays() {
      return displays;
    }
  }
};
</script>
