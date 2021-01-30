<template>
  <div class="row flex-wrap-reverse">
    <div class="w-12/12 w-md-8/12 w-lg-9/12 w-xl-4/5 py-4 pr-4">
    <nuxt-content :document="utility" />
      <template v-if="slug == 'colors'">
      <colorlist />
    </template>
    </div>
    <div v-if="utility" class="w-12/12 w-md-4/12 w-lg-3/12 w-xl-1/5 position-relative display-block  ">
        <div class="sticky " style=" top:4.5625rem;">
            <right-bar :toc="utility.toc"></right-bar>
        </div>
    </div>
  </div>
</template>
<script>
import Prism from '~/plugins/prism';
import RightBar from '../../../components/RightBar';
import colorlist from "../../../components/colorslist";
export default {
  layout: "doc",
  components: {
    colorlist,
    RightBar
  },
  data: () => {
    return {};
  },
  mounted(){
    Prism.highlightAll()
  },
  async asyncData({ $content, params }) {
    const utility = await $content("utilities", params.slug).fetch();

    return { utility, slug: params.slug };
  }
};
</script>
