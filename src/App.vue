<template>
  <NavBar />
  <router-view></router-view>
  <TheFooter />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import NavBar from "@/components/NavBar.vue";
  import TheFooter from "@/components/TheFooter.vue";

  export default defineComponent({
    name: "App",
    components: {
      NavBar,
      TheFooter,
    },
    data() {
      return {};
    },
  });
</script>

<style scoped></style>
