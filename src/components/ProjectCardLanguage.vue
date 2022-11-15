<template>
  <div>
    <img class='w-11 mb-4' :src='logo' :alt='language' />
  </div>
</template>

<script lang='ts'>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ProjectLanguage',
    props: {
      language: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        logo: require('../assets/' + this.language.toLowerCase() + '.png')
      };
    },
    methods: {}
  });
</script>

<style scoped></style>
