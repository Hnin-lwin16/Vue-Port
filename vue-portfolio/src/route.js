import Home from './vue-portfolio/Home.vue'
import About from './vue-portfolio/About.vue'
import Service from './vue-portfolio/Services.vue'
import Portfolio from './vue-portfolio/Portfolio.vue'
import Contact from './vue-portfolio/Contact.vue'
export default [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/about',
        component: About,
        name: 'about'
    },
    {
        path: '/service',
        component: Service
    },
    {
        path: '/portfolio',
        component: Portfolio
    },
    {
        path: '/contact',
        component: Contact
    }
]