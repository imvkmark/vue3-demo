import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import { get } from 'lodash-es';

const routes: Array<RouteRecordRaw> = [
    { path: '/scoped', component: () => import('@/views/Scoped.vue'), meta: { title: 'Scoped' } },
    { path: '/route', component: () => import('@/views/Route.vue'), meta: { title: 'Route' } },
    { path: '/route-map/:p', component: () => import('@/views/RouteMap.vue'), name: 'route-map', meta: { title: 'RouteMap' } },
    { path: '/', component: () => import('@/views/Home.vue'), meta: { title: '链接地址' } },
]

const router: Router = createRouter({
    history: createWebHistory('demo/vue3'),
    routes
})

router.beforeEach((to, from, next) => {
    let title = get(to, 'meta.title');
    if (title) {
        document.title = title;
    }
    next();
});
export default router
