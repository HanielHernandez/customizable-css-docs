<template lang="html">
  <div>
    <div class="row">
      <Sidebar />
      <div class="col w-12 p-4">
        <NuxtChild />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../../components/Sidebar";
export default {
  components: {
    Sidebar
  }
};
</script>
