import Vue from 'vue';
import Router from 'vue-router';

import Home2 from '../views/Home';
import Login from '../views/Login';
import NotFound from '../views/NotFound';

Vue.use(Router);

const routes = [
    { name: 'login', path: '/', component: Login },
    { name: 'home', path: '/home', component: Home2 },
    { name: 'notFound', path: '*', component: NotFound },
];

const router = new Router({routes}); 

export default router;
