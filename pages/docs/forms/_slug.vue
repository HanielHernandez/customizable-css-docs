<template>
  <div class="row flex-wrap-reverse">
    <div class="w-12/12 w-md-8/12 py-4 pr-4">
      <nuxt-content :document="document" />
    </div>
    <div
      v-if="document"
      class="w-12/12 w-md-4/12 position-relative display-block br b by-0 br-0"
    >
      <div class="sticky" style="top: 4.5625rem">
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
    const document = await $content("forms", params.slug).fetch();

    return { document, slug: params.slug };
  },
};
</script>
