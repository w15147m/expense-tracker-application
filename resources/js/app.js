import './bootstrap';

import Alpine from 'alpinejs';
import { createApp } from 'vue';

import App from './App.vue';

window.Alpine = Alpine;
createApp(App).mount('#app')

Alpine.start();

