<template>
  <div>
    <nuxt-content :document="flexbox"></nuxt-content>
  </div>
</template>
<script>
//import displays from "../../../content/displays.md";
export default {
  layout: "doc",
  async asyncData({ $content }) {
    const flexbox = await $content("flexbox").fetch();
    return { flexbox };
  }
};
</script>
