import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// 1. 配置路由
const routes: Array<RouteRecordRaw> = [
    {
        path: "/", // 默认路由 home页面
        name: "Login",
        component: () => import("../views/Login.vue"),
    },
    {
        path: "/home", // 默认路由 home页面
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
];
// 2.返回一个 router 实列，为函数，配置 history 模式
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 3.导出路由   去 main.ts 注册 router.ts
export default router
