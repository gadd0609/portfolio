import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_ROUTES),
    routes:[
        {
            path:'/',
            name:'portfolio.home.index',
            component: () => import('pages/home/index.vue'),
        },
        {
            path:'/about',
            name: "portfolio.about.index",
            component: () => import('pages/about/index.vue')
        },
        ,
        {
            path:'/projects',
            name: "portfolio.projects.index",
            component: () => import('pages/projects/index.vue')
        }
    ]
})

export default router