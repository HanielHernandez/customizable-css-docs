<template>
  <div>
    <nuxt-content :document="docs"></nuxt-content>
  </div>
</template>
<script>
//import displays from "../../../content/displays.md";
export default {
  layout: "doc",
  async asyncData({ $content }) {
    const docs = await $content("docs").fetch();
    return { docs };
  }
};
</script>
