import { createRouter, createWebHistory } from 'vue-router';
import ShoppingPage from '../views/ShoppingPage.vue';

const routes = [{ path: '/', component: ShoppingPage }];

const router = createRouter({
  history: createWebHistory('/einkaufs-orakel/'),
  routes,
});

export default router;
