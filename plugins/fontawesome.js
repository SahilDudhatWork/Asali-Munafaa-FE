// plugins/fontawesome.js

import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add all icons to the library so you can use them in your components
library.add(fas, far, fab);

// Register the component globally
Vue.component("font-awesome-icon", FontAwesomeIcon);
