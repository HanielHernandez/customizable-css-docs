<template>
  <div>
    <nuxt-content :document="utility" />
    <template v-if="slug == 'colors'">
      <colorlist />
    </template>
  </div>
</template>
<script>
import colorlist from "../../../components/colorslist";
export default {
  layout: "doc",
  components: {
    colorlist
  },
  data: () => {
    return {};
  },
  async asyncData({ $content, params }) {
    const utility = await $content("utilities", params.slug).fetch();

    return { utility, slug: params.slug };
  }
};
</script>
