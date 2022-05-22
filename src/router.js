/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
import Router from 'vue-router';
Vue.use( Router );

import Home from '@/routes/Home.vue'
import About from '@/routes/About.vue'
import Test from '@/routes/Test.vue'


export default new Router({
    routes: [
        { path:"/about",     name:"About", component: About },
        { path:"/", name:"Home", component: Home, props: { name: "DemoApp"} },
        { path:"/test",     name:"Testbed", component: Test },
    ]
});