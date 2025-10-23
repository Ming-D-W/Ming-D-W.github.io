import { UserPlugins } from 'vuepress/config'
import dayjs from 'dayjs'

// 插件配置
export default <UserPlugins> [
  // 自定义插件，即本地插件
  [
    {
      name: 'custom-plugins',
      globalUIComponents: ["PageInfo", "BlockToggle", "Fantasy"]
      // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    }
  ],

  'vuepress-plugin-baidu-autopush', // 百度自动推送

  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  // [
  //   'thirdparty-search',
  //   {
  //     thirdparty: [
  //       // 可选，默认 []
  //       {
  //         title: '在MDN中搜索',
  //         frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
  //         behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
  //       },
  //       {
  //         title: '在Runoob中搜索',
  //         frontUrl: 'https://www.runoob.com/?s=',
  //       },
  //       {
  //         title: '在Vue API中搜索',
  //         frontUrl: 'https://cn.vuejs.org/v2/api/#',
  //       },
  //       {
  //         title: '在Bing中搜索',
  //         frontUrl: 'https://cn.bing.com/search?q=',
  //       },
  //       {
  //         title: '通过百度搜索本站的',
  //         frontUrl: 'https://www.baidu.com/s?wd=',
  //       },
  //     ],
  //   },
  // ],
  // 官网：https://github.com/leo-buneev/vuepress-plugin-fulltext-search
  ['fulltext-search'],

  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  // [
  //   'demo-block',
  //   {
  //     // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
  //     settings: {
  //       // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
  //       // cssLib: ['http://xxx'], // 在线示例中的css依赖
  //       // vue: 'https://unpkg.zhimg.com/vue/dist/vue.min.js', // 在线示例中的vue依赖
  //       jsfiddle: false, // 是否显示 jsfiddle 链接
  //       codepen: true, // 是否显示 codepen 链接
  //       horizontal: false, // 是否展示为横向样式
  //     },
  //   },
  // ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除 class 是 no-zoom 的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss');
      },
    },
  ],
  // 顶部阅读进度插件
  [
    'reading-progress'
  ],
  // vuepress-plugin-tabs。官网：https://github.com/pskordilakis/vuepress-plugin-tabs
  ['tabs'],
]


