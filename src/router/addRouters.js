var router = [
    { name:"top",path: '/top', component: () => import(`../modules/top.vue`) },
    { name:"bottom",path: '/bottom', component: () => import(`../modules/bottom.vue`) }
]
module.exports=router;