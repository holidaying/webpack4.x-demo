
module.exports=[
    { path: '/foo', component: () => import('./foo.vue') },
    { path: '/bar', component: () => import('./bar.vue') }
]