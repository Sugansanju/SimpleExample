import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Vmodel from '@/components/Vmodel/Vmodel.vue'
import Hook from '@/components/Hook.vue'
import Example from '@/components/Example.vue'
import Login from '@/components/Login.vue'
import Content from '@/components/Content.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/vmodel',
            name: 'Vmodel',
            component: Vmodel
        },
        {
            path: '/hook',
            name: 'Hook',
            component: Hook
        },
        {
            path: '/example',
            name: 'Example',
            component: Example
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/content',
            name: 'Content',
            Component: Content
        }
    ]
})