export default {
    path: '/movie',
    component: ()=> import('@/views/Movie/movie'),
    children:[
        /* 二级路由 */
        {
            path: 'city',
            /* 按需引入 */
            component: () => import('@/components/City/City')
        },
        {
            path: 'commingSoon',
            component: () => import('@/components/CommingSoon/CommingSoon')
        },
        {
            path: 'search',
            component: () => import('@/components/Search/Search')
        },
        {
            path: 'nowPlaying',
            component: () => import('@/components/NowPlaying/NowPlaying')
        },
        {
            path : 'detail/1/:movieid',
            components : {
                default: () => import('@/components/NowPlaying/NowPlaying'),
                detail : () => import('@/views/Movie/detail')
            },
            props:{
                detail: true
            }
        },
        {
            path : 'detail/2/:movieid',
            components : {
                default: () => import('@/components/CommingSoon/CommingSoon'),
                detail : () => import('@/views/Movie/detail')
            },
            props:{
                detail: true
            }
        },
        {
            path: '/movie',
            redirect:'/movie/nowPlaying'
        }
    ]
}