<template lang="html">
    <div>
        <ul class="nav" v-if="links.length > 0">
            <li class="nav-item" v-for="link in links" :key="link.link">
                <a :href="link.link" class="nav-link">{{link.text}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'RigthNav',
    props:{
        links:Array
    }
}
</script>
<style lang="scss">
  
</style>