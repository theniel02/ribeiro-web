import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';
import Order from '../views/Order';
import Login from '../views/Login';
import Message from '../views/Message';
import Report from '../views/Report';
import NotFound from '../views/NotFound';

Vue.use(Router);

const routes = [
    { name: 'login', path: '/', component: Login },
    { name: 'home', path: '/home', component: Home },
    { name: 'report', path: '/report', component: Report },
    { name: 'order', path: '/order', component: Order },
    { name: 'message', path: '/message', component: Message },
    { name: 'notFound', path: '*', component: NotFound },
];

const router = new Router({routes}); 

export default router;
