<template lang="html">
  <div>
    <Header />
    <div class="container container-xxl pt-14">
      <div class="row">
        <Sidebar />
        <div class="col w-12 p-4">
          <NuxtChild />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar";

export default {
  components: {
    Sidebar
  }
};
</script>
