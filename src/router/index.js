import DailyTrades from "@/views/DailyTrades.vue";
import ShorterTrades from "@/views/ShorterTrades.vue";
import {createRouter, createWebHashHistory} from "vue-router";


const routes = [
    { path: '/', component: ShorterTrades },
    { path: '/test', component: DailyTrades },
]

const router = createRouter({
    linkActiveClass: 'current',
    history: createWebHashHistory(),
    routes,
});

export default router;