import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "@/views/MainView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainView
    },
    {
        path: ''
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router