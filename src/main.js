import { createApp } from 'vue';

import router from '@/router/index.js';
//import store from './store/index.js';
import App from './App.vue';

import "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
import messagePlugin from '@/utils/message.plugin';


import Loader from '@/components/Loader'


const app = createApp(App)

app.use(router);
//app.use(store);
app.use(messagePlugin);  
app.component('Loader', Loader);
app.mount('#app');
