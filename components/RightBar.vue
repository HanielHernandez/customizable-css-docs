<template lang="html">
    <div>
        <ul class="right-nav nav">
            <li class="nav-item" v-for="link in links" :key="link.name">
                <a class="nav">
            <li>
        <ul>
    </div>
</template>
<script>
export default {
    name:'RigthNav',
    props:['links']
}
</script>
<style lang="scss">
    .right-nav{
        padding: 1rem;
        background-color: rgba(#000, 0.12);
    }
</style>