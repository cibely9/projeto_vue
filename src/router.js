import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  { path: '/video', component: () => import('./components/VideoUnico.vue')},
  { path: '/tabela', component:  () => import('./components/TabelaDiversos.vue')},
  { path: '/imagens', component: () => import('./components/ImagensDiversas.vue')},
  // Outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
