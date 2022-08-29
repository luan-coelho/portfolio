import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'animate.css';
import 'flowbite';
import 'normalize.css';
import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faGithub, faLinkedin, faTelegram, faAddressCard);

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
