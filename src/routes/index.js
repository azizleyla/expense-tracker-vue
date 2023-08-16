import  {createRouter,createWebHashHistory} from "vue-router"
import HomePage from '@/views/HomePage/Index.vue';
import AboutPage from '@/views/AboutPage/Index.vue';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
        path: '/about/:username',
        name: 'About',
        component: AboutPage,
      },
    // Other routes can be added here
  ];
  const router =  createRouter({
    history: createWebHashHistory(),
    routes
  })
  export default router;