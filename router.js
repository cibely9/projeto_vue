import { createRouter, createWebHistory } from 'vue-router';
import TabelaDiversos from './components/TabelaDiversos.vue';
import ImagensDiversas from './components/ImagensDiversas.vue';
import VideoUnico from './components/VideoUnico.vue';

const routes = [
  { path: '/video', component: VideoUnico },
  { path: '/tabela', component: TabelaDiversos },
  { path: '/imagens', component: ImagensDiversas },
  // Outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
