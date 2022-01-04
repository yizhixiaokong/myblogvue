import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'
import PostBlogView from '../views/PostBlog.vue'
import ListView from '../views/List.vue'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },

    {
        path: '/postblog',
        name: 'PostBlog',
        // route level code-splitting
        // this generates a separate chunk (postblog.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: PostBlogView
    },
    {
        path: '/list',
        name: 'List',
        // route level code-splitting
        // this generates a separate chunk (postblog.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: ListView
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (postblog.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: LoginView
    },
    {
        path: '/register',
        name: 'Register',
        // route level code-splitting
        // this generates a separate chunk (postblog.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: RegisterView
    },
]

const router = new VueRouter({
    routes
})

export default router