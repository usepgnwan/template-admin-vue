import * as VueRouter from 'vue-router';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

const page = (path) =>
    import (`../views/${path}.vue`);
const routes = [{
        path: '/login',
        name: 'login',
        component: () =>
            import (`../components/layout/login/Loginlayout.vue`)
    },
    {
        path: '/',
        name: 'Dashboard',
        component: () =>  import (`../components/layout/dashboard/DashboardLayout.vue`),
        children: [{
                path: '/',
                name: 'home',
                component: () => page('HomeView')
            },
            {
                path: '/about',
                name: 'about',
                component: () => page('AboutView')
            },
            {
                path: '/blog',
                name: 'blog',
                component: () => page('Blog/BlogView'),
            },
            {
                path: '/blog/form/:id?',
                name: 'blog/form',
                component: () => page('Blog/BlogForm'),
            },
        ]
    }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
});

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
    next()
})

router.afterEach(() => {
    // Complete the animation of the route progress bar.
    NProgress.done()
});

export { router }