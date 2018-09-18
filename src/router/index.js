import Vue from 'vue'
import Router from 'vue-router'
import List from '@/views/list'
import Champion from '@/views/champion'
import Index from '@/views/index'
import Statistic from '@/views/statistic'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index,
            meta: { title: '综合数据' }

        },
        {
            path: '/list',
            name: 'List',
            component: List,
            meta: { title: '英雄数据' }
        }, {
            path: '/champion/:name/:position',
            name: 'Champion',
            component: Champion,
            meta: { title: '英雄详情' }
        }, {
            path: '/data/:position/:type',
            name: 'Statistic',
            component: Statistic,
            meta: { title: '统计数据' }
        }, {
            path: '/*',
            redirect: '/'
        }
    ]
})