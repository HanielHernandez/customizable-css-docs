<template>
  <div>
    <nuxt-content :document="displays"></nuxt-content>
  </div>
</template>
<script>
//import displays from "../../../content/displays.md";
export default {
  layout: "doc",
  async asyncData({ $content }) {
    const displays = await $content("displays").fetch();
    return { displays };
  },
  computed: {
    test() {
      return "displays";
    }
  }
};
</script>
