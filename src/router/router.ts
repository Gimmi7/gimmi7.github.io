import { createRouter, createWebHashHistory } from "vue-router";
import AppLayout from "@/layout/AppLayout.vue";
import { App } from "vue";

const constantRoutes = [
  {
    path: '/index.html',
    redirect: '/',
  },
  {
    path: '/',
    name: "root",
    redirect: "/about",
    component: AppLayout,
    children: [
      {
        path: 'about',
        name: 'about',
        component: import('@/pages/aboutme.vue')
      },
      {
        path: 'posts',
        name: 'posts',
        component: import('@/pages/posts.vue')
      },
      {
        path: 'cv',
        name: 'cv',
        component: import('@/pages/cv.vue')
      }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory("/"),
  routes: constantRoutes
});

export default router;

export const setupRouter = (app: App<Element>) => {
  app.use(router);
};