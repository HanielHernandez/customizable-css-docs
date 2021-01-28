<template lang="html">
    <div class="px-4">
        <p class="font-medium px-4:">
            In this page
        </p>
        <ul class="nav" v-if="toc && toc.length > 0" >
            <li v-for="link in toc" :key="link.id" >
                <NuxtLink :to="'#'+link.id">{{link.text  }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "RigthNav",
  props: ["toc"],
};
</script>
<style lang="scss">
</style>