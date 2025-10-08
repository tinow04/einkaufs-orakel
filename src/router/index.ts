import { createRouter, createWebHistory } from 'vue-router';
import ShoppingPage from '../views/ShoppingPage.vue';
import LoginPage from '../views/LoginPage.vue';

const routes = [
    { path: '/', component: ShoppingPage },
    { path: '/login', component: LoginPage }
];

const router = createRouter({
  history: createWebHistory('/einkaufs-orakel/'),
  routes,
});

export default router;
