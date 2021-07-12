import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostBlog from '../views/PostBlog.vue'
import List from '../views/List.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
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
        component: PostBlog
    },
    {
        path: '/list',
        name: 'List',
        // route level code-splitting
        // this generates a separate chunk (postblog.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: List
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (postblog.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        // route level code-splitting
        // this generates a separate chunk (postblog.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Register
    },
]

const router = new VueRouter({
    routes
})

export default router