<template lang="html">
    <div class="px-4">
        <p class="font-medium font-xl mb-0 pb-2   b bt-0 br-0 bl-0 br-0">
            In this page
        </p>
        <ul class="nav" v-if="toc && toc.length > 0" >
            <li class="nav-item" v-for="link in toc" :key="link.id" >
                <NuxtLink class="pt-2" :class="{'pl-4':link.depth == 3}" :to="'#'+link.id">{{link.text  }}</NuxtLink>
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
.nav-item{
    a{
        color: rgb(0,0,0,0.53);
        &:hover{
         color: rgb(0,0,0,0.83);
        }
    }
}
</style>