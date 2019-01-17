var router = [
    { path: '/foo', component: () => import(`../modules/foot.vue`) },
    { path: '/bar', component: () => import(`../modules/bar.vue`) }
]
module.exports=router;