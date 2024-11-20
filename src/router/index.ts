import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import Nprogress from 'nprogress';
import { nextTick } from "vue";

// 配置路由
const routes: Array<RouteRecordRaw> = [{
  path: '/',
  name: 'home',
  component: () => import('@/views/home.vue'),
  meta: {},
  children: [],
}];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  Nprogress.start();
  next()
});

router.afterEach(() => {
  Nprogress.done();
});

export default router;

