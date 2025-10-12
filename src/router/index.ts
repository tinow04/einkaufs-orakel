import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import ShoppingPage from '../views/ShoppingPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/rastatt', component: ShoppingPage },
];

const router = createRouter({
  history: createWebHistory('/einkaufs-orakel/'),
  routes,
});

export default router;
