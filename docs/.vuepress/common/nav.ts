// nav
import basics from "../nav/basicsNav";
import toolNav from '../nav/toolNav'
import indexNav from '../nav/indexNav'
import moreNav from '../nav/moreNav'
import JSNav from "../nav/JSNav";
import webapiNav from "../nav/webapiNav";

export default [
    {
        text: '首页', link: '/'
    },
    basics,   // 前端基础导航
    JSNav,   // JS导航
    webapiNav,   // WebAPI导航
    toolNav,  // 工具导航
    moreNav,   // 更多导航
    indexNav,   //索引导航
    {
        text: '导航站', link: '/navigation/'
    },
    {
        text: '留言区', link: '/message-area/'
    },
]
