<template>
  <div>
    <footer
      class="p-3 flex justify-center items-center bg-white shadow md:flex dark:bg-root-color-dark"
    >
      <span class="text-sm text-center text-gray-500 dark:text-gray-400">
        <a
          class="hover:text-blue-600"
          href="https://github.com/luan-coelho"
          target="_blank"
        >
          Luan Coêlho
          <font-awesome-icon icon="fa-brands fa-github" size="xl" />
        </a>
      </span>
    </footer>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "TheFooter",
    data() {
      return {};
    },
  });
</script>

<style scoped></style>
