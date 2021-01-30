<template lang="html">
    <div class="right-bar pl-0 pt-4 pt-md-0 pl-md-4 ">
        <p class="font-medium font-sm mb-0 pb-2 bb">
            On this page
        </p>
        <ul class="nav font-sm" v-if="toc && toc.length > 0" >
            <li class="nav-item" v-for="link in toc" :key="link.id" >
                <NuxtLink class="pt-2 hover:text-blue-600" :class="{'pl-4':link.depth == 3}" :to="'#'+link.id">{{link.text  }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "Rightbar",
  props: ["toc"],
};
</script>
<style lang="scss">
.right-bar{
    a,a:visited{
        color:rgba( #000000, 0.63)
    }
}
</style>