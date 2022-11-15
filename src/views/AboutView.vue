<template>
  <div
    class='dark:bg-root-color-litledark bg-alice-blue-litledark flex flex-col justify-center items-center w-full h-screen'>
    <h1 class='text-white mb-5 text-4xl'>Em construção</h1>
    <div>
      <a
        href='https://drive.google.com/file/d/18pAjoQRqOmrrNkOOkQds9Jn-Kk2ajYVj/view?usp=sharing'
        target='_blank'>
        <button
          type='button'
          class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Baixar CV
          <font-awesome-icon
            class='ml-2'
            icon='fa-solid fa-address-card'
            size='xl' />
        </button>
      </a>
    </div>
  </div>
</template>

<script lang='ts'>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'AboutView',
    components: {},
    data() {
      return {};
    }
  });
</script>

<style scoped></style>
