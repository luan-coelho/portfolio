<template>
  <div class='bg-gray-800 dark:bg-gray-300'>
    <h2
      class='lg:text-4xl md:text-4xl sm:text-3xl sx:text-xl text-center font-bold text-white dark:text-black p-7'>
      Todos meus projetos hospedados no Github
    </h2>

    <div
      class='grid items-center justify-items-center content-center grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sx:grid-cols-1'>
      <ProjectCard
        v-for='(project, index) in FilterValidProjects'
        :key='index'
        :project='project' />
    </div>
  </div>
</template>

<script lang='ts'>
  import ProjectCard from '@/components/ProjectCard.vue';
  import Project from '@/model/Project';
  import axios from 'axios';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      ProjectCard
    },
    data() {
      return {
        projects: [] as Project[]
      };
    },
    methods: {
      getAllProjects(): Promise<void> {
        return axios
          .get('https://api.github.com/users/luan-coelho/repos')
          .then((response) => {
            this.projects = response.data;
            console.log(response.data);
          })
          .catch((error) => {
            console.warn(error);
          });
      }
    },
    computed: {
      FilterValidProjects(): Project[] {
        return this.projects.filter((project) => project.owner.login != project.name);
      }
    },
    beforeMount() {
      this.getAllProjects();
    }
  });
</script>

<style scoped></style>
