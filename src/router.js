import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import AllGalleries from './components/AllGalleries.vue';
import SingleGallery from './components/SingleGallery.vue';
import AuthorGallery from './components/AuthorGallery.vue';
import AuthAuthorGallery from './components/AuthAuthorGallery.vue';

Vue.use(VueRouter);

const routes = [
    
    {
        path: '/',
        component: AllGalleries,
        name: 'home',
        meta: {
            auth:false
        }
    },
    {   path: '/login',
        component: Login,
        name: 'login',
        meta: {
            guest:true
        }   
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: {
            guest:true
        }
    },
    {
        path: '/galleries/:id',
        component: SingleGallery,
        name: 'single-gallery',
        meta: {
            auth:false
        }
    },
    {
        path: '/author/:id',
        component: AuthorGallery,
        name: 'author-gallery',
        meta: {
            auth:false
        }
    },
    {
        path: '/authors-galeries/:id',
        component: AuthAuthorGallery,
        name: 'auth-author-gallery',
        meta: {
            auth:true
        }
    }
];

const router = new VueRouter({
    routes,
    mode:"history"
});

router.beforeEach(( to, from, next ) => {
    const isAuthenticated = !!localStorage.getItem('token');

    if(isAuthenticated && to.meta.guest){
        return next({ name: 'home'});
    }
    if(!isAuthenticated && to.meta.auth){
        return next({ name: 'login'});
    }
    return next();
})
export default router;