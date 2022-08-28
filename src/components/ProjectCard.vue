<template>
  <div
    class="animate__animated animate__backInUp max-w-sm m-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-root-color-dark dark:border-gray-700"
  >
    <div class="p-5">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ project.name }}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ project.description }}
      </p>
      <ProjectCardLanguage :language="project.language.toLowerCase()" />
      <a
        :href="'' + project.html_url + ''"
        target="_blank"
        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Ver mais
      </a>
    </div>
  </div>
</template>

<script lang="ts">
  import ProjectCardLanguage from '@/components/ProjectCardLanguage.vue';
  import Project from '@/model/Project';
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    name: 'ProjectCard',
    components: {
      ProjectCardLanguage,
    },
    props: {
      project: {
        type: Object as PropType<Project>,
        required: true,
      },
    },
    data() {
      return {};
    },
  });
</script>

<style scoped></style>
