<template>
  <div class="row flex-wrap-reverse">
    <div class="w-12/12 w-md-8/12 w-lg-9/12 w-xl-4/5py-4 pr-4">
      <nuxt-content :document="document" />
    </div>
    <div
      v-if="document"
      class="w-12/12 w-md-4/12 w-lg-3/12 w-xl-1/5 position-relative display-block "
    >
      <div class="sticky" style="top: calc(4.5rem + 2px);">
        <right-bar :toc="document.toc"></right-bar>
      </div>
    </div>
  </div>
</template>
<script>
import Prism from "~/plugins/prism";
import RightBar from "../../../components/RightBar";
import colorlist from "../../../components/colorslist";
export default {
  layout: "doc",
  components: {
    colorlist,
    RightBar,
  },
  data: () => {
    return {};
  },
  mounted() {
    Prism.highlightAll();
  },
  async asyncData({ $content, params }) {
    const document = await $content("layouts", params.slug).fetch();

    return { document, slug: params.slug };
  },
};
</script>
