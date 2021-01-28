<template>
    <div class="row flex-wrap-reverse">
    <div class="w-12/12 w-md-8/12 w-lg-9/12 w-xl-4/5py-4 pr-4">
      <nuxt-content :document="document" />
    </div>
    <div
      v-if="document"
      class="w-12/12 w-md-4/12 w-lg-3/12 w-xl-1/5 position-relative display-block br b by-0 br-0"
    >
      <div class="sticky" style="top: 4.5625rem">
        <right-bar :toc="document.toc"></right-bar>
      </div>
    </div>
  </div>
</template>
<script>
//import displays from "../../../content/displays.md";
export default {
  layout: "doc",
  async asyncData({ $content }) {
    const document = await $content("docs").fetch();
    return { document };
  }
};
</script>
