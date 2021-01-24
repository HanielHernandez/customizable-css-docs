<template lang="html">
  <div>
    <Header />
    <div class="row">
      <Sidebar />
      <div class="col w-12 p-4">
        <NuxtChild />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default {
  components: {
    Sidebar
  }
};
</script>
