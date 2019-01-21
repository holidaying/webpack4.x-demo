var router = [
    { name:"foo",path: '/foo', component: () => import(`../modules/foot.vue`) },
    { name:"bar",path: '/bar', component: () => import(`../modules/bar.vue`) }
]
module.exports=router;