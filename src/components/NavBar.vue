<template>
  <nav
    class="px-2 py-2.5 uppercase bg-gray-50s dark:bg-root-color-dark w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div class="sx:inline container flex justify-between items-center">
      <h1
        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white sx:hidden"
      >
        Luan Coêlho de Souza
      </h1>

      <div class="flex order-2">
        <a
          href="https://drive.google.com/file/d/18pAjoQRqOmrrNkOOkQds9Jn-Kk2ajYVj/view?usp=sharing"
          target="_blank"
        >
          <button
            type="button"
            class="hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Baixar CV
            <font-awesome-icon
              class="ml-2"
              icon="fa-solid fa-address-card"
              size="xl"
            />
          </button>
        </a>
      </div>
      <div
        class="justify-between items-center w-full flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-row items-center justify-center p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-root-color-dark dark:border-gray-700"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 pr-4 pl-3 rounded md:bg-transparen md:p-0 md:hover:text-blue-700 dark:text-white"
              aria-current="page"
              >Sobre mim</router-link
            >
          </li>
          <li>
            <router-link
              to="/projects"
              class="block py-2 pr-4 pl-3 rounded md:bg-transparen md:p-0 md:hover:text-blue-700 dark:text-white"
              >Projetos</router-link
            >
          </li>
          <li>
            <router-link
              to="/contact"
              class="block py-2 pr-4 pl-3 rounded md:bg-transparen md:p-0 md:hover:text-blue-700 dark:text-white"
              >Contato</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    data() {
      return {};
    },
  });
</script>
