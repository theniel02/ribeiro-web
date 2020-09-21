import Vue from 'vue';
import Router from 'vue-router';
import { store } from '@/vuex'


import Order from '../views/Order';
import Login from '../views/Login';
import Message from '../views/Message';
import Report from '../views/Report';
import MyData from '../views/MyData';
import NotFound from '../views/NotFound';

Vue.use(Router);


const routes = [
    { name: 'login', path: '/', component: Login },
    { name: 'report', path: '/report', component: Report },
    { name: 'order', path: '/order', component: Order },
    { name: 'message', path: '/message', component: Message },
    { name: 'my-data', path: '/my-data', component: MyData },
    { name: 'notFound', path: '*', component: NotFound },
];

const router = new Router({routes}); 

router.beforeEach((to, from, next) => {
    console.log(store.state.isAuthenticated);
    if (to.name !== 'login' && !store.state.isAuthenticated) next({ name: 'login' })
    else next();
})

export default router;
