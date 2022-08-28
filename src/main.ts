import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "normalize.css";
import "./index.css";
import "flowbite";
import "animate.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faLinkedin, faTelegram, faAddressCard);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
