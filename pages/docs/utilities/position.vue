<template>
  <div>
    <nuxt-content :document="position"></nuxt-content>
  </div>
</template>
<script>
//import displays from "../../../content/displays.md";
export default {
  layout: "doc",
  async asyncData({ $content }) {
    const position = await $content("position").fetch();
    return { position };
  }
};
</script>
