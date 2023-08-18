import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import 'primeicons/primeicons.css';


createApp(App)
  .use(router)

  // Use the router in the app
  .mount('#app');