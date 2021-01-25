<template>
  <div>
    <nuxt-content :document="about"></nuxt-content>
  </div>
</template>
<script>
//import displays from "../../../content/displays.md";
export default {
  layout: "doc",
  async asyncData({ $content }) {
    const about = await $content("about").fetch();
    return { about };
  }
};
</script>
