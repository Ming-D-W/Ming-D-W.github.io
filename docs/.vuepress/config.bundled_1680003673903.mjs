// docs/.vuepress/config.ts
import { defineConfig4CustomTheme } from "vuepress/config";

// docs/.vuepress/config/plugins.ts
import dayjs from "dayjs";
var plugins_default = [
  [
    {
      name: "custom-plugins",
      globalUIComponents: ["PageInfo", "BlockToggle", "GlobalTip", "Fantasy"]
    }
  ],
  "vuepress-plugin-baidu-autopush",
  ["fulltext-search"],
  [
    "one-click-copy",
    {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
      copyMessage: "\u590D\u5236\u6210\u529F",
      duration: 1e3,
      showInMobile: false
    }
  ],
  [
    "vuepress-plugin-zooming",
    {
      selector: ".theme-vdoing-content img:not(.no-zoom)",
      options: {
        bgColor: "rgba(0,0,0,0.6)"
      }
    }
  ],
  [
    "vuepress-plugin-baidu-tongji",
    {
      hm: "267c5680c2ffb468ca29c45ffe6801da"
    }
  ],
  [
    "vuepress-plugin-comment",
    {
      choosen: "gitalk",
      options: {
        clientID: "e88197fb6385926c9d33",
        clientSecret: "dbb93f54391ab68b4aede08d3b9b373d24014e62",
        repo: 'blog-gitalk-comment', // GitHub 仓库
        owner: 'Ming-D-W', // GitHub仓库所有者
        admin: ['Ming-D-W'], // 对仓库有写权限的人
        pagerDirection: "last",
        id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>",
        title: "\u300C\u8BC4\u8BBA\u300D<%- frontmatter.title %>",
        labels: ["Gitalk", "Comment"],
        body: "\u9875\u9762\uFF1A<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>"
      }
    }
  ],
  [
    "@vuepress/last-updated",
    {
      transformer: (timestamp, lang) => {
        return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
      }
    }
  ],
  [
    "reading-progress"
  ],
  [
    "dynamic-title",
    {
      showIcon: "/favicon.ico",
      showText: "\u30FE(\u2267\u25BD\u2266*)o\u6B22\u8FCE\u56DE\u6765\uFF01",
      hideIcon: "/failure.ico",
      hideText: "\u0CA5_\u0CA5\u4E0D\u8981\u8D70\u5440\uFF01",
      recoverTime: 2e3
    }
  ],
  ["tabs"]
];

// docs/.vuepress/common/baidutj.ts
var baidutj = `var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?267c5680c2ffb468ca29c45ffe6801da"; 
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
          })();
          `;
var baidutj_default = baidutj;

// docs/.vuepress/config/head.ts
var head_default = [
  ["link", { rel: "shortcut icon", href: "/img/favicon.ico" }],
  ["link", { rel: "stylesheet", href: "//at.alicdn.com/t/font_3114978_qe0b39no76.css" }],
  ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],
  ["noscript", {}, '<meta http-equiv="refresh" content="0; url=https://www.youngkbt.cn/noscript/"><style>.theme-vdoing-content { display:none }'],
  [
    "meta",
    {
      name: "keywords",
      content: "Young Kbt\u4E2A\u4EBA\u535A\u5BA2, VuePress\u642D\u5EFA, \u5B66\u4E60Java\u3001Web\u3001\u6846\u67B6\u3001\u5FAE\u670D\u52A1\u3001\u5DE5\u5177\u3001\u524D\u7AEF\u7B49\u76F8\u5173\u77E5\u8BC6, \u8BB0\u5F55\u751F\u6D3B\u548C\u6280\u672F\u8DEF\u7A0B\u3002"
    }
  ],
  ["meta", { name: "theme-color", content: "#11a8cd" }],
  ["script", { src: "https://cdn.staticfile.org/twikoo/1.6.7/twikoo.all.min.js" }],
  ["script", {}, baidutj_default]
];

// docs/.vuepress/nav/developer.ts
var developer_default = {
  text: "\u5F00\u53D1",
  link: "/dev-guide/",
  items: [
    { text: "\u8BBE\u8BA1\u6A21\u5F0F", link: "/design-pattern/" },
    { text: "\u7B97\u6CD5", link: "/algorithm/" }
  ]
};

// docs/.vuepress/nav/basicsNav.ts
var basicsNav_default = {
  text: "\u524D\u7AEF\u57FA\u7840",
  link: "/basics/",
  items: [
    {
      text: "Html",
      items: []
    },
    {
      text: "Css",
      items: []
    },
    {
      text: "Js",
      items: []
    }
  ]
};

// docs/.vuepress/nav/toolNav.ts
var toolNav_default = {
  text: "\u5DE5\u5177",
  link: "/tool/",
  items: [
    {
      text: "\u7BA1\u7406",
      items: [
        { text: "Maven", link: "/maven/" },
        { text: "Git", link: "/git/" }
      ]
    },
    {
      text: "\u90E8\u7F72",
      items: [
        { text: "Linux", link: "/linux/" },
        { text: "Docker", link: "/docker/" },
        { text: "Jenkins", link: "/jenkins/" }
      ]
    }
  ]
};

// docs/.vuepress/nav/frontEnd.ts
var frontEnd_default = {
  text: "\u524D\u7AEF",
  link: "/front/",
  items: [
    {
      text: "\u8FDB\u9636",
      items: [
        { text: "TypeScript", link: "/typescript/" }
      ]
    },
    {
      text: "\u6846\u67B6",
      items: [
        { text: "React", link: "/react/" },
        { text: "Vue2", link: "/vue2/" },
        { text: "Vue3", link: "/vue3/" }
      ]
    }
  ]
};

// docs/.vuepress/nav/indexNav.ts
var indexNav_default = {
  text: "\u7D22\u5F15",
  link: "/archives/",
  items: [
    {
      text: "\u672C\u7AD9",
      items: [
        { text: "\u5206\u7C7B", link: "/categories/" },
        { text: "\u6807\u7B7E", link: "/tags/" },
        { text: "\u5F52\u6863", link: "/archives/" }
      ]
    },
    {
      text: "\u6211\u7684",
      items: [
        { text: "\u6536\u85CF", link: "/whell/web/" },
        { text: "\u5173\u4E8E", link: "/about/website/introduce/" },
        { text: "Vue2-Admin", link: "https://vue2-admin.youngkbt.cn/" },
        { text: "Vue3-Admin\uFF08\u5B8C\u5584\uFF09", link: "https://vue3-admin.youngkbt.cn/" }
      ]
    }
  ]
};

// docs/.vuepress/nav/moreNav.ts
var moreNav_default = {
  text: "\u66F4\u591A",
  items: [
    { text: "\u8F6E\u5B50\u5DE5\u5177", link: "/whells-use/" },
    { text: "\u9879\u76EE\u5DE5\u7A0B", link: "/projects/" },
    { text: "\u53CB\u60C5\u94FE\u63A5", link: "/friends/" }
  ]
};

// docs/.vuepress/nav/JSNav.ts
var JSNav_default = {
  text: "JS",
  link: "/tool/",
  items: [
    {
      text: "\u57FA\u7840",
      items: [
        { text: "Maven", link: "/maven/" },
        { text: "Git", link: "/git/" }
      ]
    },
    {
      text: "ES6",
      items: [
        { text: "Linux", link: "/linux/" },
        { text: "Docker", link: "/docker/" },
        { text: "Jenkins", link: "/jenkins/" }
      ]
    }
  ]
};

// docs/.vuepress/common/nav.ts
var nav_default = [
  {
    text: "\u9996\u9875",
    link: "/"
  },
  {
    text: "\u5BFC\u822A\u7AD9",
    link: "/navigation/"
  },
  basicsNav_default,
  JSNav_default,
  developer_default,
  toolNav_default,
  frontEnd_default,
  moreNav_default,
  indexNav_default,
  {
    text: "\u7559\u8A00\u533A",
    link: "/message-area/"
  }
];

// docs/.vuepress/common/info.ts
var penName = "Ming";
var title = "'s blog";
var link = "https://www.youngkbt.cn";
var footerTitle = "blog";
var avatar = "https://photo-album-1314189846.cos.ap-shanghai.myqcloud.com/202303171033443.png";
var name = "Da Wu";
var slogan = "\u671D\u5723\u7684\u4F7F\u5F92\uFF0C\u6B63\u5728\u8D70\u5411\u7F16\u7A0B\u7684\u81F3\u9AD8\u6BBF\u5802\uFF01";

// docs/.vuepress/common/footer.ts
var footer_default = {
  createYear: 2021,
  copyrightInfo: penName + " | " + footerTitle + '<br> <a href="http://beian.miit.gov.cn/" target="_blank">\u6842ICP\u59072021009994\u53F7</a>'
};

// docs/.vuepress/webSiteInfo/readFile.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import chalk from "chalk";
var log = console.log;
var docsRoot = path.join("/Users/dawu/Desktop/Ming-D-W.github.io-master/docs/.vuepress/webSiteInfo", "..", "..", "..", "docs");
function readFileList(excludeFiles = [""], dir = docsRoot, filesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((item, index) => {
    let filePath = path.join(dir, item);
    const stat = fs.statSync(filePath);
    if (!(excludeFiles instanceof Array)) {
      log(chalk.yellow(`error: \u4F20\u5165\u7684\u53C2\u6570\u4E0D\u662F\u4E00\u4E2A\u6570\u7EC4\u3002`));
    }
    excludeFiles.forEach((excludeFile) => {
      if (stat.isDirectory() && item !== ".vuepress" && item !== "@pages" && item !== excludeFile) {
        readFileList(excludeFiles, path.join(dir, item), filesList);
      } else {
        if (path.basename(dir) !== "docs") {
          const fileNameArr = path.basename(filePath).split(".");
          let name2 = null, type = null;
          if (fileNameArr.length === 2) {
            name2 = fileNameArr[0];
            type = fileNameArr[1];
          } else if (fileNameArr.length === 3) {
            name2 = fileNameArr[1];
            type = fileNameArr[2];
          } else {
            log(chalk.yellow(`warning: \u8BE5\u6587\u4EF6 "${filePath}" \u6CA1\u6709\u6309\u7167\u7EA6\u5B9A\u547D\u540D\uFF0C\u5C06\u5FFD\u7565\u751F\u6210\u76F8\u5E94\u6570\u636E\u3002`));
            return;
          }
          if (type === "md") {
            filesList.push({
              name: name2,
              filePath
            });
          }
        }
      }
    });
  });
  return filesList;
}
function readEachFileWords(excludeFiles = [""], cn, en) {
  const filesListWords = [];
  const filesList = readFileList(excludeFiles);
  filesList.forEach((item) => {
    const content = getContent(item.filePath);
    let len = counter(content);
    let readingTime = readTime(len, cn, en);
    let wordsCount = 0;
    wordsCount = len[0] + len[1];
    if (wordsCount >= 1e3) {
      wordsCount = Math.round(wordsCount / 100) / 10 + "k";
    }
    const fileMatterObj = matter(content, {});
    const matterData = fileMatterObj.data;
    filesListWords.push({ ...item, wordsCount, readingTime, ...matterData });
  });
  return filesListWords;
}
function readTime(len, cn = 300, en = 160) {
  let readingTime = len[0] / cn + len[1] / en;
  if (readingTime > 60 && readingTime < 60 * 24) {
    let hour = Math.trunc(readingTime / 60);
    let minute = Math.trunc(readingTime - hour * 60);
    if (minute === 0) {
      return hour + "h";
    }
    return hour + "h" + minute + "m";
  } else if (readingTime > 60 * 24) {
    let day = Math.trunc(readingTime / (60 * 24));
    let hour = Math.trunc((readingTime - day * 24 * 60) / 60);
    if (hour === 0) {
      return day + "d";
    }
    return day + "d" + hour + "h";
  }
  return readingTime < 1 ? "1" : Math.trunc(readingTime * 10) / 10 + "m";
}
function getContent(filePath) {
  return fs.readFileSync(filePath, "utf8");
}
function counter(content) {
  const cn = (content.match(/[\u4E00-\u9FA5]/g) || []).length;
  const en = (content.replace(/[\u4E00-\u9FA5]/g, "").match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g) || []).length;
  return [cn, en];
}

// docs/.vuepress/config/themeConfig.ts
var themeConfig_default = {
  nav: nav_default,
  sidebarDepth: 2,
  logo: "/img/index/logo.png",
  repo: "Kele-Bingtang/Kele-Bingtang.github.io",
  searchMaxSuggestions: 10,
  lastUpdated: "\u66F4\u65B0\u65F6\u95F4",
  docsDir: "docs",
  editLinks: false,
  editLinkText: "\u7F16\u8F91\u6B64\u9875",
  categoryText: "\u968F\u7B14",
  bodyBgImg: "/img/index/bg.jpg",
  bodyBgImgOpacity: 1,
  sidebar: "structuring",
  blogInfo: {
    blogCreate: "2021-10-19",
    indexView: true,
    pageView: true,
    readingTime: true,
    eachFileWords: readEachFileWords([""], 300, 160),
    mdFileCountType: "archives",
    totalWords: "archives",
    moutedEvent: ".tags-wrapper",
    indexIteration: 2500,
    pageIteration: 2500
  },
  privatePage: {
    openPrivate: true,
    username: "youngkbt",
    password: "kbt648621",
    expire: "1d",
    loginPath: "/vdoing/login/",
    loginKey: "vdoing_manager",
    loginSession: false,
    firstLogin: 0,
    firstLoginKey: "vdoing_first_login",
    loginInfo: {
      "/private/test1/": [
        { username: "vdoing", password: "123456" }
      ],
      "vdoing_first_login": [
        { username: "vdoing", password: "123456" }
      ]
    }
  },
  indexImg: {
    navColor: 2,
    switchNavColor: true,
    bgTimeColor: true,
    bgTimeColorArray: [
      "transparent",
      "transparent",
      "transparent",
      "transparent"
    ],
    descFade: true,
    desc: [
      "\u6545\u4E8B\u7531\u6211\u4E66\u5199\uFF0C\u65C5\u7A0B\u7531\u4F60\u89C1\u8BC1\uFF0C\u4F20\u5947\u7531\u5979\u8046\u542C \u2014\u2014 \u6765\u81EA Young Kbt",
      "\u79EF\u8DEC\u6B65\u4EE5\u81F3\u5343\u91CC\uFF0C\u81F4\u656C\u6BCF\u4E2A\u7231\u5B66\u4E60\u7684\u4F60 \u2014\u2014 \u6765\u81EA Evan Xu",
      "\u8FD9\u4E00\u751F\u6CE2\u6F9C\u58EE\u9614\u6216\u662F\u4E0D\u60CA\u90FD\u6CA1\u95EE\u9898 \u2014\u2014 \u6765\u81EA Weibw"
    ],
    descFontSize: "1.4rem",
    descFadeInTime: 200,
    descFadeOutTime: 100,
    descNextTime: 800,
    bubble: false,
    bubblePosition: 0,
    bubbleNum: 200
  },
  author: {
    name: penName,
    link
  },
  blogger: {
    avatar,
    name,
    slogan
  },
  social: {
    icons: [
      {
        iconClass: "icon-github",
        title: "GitHub",
        link: "https://github.com/kele-bingtang"
      },
      {
        iconClass: "icon-gitee",
        title: "Gitee",
        link: "https://gitee.com/kele-bingtang"
      },
      {
        iconClass: "icon-rss",
        title: "\u7F51\u7AD9\u9996\u9875",
        link: "https://www.youngkbt.cn"
      },
      {
        iconClass: "icon-QQ",
        title: "QQ",
        link: "http://wpa.qq.com/msgrd?v=3&uin=28761025&site=qq&menu=yes"
      },
      {
        iconClass: "icon-youjian",
        title: "\u8054\u7CFB\u6211",
        link: "https://www.youngkbt.cn/?contact=true"
      }
    ]
  },
  footer: footer_default
};

// docs/.vuepress/config.ts
var config_default = defineConfig4CustomTheme({
  theme: "vdoing",
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4"]
  },
  locales: {
    "/": {
      lang: "zh-CN",
      title: penName + title,
      description: "web\u524D\u7AEF\u6280\u672F\u535A\u5BA2, VuePress\u642D\u5EFA, \u4F7F\u7528\u4E86 Vdoing \u4E3B\u9898,\u4E13\u6CE8web\u524D\u7AEF\u5B66\u4E60\u4E0E\u603B\u7ED3\u3002\u5B66\u4E60JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github\u7B49\u76F8\u5173\u77E5\u8BC6, \u8BB0\u5F55\u751F\u6D3B\u548C\u6280\u672F\u8DEF\u7A0B, \u540C\u65F6\u5206\u4EAB\u7F16\u7A0B\u6280\u5DE7\u3002"
    }
  },
  extraWatchFiles: [".vuepress/config.ts"],
  themeConfig: themeConfig_default,
  head: head_default,
  plugins: plugins_default
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZy9wbHVnaW5zLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbW1vbi9iYWlkdXRqLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZy9oZWFkLnRzIiwgImRvY3MvLnZ1ZXByZXNzL25hdi9kZXZlbG9wZXIudHMiLCAiZG9jcy8udnVlcHJlc3MvbmF2L2Jhc2ljc05hdi50cyIsICJkb2NzLy52dWVwcmVzcy9uYXYvdG9vbE5hdi50cyIsICJkb2NzLy52dWVwcmVzcy9uYXYvZnJvbnRFbmQudHMiLCAiZG9jcy8udnVlcHJlc3MvbmF2L2luZGV4TmF2LnRzIiwgImRvY3MvLnZ1ZXByZXNzL25hdi9tb3JlTmF2LnRzIiwgImRvY3MvLnZ1ZXByZXNzL25hdi9KU05hdi50cyIsICJkb2NzLy52dWVwcmVzcy9jb21tb24vbmF2LnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbW1vbi9pbmZvLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbW1vbi9mb290ZXIudHMiLCAiZG9jcy8udnVlcHJlc3Mvd2ViU2l0ZUluZm8vcmVhZEZpbGUudHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlnL3RoZW1lQ29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBkZWZpbmVDb25maWc0Q3VzdG9tVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MvY29uZmlnXCI7XG5cbmltcG9ydCBwbHVnaW5zIGZyb20gXCIuL2NvbmZpZy9wbHVnaW5zXCI7XG5pbXBvcnQgaGVhZCBmcm9tIFwiLi9jb25maWcvaGVhZFwiO1xuaW1wb3J0IHRoZW1lQ29uZmlnIGZyb20gXCIuL2NvbmZpZy90aGVtZUNvbmZpZ1wiO1xuaW1wb3J0IHsgcGVuTmFtZSwgdGl0bGUgfSBmcm9tIFwiLi9jb21tb24vaW5mb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWc0Q3VzdG9tVGhlbWUoe1xuICB0aGVtZTogXCJ2ZG9pbmdcIiwgLy8gXHU0RjdGXHU3NTI4bnBtXHU1MzA1XHU0RTNCXHU5ODk4XG4gIC8vIFx1NTk4Mlx1Njc5Q1x1NEY3Rlx1NzUyOCBsb2NhbGVzIFx1NzY4NCB0aXRsZSBcdTU0OEMgZGVzY3JpcHRpb25cdUZGMENcdTUyMTlcdTRFMEJcdTY1QjlcdTc2ODQgdGl0bGUgXHU1NDhDIGRlc2NyaXB0aW9uIFx1NTkzMVx1NjU0OFxuICAvLyB0aXRsZTogcGVuTmFtZSArIHRpdGxlLFxuICAvLyBkZXNjcmlwdGlvbjogJ1lvdW5nIEtidFx1NEUyQVx1NEVCQVx1NTM1QVx1NUJBMiwgVnVlUHJlc3NcdTY0MkRcdTVFRkEsIFx1NEY3Rlx1NzUyOFx1NEU4NiBWZG9pbmcgXHU0RTNCXHU5ODk4LCBcdTVCNjZcdTRFNjBKYXZhLCBXZWIsIFx1Njg0Nlx1NjdCNiwgXHU1RkFFXHU2NzBEXHU1MkExLCBcdTVERTVcdTUxNzcsIFx1NTI0RFx1N0FFRlx1N0I0OVx1NzZGOFx1NTE3M1x1NzdFNVx1OEJDNiwgXHU4QkIwXHU1RjU1XHU3NTFGXHU2RDNCXHU1NDhDXHU2MjgwXHU2NzJGXHU4REVGXHU3QTBCLCBcdTU0MENcdTY1RjZcdTUyMDZcdTRFQUJcdTdGMTZcdTdBMEJcdTYyODBcdTVERTdcdTMwMDInLFxuICAvLyBsYW5nOiAnemgtQ04nLFxuICAvLyBiYXNlOiAnLycsIC8vIFx1NjgzQ1x1NUYwRlx1RkYxQScvPFx1NEVEM1x1NUU5M1x1NTQwRD4vJ1x1RkYwQyBcdTlFRDhcdThCQTQnLydcbiAgbWFya2Rvd246IHtcbiAgICBsaW5lTnVtYmVyczogdHJ1ZSwgLy8gXHU2NjNFXHU3OTNBXHU0RUUzXHU3ODAxXHU1NzU3XHU3Njg0XHU4ODRDXHU1M0Y3XG4gICAgZXh0cmFjdEhlYWRlcnM6IFtcImgyXCIsIFwiaDNcIiwgXCJoNFwiXSwgLy8gXHU2NTJGXHU2MzAxIGgyXHUzMDAxaDNcdTMwMDFoNCBcdTY4MDdcdTk4OThcbiAgfSxcbiAgLy8gXHU1OTFBXHU4QkVEXHU4QTAwXHU2NTJGXHU2MzAxXG4gIGxvY2FsZXM6IHtcbiAgICBcIi9cIjoge1xuICAgICAgbGFuZzogXCJ6aC1DTlwiLFxuICAgICAgdGl0bGU6IHBlbk5hbWUgKyB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIndlYlx1NTI0RFx1N0FFRlx1NjI4MFx1NjcyRlx1NTM1QVx1NUJBMiwgVnVlUHJlc3NcdTY0MkRcdTVFRkEsIFx1NEY3Rlx1NzUyOFx1NEU4NiBWZG9pbmcgXHU0RTNCXHU5ODk4LFx1NEUxM1x1NkNFOHdlYlx1NTI0RFx1N0FFRlx1NUI2Nlx1NEU2MFx1NEUwRVx1NjAzQlx1N0VEM1x1MzAwMlx1NUI2Nlx1NEU2MEphdmFTY3JpcHQsanMsRVM2LFR5cGVTY3JpcHQsdnVlLFJlYWN0LHB5dGhvbixjc3MzLGh0bWw1LE5vZGUsZ2l0LGdpdGh1Ylx1N0I0OVx1NzZGOFx1NTE3M1x1NzdFNVx1OEJDNiwgXHU4QkIwXHU1RjU1XHU3NTFGXHU2RDNCXHU1NDhDXHU2MjgwXHU2NzJGXHU4REVGXHU3QTBCLCBcdTU0MENcdTY1RjZcdTUyMDZcdTRFQUJcdTdGMTZcdTdBMEJcdTYyODBcdTVERTdcdTMwMDJcIixcbiAgICB9LFxuICAgIC8vICcvZW4vJzoge1xuICAgIC8vICAgbGFuZzogJ2VuLVVTJywgLy8gXHU1QzA2XHU0RjFBXHU4OEFCXHU4QkJFXHU3RjZFXHU0RTNBIDxodG1sPiBcdTc2ODQgbGFuZyBcdTVDNUVcdTYwMjdcbiAgICAvLyAgIHRpdGxlOiBwZW5OYW1lICsgdGl0bGUsXG4gICAgLy8gICBkZXNjcmlwdGlvbjogJ1lvdW5nIEtidCBwZXJzb25hbCBibG9nLCBidWlsdCBieSB2dWVwcmVzcywgdXNlcyB0aGUgdmRvaW5nIHRoZW1lIHRvIGxlYXJuIEphdmEsIHdlYiwgZnJhbWV3b3JrLCBtaWNyb3NlcnZpY2VzLCB0b29scywgZnJvbnQtZW5kIGFuZCBvdGhlciByZWxhdGVkIGtub3dsZWRnZSwgcmVjb3JkIGxpZmUgYW5kIHRlY2hub2xvZ3kgam91cm5leSwgYW5kIHNoYXJlIHByb2dyYW1taW5nIHNraWxscyBhdCB0aGUgc2FtZSB0aW1lJ1xuICAgIC8vIH1cbiAgfSxcbiAgLy8gXHU3NkQxXHU1NDJDXHU2NTg3XHU0RUY2XHU1M0Q4XHU1MzE2XHU1RTc2XHU5MUNEXHU2NUIwXHU2Nzg0XHU1RUZBXG4gIGV4dHJhV2F0Y2hGaWxlczogW1wiLnZ1ZXByZXNzL2NvbmZpZy50c1wiXSxcblxuICB0aGVtZUNvbmZpZyxcblxuICBoZWFkLFxuXG4gIHBsdWdpbnMsXG59KTtcbiIsICJpbXBvcnQgeyBVc2VyUGx1Z2lucyB9IGZyb20gJ3Z1ZXByZXNzL2NvbmZpZydcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcblxuLy8gXHU2M0QyXHU0RUY2XHU5MTREXHU3RjZFXG5leHBvcnQgZGVmYXVsdCA8VXNlclBsdWdpbnM+IFtcbiAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2M0QyXHU0RUY2XHVGRjBDXHU1MzczXHU2NzJDXHU1NzMwXHU2M0QyXHU0RUY2XG4gIFtcbiAgICB7XG4gICAgICBuYW1lOiAnY3VzdG9tLXBsdWdpbnMnLFxuICAgICAgZ2xvYmFsVUlDb21wb25lbnRzOiBbXCJQYWdlSW5mb1wiLCBcIkJsb2NrVG9nZ2xlXCIsIFwiR2xvYmFsVGlwXCIsIFwiRmFudGFzeVwiXVxuICAgICAgLy8gMi54IFx1NzI0OFx1NjcyQyBnbG9iYWxVSUNvbXBvbmVudHMgXHU2NTM5XHU1NDBEXHU0RTNBIGNsaWVudEFwcFJvb3RDb21wb25lbnRGaWxlc1xuICAgICAgLy8gXHU1M0JCXHU2Mzg5XCJUd2lrb29cIlxuICAgIH1cbiAgXSxcbiAgLy8gXHU2NzJDXHU1NzMwXHU2M0QyXHU0RUY2XG4gIC8vIFtyZXF1aXJlKCcuLi9wbHVnaW5zL2xvdmUtbWUnKSwgeyAvLyBcdTlGMjBcdTY4MDdcdTcwQjlcdTUxRkJcdTcyMzFcdTVGQzNcdTcyNzlcdTY1NDhcbiAgLy8gICAvLyBjb2xvcjogJyMxMWE4Y2QnLCAvLyBcdTcyMzFcdTVGQzNcdTk4OUNcdTgyNzJcdUZGMENcdTlFRDhcdThCQTRcdTk2OEZcdTY3M0FcdTgyNzJcbiAgLy8gICBleGNsdWRlQ2xhc3NOYW1lOiAndGhlbWUtdmRvaW5nLWNvbnRlbnQnIC8vIFx1ODk4MVx1NjM5Mlx1OTY2NFx1NTE0M1x1N0QyMFx1NzY4NGNsYXNzLCBcdTlFRDhcdThCQTRcdTdBN0EnJ1xuICAvLyB9XSxcblxuICAndnVlcHJlc3MtcGx1Z2luLWJhaWR1LWF1dG9wdXNoJywgLy8gXHU3NjdFXHU1RUE2XHU4MUVBXHU1MkE4XHU2M0E4XHU5MDAxXG5cbiAgLy8gXHU1M0VGXHU0RUU1XHU2REZCXHU1MkEwXHU3QjJDXHU0RTA5XHU2NUI5XHU2NDFDXHU3RDIyXHU5NEZFXHU2M0E1XHU3Njg0XHU2NDFDXHU3RDIyXHU2ODQ2XHVGRjA4XHU1MzlGXHU1Qjk4XHU2NUI5XHU2NDFDXHU3RDIyXHU2ODQ2XHU3Njg0XHU1M0MyXHU2NTcwXHU0RUNEXHU1M0VGXHU3NTI4XHVGRjA5XG4gIC8vIFtcbiAgLy8gICAndGhpcmRwYXJ0eS1zZWFyY2gnLFxuICAvLyAgIHtcbiAgLy8gICAgIHRoaXJkcGFydHk6IFtcbiAgLy8gICAgICAgLy8gXHU1M0VGXHU5MDA5XHVGRjBDXHU5RUQ4XHU4QkE0IFtdXG4gIC8vICAgICAgIHtcbiAgLy8gICAgICAgICB0aXRsZTogJ1x1NTcyOE1ETlx1NEUyRFx1NjQxQ1x1N0QyMicsXG4gIC8vICAgICAgICAgZnJvbnRVcmw6ICdodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy96aC1DTi9zZWFyY2g/cT0nLCAvLyBcdTY0MUNcdTdEMjJcdTk0RkVcdTYzQTVcdTc2ODRcdTUyNERcdTk3NjJcdTkwRThcdTUyMDZcbiAgLy8gICAgICAgICBiZWhpbmRVcmw6ICcnLCAvLyBcdTY0MUNcdTdEMjJcdTk0RkVcdTYzQTVcdTc2ODRcdTU0MEVcdTk3NjJcdTkwRThcdTUyMDZcdUZGMENcdTUzRUZcdTkwMDlcdUZGMENcdTlFRDhcdThCQTQgJydcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgICAge1xuICAvLyAgICAgICAgIHRpdGxlOiAnXHU1NzI4UnVub29iXHU0RTJEXHU2NDFDXHU3RDIyJyxcbiAgLy8gICAgICAgICBmcm9udFVybDogJ2h0dHBzOi8vd3d3LnJ1bm9vYi5jb20vP3M9JyxcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgICAge1xuICAvLyAgICAgICAgIHRpdGxlOiAnXHU1NzI4VnVlIEFQSVx1NEUyRFx1NjQxQ1x1N0QyMicsXG4gIC8vICAgICAgICAgZnJvbnRVcmw6ICdodHRwczovL2NuLnZ1ZWpzLm9yZy92Mi9hcGkvIycsXG4gIC8vICAgICAgIH0sXG4gIC8vICAgICAgIHtcbiAgLy8gICAgICAgICB0aXRsZTogJ1x1NTcyOEJpbmdcdTRFMkRcdTY0MUNcdTdEMjInLFxuICAvLyAgICAgICAgIGZyb250VXJsOiAnaHR0cHM6Ly9jbi5iaW5nLmNvbS9zZWFyY2g/cT0nLFxuICAvLyAgICAgICB9LFxuICAvLyAgICAgICB7XG4gIC8vICAgICAgICAgdGl0bGU6ICdcdTkwMUFcdThGQzdcdTc2N0VcdTVFQTZcdTY0MUNcdTdEMjJcdTY3MkNcdTdBRDlcdTc2ODQnLFxuICAvLyAgICAgICAgIGZyb250VXJsOiAnaHR0cHM6Ly93d3cuYmFpZHUuY29tL3M/d2Q9JyxcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgIF0sXG4gIC8vICAgfSxcbiAgLy8gXSxcbiAgLy8gXHU1Qjk4XHU3RjUxXHVGRjFBaHR0cHM6Ly9naXRodWIuY29tL2xlby1idW5lZXYvdnVlcHJlc3MtcGx1Z2luLWZ1bGx0ZXh0LXNlYXJjaFxuICBbJ2Z1bGx0ZXh0LXNlYXJjaCddLFxuXG4gIFtcbiAgICAnb25lLWNsaWNrLWNvcHknLFxuICAgIHtcbiAgICAgIC8vIFx1NEVFM1x1NzgwMVx1NTc1N1x1NTkwRFx1NTIzNlx1NjMwOVx1OTRBRVxuICAgICAgY29weVNlbGVjdG9yOiBbJ2RpdltjbGFzcyo9XCJsYW5ndWFnZS1cIl0gcHJlJywgJ2RpdltjbGFzcyo9XCJhc2lkZS1jb2RlXCJdIGFzaWRlJ10sIC8vIFN0cmluZyBvciBBcnJheVxuICAgICAgY29weU1lc3NhZ2U6ICdcdTU5MERcdTUyMzZcdTYyMTBcdTUyOUYnLCAvLyBkZWZhdWx0IGlzICdDb3B5IHN1Y2Nlc3NmdWxseSBhbmQgdGhlbiBwYXN0ZSBpdCBmb3IgdXNlLidcbiAgICAgIGR1cmF0aW9uOiAxMDAwLCAvLyBwcm9tcHQgbWVzc2FnZSBkaXNwbGF5IHRpbWUuXG4gICAgICBzaG93SW5Nb2JpbGU6IGZhbHNlLCAvLyB3aGV0aGVyIHRvIGRpc3BsYXkgb24gdGhlIG1vYmlsZSBzaWRlLCBkZWZhdWx0OiBmYWxzZS5cbiAgICB9LFxuICBdLFxuICAvLyBbXG4gIC8vICAgJ2RlbW8tYmxvY2snLFxuICAvLyAgIHtcbiAgLy8gICAgIC8vIGRlbW9cdTZGMTRcdTc5M0FcdTZBMjFcdTU3NTcgaHR0cHM6Ly9naXRodWIuY29tL3hpZ3VheGlndWEvdnVlcHJlc3MtcGx1Z2luLWRlbW8tYmxvY2tcbiAgLy8gICAgIHNldHRpbmdzOiB7XG4gIC8vICAgICAgIC8vIGpzTGliOiBbJ2h0dHA6Ly94eHgnXSwgLy8gXHU1NzI4XHU3RUJGXHU3OTNBXHU0RjhCKGpzZmlkZGxlLCBjb2RlcGVuKVx1NEUyRFx1NzY4NGpzXHU0RjlEXHU4RDU2XG4gIC8vICAgICAgIC8vIGNzc0xpYjogWydodHRwOi8veHh4J10sIC8vIFx1NTcyOFx1N0VCRlx1NzkzQVx1NEY4Qlx1NEUyRFx1NzY4NGNzc1x1NEY5RFx1OEQ1NlxuICAvLyAgICAgICAvLyB2dWU6ICdodHRwczovL3VucGtnLnpoaW1nLmNvbS92dWUvZGlzdC92dWUubWluLmpzJywgLy8gXHU1NzI4XHU3RUJGXHU3OTNBXHU0RjhCXHU0RTJEXHU3Njg0dnVlXHU0RjlEXHU4RDU2XG4gIC8vICAgICAgIGpzZmlkZGxlOiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBIGpzZmlkZGxlIFx1OTRGRVx1NjNBNVxuICAvLyAgICAgICBjb2RlcGVuOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0EgY29kZXBlbiBcdTk0RkVcdTYzQTVcbiAgLy8gICAgICAgaG9yaXpvbnRhbDogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NUM1NVx1NzkzQVx1NEUzQVx1NkEyQVx1NTQxMVx1NjgzN1x1NUYwRlxuICAvLyAgICAgfSxcbiAgLy8gICB9LFxuICAvLyBdLFxuICBbXG4gICAgJ3Z1ZXByZXNzLXBsdWdpbi16b29taW5nJywgLy8gXHU2NTNFXHU1OTI3XHU1NkZFXHU3MjQ3XG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcudGhlbWUtdmRvaW5nLWNvbnRlbnQgaW1nOm5vdCgubm8tem9vbSknLCAvLyBcdTYzOTJcdTk2NjQgY2xhc3MgXHU2NjJGIG5vLXpvb20gXHU3Njg0XHU1NkZFXHU3MjQ3XG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGJnQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNiknLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBbXG4gICAgJ3Z1ZXByZXNzLXBsdWdpbi1iYWlkdS10b25namknLCAvLyBcdTc2N0VcdTVFQTZcdTdFREZcdThCQTFcbiAgICB7XG4gICAgICAvLyBobTogJ2VmZGI0M2U5YzQzMzVkYTFmYmFiZjM4NDBiODJjM2VkJyxcbiAgICAgIGhtOiAnMjY3YzU2ODBjMmZmYjQ2OGNhMjljNDVmZmU2ODAxZGEnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICAndnVlcHJlc3MtcGx1Z2luLWNvbW1lbnQnLCAvLyBcdThCQzRcdThCQkFcdTYzRDJcdTRFRjZcbiAgICAvLyBcdTkwMDlcdTYyRTkgR2l0YWxrIFx1OEJDNFx1OEJCQVxuICAgIHtcbiAgICAgIGNob29zZW46ICdnaXRhbGsnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBjbGllbnRJRDogJ2U4ODE5N2ZiNjM4NTkyNmM5ZDMzJyxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogJ2RiYjkzZjU0MzkxYWI2OGI0YWVkZTA4ZDNiOWIzNzNkMjQwMTRlNjInLFxuICAgICAgICAgICAgcmVwbzogJ2Jsb2ctZ2l0YWxrLWNvbW1lbnQnLCAvLyBHaXRIdWIgXHU0RUQzXHU1RTkzXG4gICAgICAgICAgICBvd25lcjogJ01pbmctRC1XJywgLy8gR2l0SHViXHU0RUQzXHU1RTkzXHU2MjQwXHU2NzA5XHU4MDA1XG4gICAgICAgICAgICBhZG1pbjogWydNaW5nLUQtVyddLCAvLyBcdTVCRjlcdTRFRDNcdTVFOTNcdTY3MDlcdTUxOTlcdTY3NDNcdTk2NTBcdTc2ODRcdTRFQkFcbiAgICAgICAgICAgIC8vIGRpc3RyYWN0aW9uRnJlZU1vZGU6IHRydWUsXG4gICAgICAgICAgICBwYWdlckRpcmVjdGlvbjogJ2xhc3QnLCAvLyAnZmlyc3QnXHU2QjYzXHU1RThGIHwgJ2xhc3QnXHU1MDEyXHU1RThGXG4gICAgICAgICAgICBpZDogJzwlLSAoZnJvbnRtYXR0ZXIucGVybWFsaW5rIHx8IGZyb250bWF0dGVyLnRvLnBhdGgpLnNsaWNlKC0xNikgJT4nLCAvLyAgXHU5ODc1XHU5NzYyXHU3Njg0XHU1NTJGXHU0RTAwXHU2ODA3XHU4QkM2LFx1OTU3Rlx1NUVBNlx1NEUwRFx1ODBGRFx1OEQ4NVx1OEZDNzUwXG4gICAgICAgICAgICB0aXRsZTogJ1x1MzAwQ1x1OEJDNFx1OEJCQVx1MzAwRDwlLSBmcm9udG1hdHRlci50aXRsZSAlPicsIC8vIEdpdEh1YiBpc3N1ZSBcdTc2ODRcdTY4MDdcdTk4OThcbiAgICAgICAgICAgIGxhYmVsczogWydHaXRhbGsnLCAnQ29tbWVudCddLCAvLyBHaXRIdWIgaXNzdWUgXHU3Njg0XHU2ODA3XHU3QjdFXG4gICAgICAgICAgICBib2R5OlxuICAgICAgICAgICAgICAnXHU5ODc1XHU5NzYyXHVGRjFBPCUtIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAoZnJvbnRtYXR0ZXIudG8ucGF0aCB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpICU+JywgLy8gR2l0SHViIGlzc3VlIFx1NzY4NFx1NTE4NVx1NUJCOVxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIFx1OTAwOVx1NjJFOSBWYWxpbmUgXHU4QkM0XHU4QkJBXG4gICAgLy8ge1xuICAgIC8vICAgLy8gXHU1MTc3XHU0RjUzXHU1M0MyXHU2NTcwXHU4QkY3XHU3NzBCXHU1Qjk4XHU3RjUxXHVGRjFBaHR0cHM6Ly92YWxpbmUuanMub3JnL1xuICAgIC8vICAgY2hvb3NlbjogJ3ZhbGluZScsXG4gICAgLy8gICAvLyBvcHRpb25zIFx1OTAwOVx1OTg3OVx1NEUyRFx1NzY4NFx1NjI0MFx1NjcwOVx1NTNDMlx1NjU3MFx1RkYwQ1x1NEYxQVx1NEYyMFx1N0VEOSBWYWxpbmUgXHU3Njg0XHU5MTREXHU3RjZFXG4gICAgLy8gICBvcHRpb25zOiB7XG4gICAgLy8gICAgIGVsOiAnI3ZhbGluZS12dWVwcmVzcy1jb21tZW50JyxcbiAgICAvLyAgICAgYXBwSWQ6ICdhTm9CVFJtcHFRTGV3VWtFZ2NMUUc2NDgtZ3pHem9Ic3onLFxuICAgIC8vICAgICBhcHBLZXk6ICdiQlh1VGZGeDdxNVVITmJDRmc4UVV6RjcnLFxuICAgIC8vICAgICBwbGFjZWhvbGRlcjogJ1x1OEJGN1x1NzU1OVx1NEUwQlx1NEY2MFx1NzY4NFx1OERCM1x1OEZGOSB+ficsXG4gICAgLy8gICAgIC8vIFx1NjcwOSBVUkxcdTMwMDEnJ1x1MzAwMW1wXHUzMDAxaWRlbnRpY29uXHUzMDAxbW9uc3RlcmlkXHUzMDAxd2F2YXRhclx1MzAwMXJldHJvXHUzMDAxcm9ib2hhc2hcdTMwMDFoaWRlIFx1NTkzNFx1NTBDRlx1OTAwOVx1NjJFOVx1RkYwQ1x1NTE3N1x1NEY1M1x1NTkzNFx1NTBDRlx1NjYyRlx1NEVDMFx1NEU0OFx1NjgzN1x1NUI1MFx1RkYwQ1x1OEJGN1x1OEJCRlx1OTVFRSBodHRwczovL3ZhbGluZS5qcy5vcmcvYXZhdGFyLmh0bWxcbiAgICAvLyAgICAgYXZhdGFyOiAnbXAnLFxuICAgIC8vICAgICBwYWdlU2l6ZTogMTAsICAgLy8gXHU4QkM0XHU4QkJBXHU1MjE3XHU4ODY4XHU1MjA2XHU5ODc1XHVGRjBDXHU2QkNGXHU5ODc1XHU2NzYxXHU2NTcwXG4gICAgLy8gICAgIHZpc2l0b3I6IHRydWUsICAgIC8vIFx1NjU4N1x1N0FFMFx1OEJCRlx1OTVFRVx1OTFDRlx1N0VERlx1OEJBMVxuICAgIC8vICAgICByZWNvcmRJUDogZmFsc2UsICAgLy8gXHU2NjJGXHU1NDI2XHU4QkIwXHU1RjU1XHU4QkM0XHU4QkJBXHU4MDA1IElQXG4gICAgLy8gICAgIGVuYWJsZVFROiB0cnVlLCAgIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NjYzNVx1NzlGMFx1Njg0Nlx1ODFFQVx1NTJBOFx1ODNCN1x1NTNENiBRUSBcdTY2MzVcdTc5RjBcdTU0OEMgUVEgXHU1OTM0XHU1MENGLCBcdTlFRDhcdThCQTRcdTUxNzNcdTk1RURcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIF0sXG4gIFtcbiAgICAnQHZ1ZXByZXNzL2xhc3QtdXBkYXRlZCcsIC8vIFwiXHU0RTBBXHU2QjIxXHU2NkY0XHU2NUIwXCJcdTY1RjZcdTk1RjRcdTY4M0NcdTVGMEZcbiAgICB7XG4gICAgICB0cmFuc2Zvcm1lcjogKHRpbWVzdGFtcCwgbGFuZykgPT4ge1xuICAgICAgICByZXR1cm4gZGF5anModGltZXN0YW1wKS5mb3JtYXQoJ1lZWVkvTU0vREQsIEhIOm1tOnNzJyk7XG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG4gIC8vIFx1OTg3Nlx1OTBFOFx1OTYwNVx1OEJGQlx1OEZEQlx1NUVBNlx1NjNEMlx1NEVGNlxuICBbXG4gICAgJ3JlYWRpbmctcHJvZ3Jlc3MnXG4gIF0sXG4gIC8vIFx1OTdGM1x1NEU1MFx1NjNEMlx1NEVGNlx1RkYwQ1x1NUI5OFx1N0Y1MVx1RkYxQWh0dHBzOi8vbW9lZnlpdC5naXRodWIuaW8vbW9lZnktdnVlcHJlc3MvcGFja2FnZXMvbWV0aW5nLmh0bWxcbiAgLy8gW1xuICAvLyAgICdtZXRpbmcnLFxuICAvLyAgIHtcbiAgLy8gICAgIC8vIFx1OEZEOVx1NEUyQSBBUEkgXHU2NjJGXHU0RTBEXHU1M0VGXHU3NTI4XHU3Njg0XHVGRjBDXHU1M0VBXHU2NjJGXHU0RjVDXHU0RTNBXHU3OTNBXHU0RjhCXHU4MDBDXHU1REYyIGh0dHBzOi8vbXVzaWMuMTYzLmNvbS9wbGF5bGlzdD9pZD0yNTU1NDEyNDM5JnVzZXJpZD0xNDkwNDM0MTc2XG4gIC8vICAgICAvLyBtZXRpbmdBcGk6ICdodHRwczovL211c2ljLjE2My5jb20vJyxcbiAgLy8gICAgIG1ldGluZzogeyAgIC8vIFx1NEUwRFx1OTE0RFx1N0Y2RVx1OEJFNVx1OTg3OVx1NzY4NFx1OEJERFx1NEUwRFx1NEYxQVx1NTFGQVx1NzNCMFx1NTE2OFx1NUM0MFx1NjRBRFx1NjUzRVx1NTY2OFxuICAvLyAgICAgICBzZXJ2ZXI6ICduZXRlYXNlJywgICAgLy8gXHU5N0YzXHU0RTUwXHU1RTczXHU1M0YwXHVGRjBDXHU1M0VGXHU5MDA5XHU1MDNDXHVGRjFBIFwibmV0ZWFzZVwiIHwgXCJ0ZW5jZW50XCIgfCBcImt1d29cIiB8IFwia3Vnb3VcIiB8IFwiYmFpZHVcIiB8IFwieGlhbWlcIlx1RkYwQ25ldGVhc2UgXHU2NjJGXHU3RjUxXHU2NjEzXHU0RTkxXG4gIC8vICAgICAgIHR5cGU6ICdwbGF5bGlzdCcsICAgLy8gXHU4RDQ0XHU2RTkwXHU3QzdCXHU1NzhCXHVGRjA4XHU2NEFEXHU2NTNFXHU1MjE3XHU4ODY4XHUzMDAxXHU1MzU1XHU2NkYyXHUzMDAxXHU0RTEzXHU4RjkxXHU3QjQ5XHVGRjA5XHVGRjBDXHU1M0VGXHU5MDA5XHU1MDNDXHVGRjFBIFwic29uZ1wiIHwgXCJhbGJ1bVwiIHwgXCJhcnRpc3RcIiB8IFwicGxheWxpc3RcIlxuICAvLyAgICAgICBtaWQ6ICcyNTU1NDEyNDM5JywgICAgLy8gXHU4RDQ0XHU2RTkwIElEXG4gIC8vICAgICAgIC8vIGF1dG86ICdodHRwczovL211c2ljLjE2My5jb20vcGxheWxpc3Q/aWQ9MjU1NTQxMjQzOScsICAvLyBcdThENDRcdTZFOTAgdXJsXHVGRjBDXHU1ODZCXHU1MTk5XHU1NDBFXHU1M0VGXHU5MDFBXHU4RkM3XHU4RDQ0XHU2RTkwIHVybCBcdTgxRUFcdTUyQThcdTg5RTNcdTY3OTBcdThENDRcdTZFOTBcdTVFNzNcdTUzRjBcdTMwMDFcdTdDN0JcdTU3OEJcdTMwMDFJRFx1RkYwQ1x1NEUwQVx1OEZGMFx1NEUwOVx1NEUyQVx1OTAwOVx1OTg3OVx1NUMwNlx1ODhBQlx1ODk4Nlx1NzZENlx1RkYwOFx1NjcyQ1x1NTNDMlx1NjU3MFx1NEVDNVx1NjUyRlx1NjMwMSBuZXRlYXNlXHUzMDAxdGVuY2VudFx1MzAwMXhpYW1pIFx1NEUwOVx1NUU3M1x1NTNGMFx1RkYwOVxuICAvLyAgICAgfSxcbiAgLy8gICAgIGFwbGF5ZXI6IHtcbiAgLy8gICAgICAgZml4ZWQ6IHRydWUsICAgLy8gXHU2NjJGXHU1NDI2XHU1RjAwXHU1NDJGXHU1NDM4XHU1RTk1XHU2QTIxXHU1RjBGXHVGRjBDXHU1MzczXHU4MUVBXHU1MkE4XHU5NjkwXHU4NUNGXHU1NzI4XHU1QzRGXHU1RTU1XHU4RkI5XHU2ODQ2XG4gIC8vICAgICAgIG1pbmk6IHRydWUsICAgIC8vIFx1NjYyRlx1NTQyNlx1NUYwMFx1NTQyRlx1OEZGN1x1NEY2MFx1NkEyMVx1NUYwRlxuICAvLyAgICAgICBhdXRvcGxheTogZmFsc2UsICAgLy8gXHU2NjJGXHU1NDI2XHU1RjAwXHU1NDJGXHU4MUVBXHU1MkE4XHU2NEFEXHU2NTNFXG4gIC8vICAgICAgIHRoZW1lOiAnI2I3ZGFmZicsIC8vIFx1OEJCRVx1N0Y2RVx1NjRBRFx1NjUzRVx1NTY2OFx1OUVEOFx1OEJBNFx1NEUzQlx1OTg5OFx1OTg5Q1x1ODI3MlxuICAvLyAgICAgICBsb29wOiAnYWxsJywgICAvLyBcdThCQkVcdTdGNkVcdTY0QURcdTY1M0VcdTU2NjhcdTc2ODRcdTY0QURcdTY1M0VcdTVGQUFcdTczQUZcdTZBMjFcdTVGMEZcdUZGMENcdTUzRUZcdTkwMDlcdTUwM0NcdUZGMUEnYWxsJyB8ICdvbmUnIHwgJ25vbmUnXG4gIC8vICAgICAgIG9yZGVyOiAnbGlzdCcsICAvLyBcdThCQkVcdTdGNkVcdTY0QURcdTY1M0VcdTU2NjhcdTc2ODRcdTY0QURcdTY1M0VcdTk4N0FcdTVFOEZcdTZBMjFcdTVGMEZcdUZGMENcdTUzRUZcdTkwMDlcdTUwM0NcdUZGMUEnbGlzdCcgfCAncmFuZG9tJ1xuICAvLyAgICAgICBwcmVsb2FkOiAnYXV0bycsICAvLyBcdThCQkVcdTdGNkVcdTk3RjNcdTk4OTFcdTc2ODRcdTk4ODRcdTUyQTBcdThGN0RcdTZBMjFcdTVGMEZcdUZGMENcdTUzRUZcdTkwMDlcdTUwM0NcdUZGMUEnbm9uZScgfCAnbWV0YWRhdGEnIHwgJ2F1dG8nXG4gIC8vICAgICAgIHZvbHVtZTogMC43LCAgICAvLyBcdThCQkVcdTdGNkVcdTY0QURcdTY1M0VcdTU2NjhcdTc2ODRcdTk3RjNcdTkxQ0ZcbiAgLy8gICAgICAgYWRkaXRpb25hbEF1ZGlvczogW10sICAvLyBcdTk2NjQgTWV0aW5nIFx1ODlFM1x1Njc5MFx1NzY4NCBhdWRpbyBcdTU5MTZcdTk4OURcdTU5MTZcdTZERkJcdTUyQTBcdTc2ODQgYXVkaW9cdUZGMENcdTRFMDBcdTgyMkNcdTVCOThcdTY1QjlcdTgxRUFcdTVFMjZcdTc2ODRcdTVDMzFcdTg4NENcbiAgLy8gICAgICAgbXV0ZXg6IHRydWUsICAgLy8gXHU2NjJGXHU1NDI2XHU1RjAwXHU1NDJGXHU0RTkyXHU2NUE1XHU2QTIxXHU1RjBGXHVGRjBDXHU1MzczXHU4QkU1XHU2NEFEXHU2NTNFXHU1NjY4XHU2NEFEXHU2NTNFXHU5N0YzXHU0RTUwXHU1NDBFXHVGRjBDXHU1MDVDXHU2QjYyXHU1MTc2XHU0RUQ2XHU2QjYzXHU1NzI4XHU2NEFEXHU2NTNFXHU3Njg0XHU2NEFEXHU2NTNFXHU1NjY4XG4gIC8vICAgICAgIGxyY1R5cGU6IDAsICAgLy8gXHU4QkJFXHU3RjZFIGxyYyBcdTZCNENcdThCQ0RcdTg5RTNcdTY3OTBcdTZBMjFcdTVGMEZcdUZGMENcdTUzRUZcdTkwMDlcdTUwM0NcdUZGMUEzIHwgMSB8IDBcdUZGMDgwXHVGRjFBXHU3OTgxXHU3NTI4IGxyYyBcdTZCNENcdThCQ0RcdUZGMEMxXHVGRjFBbHJjIFx1NjgzQ1x1NUYwRlx1NzY4NFx1NUI1N1x1N0IyNlx1NEUzMlx1RkYwQzNcdUZGMUFscmMgXHU2NTg3XHU0RUY2IHVybFx1RkYwOVxuICAvLyAgICAgICBsaXN0Rm9sZGVkOiBmYWxzZSwgICAvLyBcdTUyMUFcdTYyNTNcdTVGMDBcdTY0QURcdTY1M0VcdTU2NjhcdTY1RjZcdUZGMENcdTY2MkZcdTU0MjZcdTYyOThcdTUzRTBcdTY0QURcdTY1M0VcdTUyMTdcdTg4NjhcbiAgLy8gICAgICAgbGlzdE1heEhlaWdodDogMjUwLCAgLy8gXHU4QkJFXHU3RjZFXHU2NEFEXHU2NTNFXHU1MjE3XHU4ODY4XHU2NzAwXHU1OTI3XHU5QUQ4XHU1RUE2XHVGRjBDXHU1MzU1XHU0RjREXHU0RTNBXHU1MENGXHU3RDIwXG4gIC8vICAgICAgIHN0b3JhZ2VOYW1lOiAndnVlcHJlc3MtcGx1Z2luLW1ldGluZycsIC8vIFx1OEJCRVx1N0Y2RVx1NUI1OFx1NTBBOFx1NjRBRFx1NjUzRVx1NTY2OFx1OEJCRVx1N0Y2RVx1NzY4NCBsb2NhbFN0b3JhZ2Uga2V5XG4gIC8vICAgICB9LFxuICAvLyAgICAgbW9iaWxlOiB7ICAgLy8gXHU3OUZCXHU1MkE4XHU3QUVGXHU5MTREXHU3RjZFXG4gIC8vICAgICAgIGNvdmVyOiB0cnVlLCAgLy8gXHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBXHU1QzAxXHU5NzYyXHU1NkZFXHVGRjBDXHU1OTgyXHU2NzlDXHU5NjkwXHU4NUNGXHU3Njg0XHU4QkREXHU1M0VGXHU0RUU1XHU5NjMyXHU2QjYyXHU2NEFEXHU2NTNFXHU1NjY4XHU5MDZFXHU2MzIxXHU3OUZCXHU1MkE4XHU4QkJFXHU1OTA3XHU0RTBBXHU3Njg0XHU2NTg3XHU1QjU3XHU1MTg1XHU1QkI5XG4gIC8vICAgICAgIGxyYzogdHJ1ZSwgICAgICAgLy8gXHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBXHU2QjRDXHU4QkNEXG4gIC8vICAgICB9XG4gIC8vICAgfSxcbiAgLy8gXSxcbiAgLy8gXHU5RjIwXHU2ODA3XHU3MEI5XHU1MUZCXHU5ODc1XHU5NzYyXHU3Njg0XHU3MjA2XHU3MEI4XHU2NTQ4XHU2NzlDXHVGRjBDXHU1Qjk4XHU3RjUxXHVGRjFBaHR0cHM6Ly9tb2VmeWl0LmdpdGh1Yi5pby9tb2VmeS12dWVwcmVzcy9wYWNrYWdlcy9jdXJzb3ItZWZmZWN0cy5odG1sXG4gIC8vIFtcbiAgLy8gICAnY3Vyc29yLWVmZmVjdHMnLFxuICAvLyAgIHtcbiAgLy8gICAgIHNpemU6IDIsIC8vIFx1N0M5Mlx1NUI1MFx1NzY4NFx1NTkyN1x1NUMwRlx1RkYwQ1x1OUVEOFx1OEJBNFx1NTAzQ1x1RkYxQTJcbiAgLy8gICAgIHNoYXBlOiBbJ3N0YXInXSwgLy8gXHU3QzkyXHU1QjUwXHU3Njg0XHU1RjYyXHU3MkI2XHVGRjBDc3Rhclx1RkYxQVx1NjYxRlx1NUY2Mlx1RkYwQ2NpcmNsZVx1RkYxQVx1NTcwNlx1NUY2Mlx1MzAwMlx1OUVEOFx1OEJBNFx1NTAzQ1x1RkYxQXN0YXJcbiAgLy8gICAgIHpJbmRleDogOTk5OTk5OTk5LCAvLyBcdTk4NzVcdTk3NjJcdTc2ODRcdTdEMjJcdTVGMTVcdTVDNUVcdTYwMjdcdUZGMENcdTlFRDhcdThCQTRcdTUwM0NcdUZGMUE5OTk5OTk5OVx1RkYwQ1xuICAvLyAgIH0sXG4gIC8vIF0sXG4gIC8vIFx1NTJBOFx1NjAwMVx1NjgwN1x1OTg5OFx1RkYwQ1x1NUI5OFx1N0Y1MVx1RkYxQWh0dHBzOi8vbW9lZnlpdC5naXRodWIuaW8vbW9lZnktdnVlcHJlc3MvcGFja2FnZXMvZHluYW1pYy10aXRsZS5odG1sXG4gIFtcbiAgICAnZHluYW1pYy10aXRsZScsXG4gICAge1xuICAgICAgc2hvd0ljb246ICcvZmF2aWNvbi5pY28nLFxuICAgICAgc2hvd1RleHQ6ICdcdTMwRkUoXHUyMjY3XHUyNUJEXHUyMjY2KilvXHU2QjIyXHU4RkNFXHU1NkRFXHU2NzY1XHVGRjAxJyxcbiAgICAgIGhpZGVJY29uOiAnL2ZhaWx1cmUuaWNvJyxcbiAgICAgIGhpZGVUZXh0OiAnXHUwQ0E1X1x1MENBNVx1NEUwRFx1ODk4MVx1OEQ3MFx1NTQ0MFx1RkYwMScsXG4gICAgICByZWNvdmVyVGltZTogMjAwMCwgICAvLyAgXHU2MzAxXHU3RUVEXHU2NUY2XHU5NUY0XG4gICAgfSxcbiAgXSxcbiAgLy8gdnVlcHJlc3MtcGx1Z2luLXRhYnNcdTMwMDJcdTVCOThcdTdGNTFcdUZGMUFodHRwczovL2dpdGh1Yi5jb20vcHNrb3JkaWxha2lzL3Z1ZXByZXNzLXBsdWdpbi10YWJzXG4gIFsndGFicyddLFxuXVxuXG5cbiIsICIvLyBcdTc2N0VcdTVFQTZcdTdFREZcdThCQTFcdUZGMENcdThCRjdcdTUzQkJcdThCRTVcdTVCOThcdTdGNTFcdTgzQjdcdTUzRDZcdTgxRUFcdTVERjFcdTc2ODRcdTRFRTNcdTc4MDFcdUZGMENcdThGRDlcdTY4MzdcdTVDMzFcdTgwRkRcdTdFREZcdThCQTFcdThDMDFcdThCQkZcdTk1RUVcdTRGNjBcdTc2ODRcdTdGNTFcdTdBRDlcbi8vIGZ1bmN0aW9uIFx1NTNFRlx1NEVFNVx1NEY3Rlx1NzUyOCB0YWIgXHU5NTJFXHU3RjI5XHU4RkRCXHVGRjBDXHU0RTBEXHU0RjFBXHU1QkZDXHU4MUY0XHU5ODc1XHU5NzYyXHU0RTBBXHU2NzA5XHU1OTFBXHU0RTJBXHU3QTdBXHU2ODNDXG5jb25zdCBiYWlkdXRqOiBzdHJpbmcgPSBgdmFyIF9obXQgPSBfaG10IHx8IFtdO1xuICAgICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBobSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBobS5zcmMgPSBcImh0dHBzOi8vaG0uYmFpZHUuY29tL2htLmpzPzI2N2M1NjgwYzJmZmI0NjhjYTI5YzQ1ZmZlNjgwMWRhXCI7IFxuICAgICAgICAgICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcbiAgICAgICAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaG0sIHMpO1xuICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgYDtcblxuZXhwb3J0IGRlZmF1bHQgYmFpZHV0ajsiLCAiaW1wb3J0IHsgSGVhZFRhZ3MgfSBmcm9tICd2dWVwcmVzcy9jb25maWcnO1xuaW1wb3J0IGJhaWR1dGogZnJvbSAnLi4vY29tbW9uL2JhaWR1dGouanMnO1xuXG4vLyBoZWFkXG5leHBvcnQgZGVmYXVsdCA8SGVhZFRhZ3M+W1xuICAvLyBcdTZDRThcdTUxNjVcdTUyMzBcdTk4NzVcdTk3NjI8aGVhZD4gXHU0RTJEXHU3Njg0XHU2ODA3XHU3QjdFXHVGRjBDXHU2ODNDXHU1RjBGW3RhZ05hbWUsIHsgYXR0ck5hbWU6IGF0dHJWYWx1ZSB9LCBpbm5lckhUTUw/XVxuICBbJ2xpbmsnLCB7IHJlbDogJ3Nob3J0Y3V0IGljb24nLCBocmVmOiAnL2ltZy9mYXZpY29uLmljbycgfV0sIC8vZmF2aWNvbnNcdUZGMENcdThENDRcdTZFOTBcdTY1M0VcdTU3MjhwdWJsaWNcdTY1ODdcdTRFRjZcdTU5MzlcblxuICBbJ2xpbmsnLCB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiAnLy9hdC5hbGljZG4uY29tL3QvZm9udF8zMTE0OTc4X3FlMGIzOW5vNzYuY3NzJyB9XSwgLy8gXHU5NjNGXHU5MUNDXHU1NzI4XHU3RUJGXHU3N0UyXHU5MUNGXHU1RTkzXG4gIFsnbWV0YScsIHsgbmFtZTogJ3JlZmVycmVyJywgY29udGVudDogJ25vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlJyB9XSwgIC8vIFx1ODlFM1x1NTFCMyBDaHJvbWUgXHU3RjUxXHU3QUQ5XHU3RURGXHU4QkExXHU0RTBEXHU1MUM2XHU3ODZFXHU5NUVFXHU5ODk4XG5cbiAgWydub3NjcmlwdCcsIHt9LCAnPG1ldGEgaHR0cC1lcXVpdj1cInJlZnJlc2hcIiBjb250ZW50PVwiMDsgdXJsPWh0dHBzOi8vd3d3LnlvdW5na2J0LmNuL25vc2NyaXB0L1wiPjxzdHlsZT4udGhlbWUtdmRvaW5nLWNvbnRlbnQgeyBkaXNwbGF5Om5vbmUgfSddLCAgLy8gXHU3OUMxXHU1QkM2XHU2NTg3XHU3QUUwXHU2QTIxXHU1NzU3XHU5NzAwXHU4OTgxXG5cbiAgW1xuICAgICdtZXRhJyxcbiAgICB7XG4gICAgICBuYW1lOiAna2V5d29yZHMnLFxuICAgICAgY29udGVudDogJ1lvdW5nIEtidFx1NEUyQVx1NEVCQVx1NTM1QVx1NUJBMiwgVnVlUHJlc3NcdTY0MkRcdTVFRkEsIFx1NUI2Nlx1NEU2MEphdmFcdTMwMDFXZWJcdTMwMDFcdTY4NDZcdTY3QjZcdTMwMDFcdTVGQUVcdTY3MERcdTUyQTFcdTMwMDFcdTVERTVcdTUxNzdcdTMwMDFcdTUyNERcdTdBRUZcdTdCNDlcdTc2RjhcdTUxNzNcdTc3RTVcdThCQzYsIFx1OEJCMFx1NUY1NVx1NzUxRlx1NkQzQlx1NTQ4Q1x1NjI4MFx1NjcyRlx1OERFRlx1N0EwQlx1MzAwMicsXG4gICAgfSxcbiAgXSxcbiAgWydtZXRhJywgeyBuYW1lOiAndGhlbWUtY29sb3InLCBjb250ZW50OiAnIzExYThjZCcgfV0sIC8vIFx1NzlGQlx1NTJBOFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NEUzQlx1OTg5OFx1OTg5Q1x1ODI3MlxuXG4gIC8vIFx1NEUwQlx1OTc2Mlx1NTZEQlx1NEUyQSBzY3JpcHQgXHU2NjJGIGRlbW8tYmxvY2sgXHU2M0QyXHU0RUY2XHU3NTI4XHU1MjMwXHVGRjBDXHU0RjQ2XHU2NjJGXHU1NkUwXHU0RTNBXHU1QkZDXHU4MjJBXHU2ODBGXHU1MTdDXHU1QkI5XHU5NUVFXHU5ODk4XHVGRjBDXHU0RTBEXHU1MThEXHU0RjdGXHU3NTI4XG4gIC8vIFsnc2NyaXB0JywgeyBzcmM6ICdodHRwczovL3VucGtnLnpoaW1nLmNvbS9yZWFjdC91bWQvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnIH1dLFxuICAvLyBbJ3NjcmlwdCcsIHsgc3JjOiAnaHR0cHM6Ly91bnBrZy56aGltZy5jb20vcmVhY3QtZG9tL3VtZC9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnIH1dLFxuICAvLyBbJ3NjcmlwdCcsIHsgc3JjOiAnaHR0cHM6Ly91bnBrZy56aGltZy5jb20vdnVlL2Rpc3QvdnVlLm1pbi5qcycgfV0sXG4gIC8vIFsnc2NyaXB0JywgeyBzcmM6ICdodHRwczovL3VucGtnLnpoaW1nLmNvbS9AYmFiZWwvc3RhbmRhbG9uZS9iYWJlbC5taW4uanMnIH1dLFxuICAvLyBUd2lrb28gXHU4QkM0XHU4QkJBXHU3Q0ZCXHU3RURGXG4gIFsnc2NyaXB0JywgeyBzcmM6ICdodHRwczovL2Nkbi5zdGF0aWNmaWxlLm9yZy90d2lrb28vMS42LjcvdHdpa29vLmFsbC5taW4uanMnIH1dLFxuXG4gIC8vIFx1NzY3RVx1NUVBNlx1N0VERlx1OEJBMSBqc1xuICBbJ3NjcmlwdCcsIHt9LCBiYWlkdXRqXSxcblxuICAvKiAgW1xuICAgICAnc2NyaXB0JyxcbiAgICAge1xuICAgICAgICdkYXRhLWFkLWNsaWVudCc6ICdjYS1wdWItNzgyODMzMzcyNTk5MzU1NCcsXG4gICAgICAgYXN5bmM6ICdhc3luYycsXG4gICAgICAgc3JjOiAnaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanMnLFxuICAgICB9LFxuICAgXSwgKi8gLy8gXHU3RjUxXHU3QUQ5XHU1MTczXHU4MDU0R29vZ2xlIEFkU2Vuc2UgXHU0RTBFIGh0bWxcdTY4M0NcdTVGMEZcdTVFN0ZcdTU0NEFcdTY1MkZcdTYzMDFcbl1cbiIsICIvLyBcdTVGMDBcdTUzRDFcdTYzMDdcdTUzNTdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGV4dDogJ1x1NUYwMFx1NTNEMScsIGxpbms6ICcvZGV2LWd1aWRlLycsXG4gIGl0ZW1zOiBbXG4gICAgeyB0ZXh0OiAnXHU4QkJFXHU4QkExXHU2QTIxXHU1RjBGJywgbGluazogJy9kZXNpZ24tcGF0dGVybi8nIH0sXG4gICAgeyB0ZXh0OiAnXHU3Qjk3XHU2Q0Q1JywgbGluazogJy9hbGdvcml0aG0vJyB9LFxuICBdXG59IiwgIi8vIFx1NURFNVx1NTE3N1x1NUJGQ1x1ODIyQVx1NjgwRlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHRleHQ6ICdcdTUyNERcdTdBRUZcdTU3RkFcdTc4NDAnLCBsaW5rOiAnL2Jhc2ljcy8nLFxuICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdIdG1sJyxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdDc3MnLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0pzJyxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgXVxufVxuIiwgIi8vIFx1NURFNVx1NTE3N1x1NUJGQ1x1ODIyQVx1NjgwRlxuZXhwb3J0IGRlZmF1bHQge1xuICB0ZXh0OiAnXHU1REU1XHU1MTc3JywgbGluazogJy90b29sLycsXG4gIGl0ZW1zOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1x1N0JBMVx1NzQwNicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdNYXZlbicsIGxpbms6ICcvbWF2ZW4vJyB9LFxuICAgICAgICB7IHRleHQ6ICdHaXQnLCBsaW5rOiAnL2dpdC8nIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTkwRThcdTdGNzInLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnTGludXgnLCBsaW5rOiAnL2xpbnV4LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRG9ja2VyJywgbGluazogJy9kb2NrZXIvJyB9LFxuICAgICAgICB7IHRleHQ6ICdKZW5raW5zJywgbGluazogJy9qZW5raW5zLycgfSxcbiAgICAgIF1cbiAgICB9LFxuICBdXG59IiwgIi8vIFx1NTI0RFx1N0FFRlx1NUJGQ1x1ODIyQVxuZXhwb3J0IGRlZmF1bHQge1xuICB0ZXh0OiAnXHU1MjREXHU3QUVGJywgbGluazogJy9mcm9udC8nLFxuICBpdGVtczogW1xuICAgIC8vIHtcbiAgICAvLyAgIHRleHQ6ICdcdTU3RkFcdTc4NDAnLFxuICAgIC8vICAgaXRlbXM6IFtcbiAgICAvLyAgICAgeyB0ZXh0OiAnSHRtbCcsIGxpbms6ICcvaHRtbC8nIH0sXG4gICAgLy8gICAgIHsgdGV4dDogJ2NzcycsIGxpbms6ICcvY3NzLycgfSxcbiAgICAvLyAgICAgeyB0ZXh0OiAnSmF2YVNjcmlwdCcsIGxpbms6ICcvamF2YXNjcmlwdC8nIH0sXG4gICAgLy8gICBdXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU4RkRCXHU5NjM2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIC8qIHsgdGV4dDogJ2pRdWVyeScsIGxpbms6ICcvanF1ZXJ5LycgfSxcbiAgICAgICAgeyB0ZXh0OiAnTm9kZScsIGxpbms6ICcvbm9kZS8nIH0sICovXG4gICAgICAgIHsgdGV4dDogJ1R5cGVTY3JpcHQnLCBsaW5rOiAnL3R5cGVzY3JpcHQvJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU2ODQ2XHU2N0I2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1JlYWN0JywgbGluazogJy9yZWFjdC8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1Z1ZTInLCBsaW5rOiAnL3Z1ZTIvJyB9LFxuICAgICAgICB7IHRleHQ6ICdWdWUzJywgbGluazogJy92dWUzLycgfSxcbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCAiLy8gXHU3RDIyXHU1RjE1XHU1QkZDXHU4MjJBXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRleHQ6ICdcdTdEMjJcdTVGMTUnLCBsaW5rOiAnL2FyY2hpdmVzLycsXG4gIGl0ZW1zOiBbXG4gICAgeyBcbiAgICAgIHRleHQ6ICdcdTY3MkNcdTdBRDknLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnXHU1MjA2XHU3QzdCJywgbGluazogJy9jYXRlZ29yaWVzLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU2ODA3XHU3QjdFJywgbGluazogJy90YWdzLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU1RjUyXHU2ODYzJywgbGluazogJy9hcmNoaXZlcy8nIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU2MjExXHU3Njg0JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1x1NjUzNlx1ODVDRicsIGxpbms6ICcvd2hlbGwvd2ViLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU1MTczXHU0RThFJywgbGluazogJy9hYm91dC93ZWJzaXRlL2ludHJvZHVjZS8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1Z1ZTItQWRtaW4nLCBsaW5rOiAnaHR0cHM6Ly92dWUyLWFkbWluLnlvdW5na2J0LmNuLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnVnVlMy1BZG1pblx1RkYwOFx1NUI4Q1x1NTU4NFx1RkYwOScsIGxpbms6ICdodHRwczovL3Z1ZTMtYWRtaW4ueW91bmdrYnQuY24vJyB9LFxuICAgICAgXVxuICAgIH0sXG4gIF1cbn1cblxuIiwgImV4cG9ydCBkZWZhdWx0IHtcbiAgdGV4dDogJ1x1NjZGNFx1NTkxQScsXG4gIGl0ZW1zOiBbXG4gICAgeyB0ZXh0OiAnXHU4RjZFXHU1QjUwXHU1REU1XHU1MTc3JywgbGluazogJy93aGVsbHMtdXNlLycgfSxcbiAgICB7IHRleHQ6ICdcdTk4NzlcdTc2RUVcdTVERTVcdTdBMEInLCBsaW5rOiAnL3Byb2plY3RzLycgfSxcbiAgICB7IHRleHQ6ICdcdTUzQ0JcdTYwQzVcdTk0RkVcdTYzQTUnLCBsaW5rOiAnL2ZyaWVuZHMvJyB9XG4gIF1cbn0iLCAiLy8gXHU1REU1XHU1MTc3XHU1QkZDXHU4MjJBXHU2ODBGXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGV4dDogJ0pTJywgbGluazogJy90b29sLycsXG4gICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1x1NTdGQVx1Nzg0MCcsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ01hdmVuJywgbGluazogJy9tYXZlbi8nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2l0JywgbGluazogJy9naXQvJyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdFUzYnLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdMaW51eCcsIGxpbms6ICcvbGludXgvJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0RvY2tlcicsIGxpbms6ICcvZG9ja2VyLycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdKZW5raW5zJywgbGluazogJy9qZW5raW5zLycgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICBdXG59XG4iLCAiLy8gbmF2XG5pbXBvcnQgZGV2ZWxvcGVyIGZyb20gJy4uL25hdi9kZXZlbG9wZXInXG5pbXBvcnQgYmFzaWNzIGZyb20gXCIuLi9uYXYvYmFzaWNzTmF2XCI7XG5pbXBvcnQgdG9vbE5hdiBmcm9tICcuLi9uYXYvdG9vbE5hdidcbmltcG9ydCBmcm9udEVuZCBmcm9tICcuLi9uYXYvZnJvbnRFbmQnXG5pbXBvcnQgaW5kZXhOYXYgZnJvbSAnLi4vbmF2L2luZGV4TmF2J1xuaW1wb3J0IG1vcmVOYXYgZnJvbSAnLi4vbmF2L21vcmVOYXYnXG5pbXBvcnQgSlNOYXYgZnJvbSBcIi4uL25hdi9KU05hdlwiO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gICAge1xuICAgICAgICB0ZXh0OiAnXHU5OTk2XHU5ODc1JywgbGluazogJy8nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRleHQ6ICdcdTVCRkNcdTgyMkFcdTdBRDknLCBsaW5rOiAnL25hdmlnYXRpb24vJ1xuICAgIH0sXG4gICAgYmFzaWNzLCAgIC8vIFx1NTI0RFx1N0FFRlx1NTdGQVx1Nzg0MFx1NUJGQ1x1ODIyQVxuICAgIEpTTmF2LCAgIC8vIEpTXHU1QkZDXHU4MjJBXG4gICAgZGV2ZWxvcGVyLCAgIC8vIFx1NUYwMFx1NTNEMVx1NUJGQ1x1ODIyQVxuICAgIHRvb2xOYXYsICAvLyBcdTVERTVcdTUxNzdcdTVCRkNcdTgyMkFcbiAgICBmcm9udEVuZCwgIC8vIFx1NTI0RFx1N0FFRlx1NUJGQ1x1ODIyQVxuICAgIG1vcmVOYXYsICAgLy8gXHU2NkY0XHU1OTFBXHU1QkZDXHU4MjJBXG4gICAgaW5kZXhOYXYsICAgLy9cdTdEMjJcdTVGMTVcdTVCRkNcdTgyMkFcbiAgICB7XG4gICAgICAgIHRleHQ6ICdcdTc1NTlcdThBMDBcdTUzM0EnLCBsaW5rOiAnL21lc3NhZ2UtYXJlYS8nXG4gICAgfSxcbl1cbiIsICIvL1x1NkNFOFx1NjEwRlx1RkYxQVx1NTk4Mlx1Njc5Q1x1NEZFRVx1NjUzOSBwZW5OYW1lIFx1NTQ4QyB0aXRsZVx1RkYwQ1x1OEJCMFx1NUY5N1x1NTI0RFx1NUY4MCBkb2NzL2luZGV4IFx1OTFDQ1x1N0IyQyA0IFx1ODg0Q1x1NEZFRVx1NjUzOVx1RkYwQ1x1NUMzRFx1OTFDRlx1N0VERlx1NEUwMFxuLy8gXHU5OTk2XHU5ODc1XHU1REU2XHU0RTBBXHU4OUQyIHwgXHU2NTg3XHU3QUUwXHU1M0YzXHU0RTBBXHU4OUQyXHU3Njg0XHU1NDBEXHU1QjU3XG5jb25zdCBwZW5OYW1lOiBzdHJpbmcgPSAnTWluZyc7XG4vLyBcdTk5OTZcdTk4NzVcdTVERTZcdTRFMEFcdTg5RDJcdTc2ODRcdTYzQ0ZcdThGRjBcdUZGMENcdTg4NTRcdTYzQTUgcGVuTmFtZVxuY29uc3QgdGl0bGU6IHN0cmluZyA9ICdcXCdzIGJsb2cnO1xuLy8gXHU2NTg3XHU3QUUwXHU1M0YzXHU0RTBBXHU4OUQyXHU3MEI5XHU1MUZCXHU1NDBEXHU1QjU3XHU3Njg0XHU4REYzXHU4RjZDXHU5NEZFXHU2M0E1XG5jb25zdCBsaW5rOiBzdHJpbmcgPSBcImh0dHBzOi8vd3d3LnlvdW5na2J0LmNuXCI7XG4vLyBcdTVFOTVcdTkwRThcdTc2ODQgfCBcdTU0MEVcdTc2ODRcdTYzQ0ZcdThGRjBcbmNvbnN0IGZvb3RlclRpdGxlOiBzdHJpbmcgPSAnYmxvZyc7XG4vLyBcdTU5MzRcdTUwQ0ZcdTU2RkVcdTcyNDdcbmNvbnN0IGF2YXRhcjogc3RyaW5nID0gJ2h0dHBzOi8vcGhvdG8tYWxidW0tMTMxNDE4OTg0Ni5jb3MuYXAtc2hhbmdoYWkubXlxY2xvdWQuY29tLzIwMjMwMzE3MTAzMzQ0My5wbmcnXG4vLyBcdTU5MzRcdTUwQ0ZcdTRFMEJcdTc2ODRcdTY2MzVcdTc5RjBcbmNvbnN0IG5hbWU6IHN0cmluZyA9ICdEYSBXdSdcbi8vIFx1NTkzNFx1NTBDRlx1NEUwQlx1NzY4NFx1N0I3RVx1NTQwRFxuY29uc3Qgc2xvZ2FuOiBzdHJpbmcgPSAnXHU2NzFEXHU1NzIzXHU3Njg0XHU0RjdGXHU1RjkyXHVGRjBDXHU2QjYzXHU1NzI4XHU4RDcwXHU1NDExXHU3RjE2XHU3QTBCXHU3Njg0XHU4MUYzXHU5QUQ4XHU2QkJGXHU1ODAyXHVGRjAxJztcblxuZXhwb3J0IHtcbiAgcGVuTmFtZSxcbiAgdGl0bGUsXG4gIGxpbmssXG4gIGZvb3RlclRpdGxlLFxuICBhdmF0YXIsXG4gIG5hbWUsXG4gIHNsb2dhblxufVxuIiwgImltcG9ydCB7IHBlbk5hbWUsIGZvb3RlclRpdGxlIH0gZnJvbSAnLi4vY29tbW9uL2luZm8nXG5cbmludGVyZmFjZSBGb290ZXIge1xuICBjcmVhdGVZZWFyOiBudW1iZXIsIC8vIFx1NTM1QVx1NUJBMlx1NTIxQlx1NUVGQVx1NUU3NFx1NEVGRFxuICBjb3B5cmlnaHRJbmZvOiBzdHJpbmcgLy8gXHU1MzVBXHU1QkEyXHU3MjQ4XHU2NzQzXHU0RkUxXHU2MDZGXHVGRjBDXHU2NTJGXHU2MzAxIGEgXHU2ODA3XHU3QjdFXG59XG5cbmV4cG9ydCBkZWZhdWx0IDxGb290ZXI+IHtcbiAgLy8gXHU5ODc1XHU4MTFBXHU0RkUxXHU2MDZGXG4gIGNyZWF0ZVllYXI6IDIwMjEsIFxuICBjb3B5cmlnaHRJbmZvOlxuICAgIHBlbk5hbWUgKyAnIHwgJyArIGZvb3RlclRpdGxlICsgJzxicj4gPGEgaHJlZj1cImh0dHA6Ly9iZWlhbi5taWl0Lmdvdi5jbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cdTY4NDJJQ1BcdTU5MDcyMDIxMDA5OTk0XHU1M0Y3PC9hPicsIFxufSIsICJpbXBvcnQgZnMgZnJvbSAnZnMnOyAvLyBcdTY1ODdcdTRFRjZcdTZBMjFcdTU3NTdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnOyAvLyBcdThERUZcdTVGODRcdTZBMjFcdTU3NTdcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInOyAvLyBGcm9udE1hdHRlclx1ODlFM1x1Njc5MFx1NTY2OCBodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9ncmF5LW1hdHRlclxuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJyAvLyBcdTU0N0RcdTRFRTRcdTg4NENcdTYyNTNcdTUzNzBcdTdGOEVcdTUzMTZcbmNvbnN0IGxvZyA9IGNvbnNvbGUubG9nXG5jb25zdCBkb2NzUm9vdCA9IHBhdGguam9pbihcIi9Vc2Vycy9kYXd1L0Rlc2t0b3AvTWluZy1ELVcuZ2l0aHViLmlvLW1hc3Rlci9kb2NzLy52dWVwcmVzcy93ZWJTaXRlSW5mb1wiLCAnLi4nLCAnLi4nLCAnLi4nLCAnZG9jcycpOyAvLyBkb2NzXHU2NTg3XHU0RUY2XHU4REVGXHU1Rjg0XG5cbi8qKlxuICogXHU4M0I3XHU1M0Q2XHU2NzJDXHU3QUQ5XHU3Njg0XHU2NTg3XHU3QUUwXHU2NTcwXHU2MzZFXG4gKiBcdTgzQjdcdTUzRDZcdTYyNDBcdTY3MDlcdTc2ODQgbWQgXHU2NTg3XHU2ODYzXHVGRjBDXHU1M0VGXHU0RUU1XHU2MzkyXHU5NjY0XHU2MzA3XHU1QjlBXHU3NkVFXHU1RjU1XHU0RTBCXHU3Njg0XHU2NTg3XHU2ODYzXG4gKi9cbmZ1bmN0aW9uIHJlYWRGaWxlTGlzdChleGNsdWRlRmlsZXM6IEFycmF5PHN0cmluZz4gPSBbJyddLCBkaXI6IHN0cmluZyA9IGRvY3NSb290LCBmaWxlc0xpc3Q6IEFycmF5PE9iamVjdD4gPSBbXSkge1xuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKGRpcik7XG4gIGZpbGVzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKGRpciwgaXRlbSk7XG4gICAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGZpbGVQYXRoKTtcbiAgICBpZiAoIShleGNsdWRlRmlsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGxvZyhjaGFsay55ZWxsb3coYGVycm9yOiBcdTRGMjBcdTUxNjVcdTc2ODRcdTUzQzJcdTY1NzBcdTRFMERcdTY2MkZcdTRFMDBcdTRFMkFcdTY1NzBcdTdFQzRcdTMwMDJgKSlcbiAgICB9XG4gICAgZXhjbHVkZUZpbGVzLmZvckVhY2goKGV4Y2x1ZGVGaWxlKSA9PiB7XG4gICAgICBpZiAoc3RhdC5pc0RpcmVjdG9yeSgpICYmIGl0ZW0gIT09ICcudnVlcHJlc3MnICYmIGl0ZW0gIT09ICdAcGFnZXMnICYmIGl0ZW0gIT09IGV4Y2x1ZGVGaWxlKSB7XG4gICAgICAgIHJlYWRGaWxlTGlzdChleGNsdWRlRmlsZXMsIHBhdGguam9pbihkaXIsIGl0ZW0pLCBmaWxlc0xpc3QpOyAgLy9cdTkwMTJcdTVGNTJcdThCRkJcdTUzRDZcdTY1ODdcdTRFRjZcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYXRoLmJhc2VuYW1lKGRpcikgIT09ICdkb2NzJykgeyAvLyBcdThGQzdcdTZFRTQgZG9jc1x1NzZFRVx1NUY1NVx1N0VBN1x1NEUwQlx1NzY4NFx1NjU4N1x1NEVGNlxuXG4gICAgICAgICAgY29uc3QgZmlsZU5hbWVBcnIgPSBwYXRoLmJhc2VuYW1lKGZpbGVQYXRoKS5zcGxpdCgnLicpXG4gICAgICAgICAgbGV0IG5hbWUgPSBudWxsLCB0eXBlID0gbnVsbDtcbiAgICAgICAgICBpZiAoZmlsZU5hbWVBcnIubGVuZ3RoID09PSAyKSB7IC8vIFx1NkNBMVx1NjcwOVx1NUU4Rlx1NTNGN1x1NzY4NFx1NjU4N1x1NEVGNlxuICAgICAgICAgICAgbmFtZSA9IGZpbGVOYW1lQXJyWzBdXG4gICAgICAgICAgICB0eXBlID0gZmlsZU5hbWVBcnJbMV1cbiAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVOYW1lQXJyLmxlbmd0aCA9PT0gMykgeyAvLyBcdTY3MDlcdTVFOEZcdTUzRjdcdTc2ODRcdTY1ODdcdTRFRjZcbiAgICAgICAgICAgIG5hbWUgPSBmaWxlTmFtZUFyclsxXVxuICAgICAgICAgICAgdHlwZSA9IGZpbGVOYW1lQXJyWzJdXG4gICAgICAgICAgfSBlbHNlIHsgLy8gXHU4RDg1XHU4RkM3XHU0RTI0XHU0RTJBXHUyMDE4Llx1MjAxOVx1NzY4NFxuICAgICAgICAgICAgbG9nKGNoYWxrLnllbGxvdyhgd2FybmluZzogXHU4QkU1XHU2NTg3XHU0RUY2IFwiJHtmaWxlUGF0aH1cIiBcdTZDQTFcdTY3MDlcdTYzMDlcdTcxNjdcdTdFQTZcdTVCOUFcdTU0N0RcdTU0MERcdUZGMENcdTVDMDZcdTVGRkRcdTc1NjVcdTc1MUZcdTYyMTBcdTc2RjhcdTVFOTRcdTY1NzBcdTYzNkVcdTMwMDJgKSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ21kJykgeyAvLyBcdThGQzdcdTZFRTRcdTk3NUUgbWQgXHU2NTg3XHU0RUY2XG4gICAgICAgICAgICBmaWxlc0xpc3QucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIGZpbGVQYXRoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBmaWxlc0xpc3Q7XG59XG4vKipcbiAqIFx1ODNCN1x1NTNENlx1NjcyQ1x1N0FEOVx1NzY4NFx1NjU4N1x1N0FFMFx1NjAzQlx1NUI1N1x1NjU3MFxuICogXHU1M0VGXHU0RUU1XHU2MzkyXHU5NjY0XHU2N0QwXHU0RTJBXHU3NkVFXHU1RjU1XHU0RTBCXHU3Njg0IG1kIFx1NjU4N1x1Njg2M1x1NUI1N1x1NjU3MFxuICovXG5mdW5jdGlvbiByZWFkVG90YWxGaWxlV29yZHMoZXhjbHVkZUZpbGVzID0gWycnXSkge1xuICBjb25zdCBmaWxlc0xpc3QgPSByZWFkRmlsZUxpc3QoZXhjbHVkZUZpbGVzKTtcbiAgbGV0IHdvcmRDb3VudCA9IDA7XG4gIGZpbGVzTGlzdC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChpdGVtLmZpbGVQYXRoKTtcbiAgICBsZXQgbGVuID0gY291bnRlcihjb250ZW50KTtcbiAgICB3b3JkQ291bnQgKz0gbGVuWzBdICsgbGVuWzFdO1xuICB9KTtcbiAgaWYgKHdvcmRDb3VudCA8IDEwMDApIHtcbiAgICByZXR1cm4gd29yZENvdW50O1xuICB9XG4gIHJldHVybiBNYXRoLnJvdW5kKHdvcmRDb3VudCAvIDEwMCkgLyAxMCArICdrJztcbn1cbi8qKlxuICogXHU4M0I3XHU1M0Q2XHU2QkNGXHU0RTAwXHU0RTJBXHU2NTg3XHU3QUUwXHU3Njg0XHU1QjU3XHU2NTcwXG4gKiBcdTUzRUZcdTRFRTVcdTYzOTJcdTk2NjRcdTY3RDBcdTRFMkFcdTc2RUVcdTVGNTVcdTRFMEJcdTc2ODQgbWQgXHU2NTg3XHU2ODYzXHU1QjU3XHU2NTcwXG4gKi9cbmZ1bmN0aW9uIHJlYWRFYWNoRmlsZVdvcmRzKGV4Y2x1ZGVGaWxlczogQXJyYXk8c3RyaW5nPiA9IFsnJ10sIGNuOiBudW1iZXIsIGVuOiBudW1iZXIpIHtcbiAgY29uc3QgZmlsZXNMaXN0V29yZHMgPSBbXTtcbiAgY29uc3QgZmlsZXNMaXN0ID0gcmVhZEZpbGVMaXN0KGV4Y2x1ZGVGaWxlcyk7XG4gIGZpbGVzTGlzdC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChpdGVtLmZpbGVQYXRoKTtcbiAgICBsZXQgbGVuID0gY291bnRlcihjb250ZW50KTtcbiAgICAvLyBcdThCQTFcdTdCOTdcdTk4ODRcdThCQTFcdTc2ODRcdTk2MDVcdThCRkJcdTY1RjZcdTk1RjRcbiAgICBsZXQgcmVhZGluZ1RpbWUgPSByZWFkVGltZShsZW4sIGNuLCBlbik7XG4gICAgbGV0IHdvcmRzQ291bnQ6IGFueSA9IDA7XG4gICAgd29yZHNDb3VudCA9IGxlblswXSArIGxlblsxXTtcbiAgICBpZiAod29yZHNDb3VudCA+PSAxMDAwKSB7XG4gICAgICB3b3Jkc0NvdW50ID0gTWF0aC5yb3VuZCh3b3Jkc0NvdW50IC8gMTAwKSAvIDEwICsgJ2snO1xuICAgIH1cbiAgICAvLyBmaWxlTWF0dGVyT2JqID0+IHtjb250ZW50OidcdTUyNTRcdTk2NjRmcm9udG1hdHRlclx1NTQwRVx1NzY4NFx1NjU4N1x1NEVGNlx1NTE4NVx1NUJCOVx1NUI1N1x1N0IyNlx1NEUzMicsIGRhdGE6ezxmcm9udG1hdHRlclx1NUJGOVx1OEM2MT59LCAuLi59XG4gICAgY29uc3QgZmlsZU1hdHRlck9iaiA9IG1hdHRlcihjb250ZW50LCB7fSk7XG4gICAgY29uc3QgbWF0dGVyRGF0YSA9IGZpbGVNYXR0ZXJPYmouZGF0YTtcbiAgICBmaWxlc0xpc3RXb3Jkcy5wdXNoKHsgLi4uaXRlbSwgd29yZHNDb3VudCwgcmVhZGluZ1RpbWUsIC4uLm1hdHRlckRhdGEgfSk7XG4gIH0pO1xuICByZXR1cm4gZmlsZXNMaXN0V29yZHM7XG59XG5cbi8qKlxuICogXHU4QkExXHU3Qjk3XHU5ODg0XHU4QkExXHU3Njg0XHU5NjA1XHU4QkZCXHU2NUY2XHU5NUY0XG4gKi9cbmZ1bmN0aW9uIHJlYWRUaW1lKGxlbjogQXJyYXk8bnVtYmVyPiwgY246IG51bWJlciA9IDMwMCwgZW46IG51bWJlciA9IDE2MCkge1xuICBsZXQgcmVhZGluZ1RpbWUgPSBsZW5bMF0gLyBjbiArIGxlblsxXSAvIGVuO1xuICBpZiAocmVhZGluZ1RpbWUgPiA2MCAmJiByZWFkaW5nVGltZSA8IDYwICogMjQpIHsgICAvLyBcdTU5MjdcdTRFOEVcdTRFMDBcdTRFMkFcdTVDMEZcdTY1RjZcdUZGMENcdTVDMEZcdTRFOEVcdTRFMDBcdTU5MjlcbiAgICBsZXQgaG91ciA9IE1hdGgudHJ1bmMocmVhZGluZ1RpbWUgLyA2MCk7XG4gICAgbGV0IG1pbnV0ZSA9IE1hdGgudHJ1bmMocmVhZGluZ1RpbWUgLSBob3VyICogNjApO1xuICAgIGlmIChtaW51dGUgPT09IDApIHtcbiAgICAgIHJldHVybiBob3VyICsgJ2gnO1xuICAgIH1cbiAgICByZXR1cm4gaG91ciArICdoJyArIG1pbnV0ZSArICdtJztcbiAgfSBlbHNlIGlmIChyZWFkaW5nVGltZSA+IDYwICogMjQpIHsgICAgICAvLyBcdTU5MjdcdTRFOEVcdTRFMDBcdTU5MjlcbiAgICBsZXQgZGF5ID0gTWF0aC50cnVuYyhyZWFkaW5nVGltZSAvICg2MCAqIDI0KSk7XG4gICAgbGV0IGhvdXIgPSBNYXRoLnRydW5jKChyZWFkaW5nVGltZSAtIGRheSAqIDI0ICogNjApIC8gNjApO1xuICAgIGlmIChob3VyID09PSAwKSB7XG4gICAgICByZXR1cm4gZGF5ICsgJ2QnO1xuICAgIH1cbiAgICByZXR1cm4gZGF5ICsgJ2QnICsgaG91ciArICdoJztcbiAgfVxuICByZXR1cm4gcmVhZGluZ1RpbWUgPCAxID8gJzEnIDogTWF0aC50cnVuYyhyZWFkaW5nVGltZSAqIDEwKSAvIDEwICsgJ20nOyAgIC8vIFx1NTNENlx1NEUwMFx1NEY0RFx1NUMwRlx1NjU3MFxufVxuXG4vKipcbiAqIFx1OEJGQlx1NTNENlx1NjU4N1x1NEVGNlx1NTE4NVx1NUJCOVxuICovXG5mdW5jdGlvbiBnZXRDb250ZW50KGZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgJ3V0ZjgnKTtcbn1cbi8qKlxuICogXHU4M0I3XHU1M0Q2XHU2NTg3XHU0RUY2XHU1MTg1XHU1QkI5XHU3Njg0XHU1QjU3XHU2NTcwXG4gKiBjblx1RkYxQVx1NEUyRFx1NjU4N1xuICogZW5cdUZGMUFcdTRFMDBcdTY1NzRcdTUzRTVcdTgyRjFcdTY1ODdcdUZGMDhcdTZDQTFcdTY3MDlcdTdBN0FcdTY4M0NcdTk2OTRcdTVGMDBcdTc2ODRcdTgyRjFcdTY1ODdcdTRFM0EgMSBcdTRFMkFcdUZGMDlcbiAqL1xuZnVuY3Rpb24gY291bnRlcihjb250ZW50OiBzdHJpbmcpIHtcbiAgY29uc3QgY24gPSAoY29udGVudC5tYXRjaCgvW1xcdTRFMDAtXFx1OUZBNV0vZykgfHwgW10pLmxlbmd0aDtcbiAgY29uc3QgZW4gPSAoY29udGVudC5yZXBsYWNlKC9bXFx1NEUwMC1cXHU5RkE1XS9nLCAnJykubWF0Y2goL1thLXpBLVowLTlfXFx1MDM5Mi1cXHUwM2M5XFx1MDQwMC1cXHUwNEZGXSt8W1xcdTRFMDAtXFx1OUZGRlxcdTM0MDAtXFx1NGRiZlxcdWY5MDAtXFx1ZmFmZlxcdTMwNDAtXFx1MzA5ZlxcdWFjMDAtXFx1ZDdhZlxcdTA0MDAtXFx1MDRGRl0rfFtcXHUwMEU0XFx1MDBDNFxcdTAwRTVcXHUwMEM1XFx1MDBGNlxcdTAwRDZdK3xcXHcrL2cpIHx8IFtdKS5sZW5ndGg7XG4gIHJldHVybiBbY24sIGVuXTtcbn1cblxuZXhwb3J0IHtcbiAgcmVhZEZpbGVMaXN0LFxuICByZWFkVG90YWxGaWxlV29yZHMsXG4gIHJlYWRFYWNoRmlsZVdvcmRzLFxufVxuIiwgImltcG9ydCB7IFZkb2luZ1RoZW1lQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLXZkb2luZy90eXBlc1wiO1xuXG5pbXBvcnQgbmF2IGZyb20gJy4uL2NvbW1vbi9uYXYnO1xuaW1wb3J0IGZvb3RlciBmcm9tICcuLi9jb21tb24vZm9vdGVyJztcbi8vIGltcG9ydCBodG1sTW9kdWxlcyBmcm9tICcuL2h0bWxNb2R1bGVzJyAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTYzRDJcdTUxNjVcdTc2ODRodG1sXHU1NzU3XG5pbXBvcnQgeyByZWFkRmlsZUxpc3QsIHJlYWRUb3RhbEZpbGVXb3JkcywgcmVhZEVhY2hGaWxlV29yZHMgfSBmcm9tICcuLi93ZWJTaXRlSW5mby9yZWFkRmlsZSc7XG5pbXBvcnQgeyBwZW5OYW1lLCBsaW5rLCBhdmF0YXIsIG5hbWUsIHNsb2dhbiB9IGZyb20gJy4uL2NvbW1vbi9pbmZvJztcblxuLy8gXHU0RTNCXHU5ODk4XHU5MTREXHU3RjZFXG5leHBvcnQgZGVmYXVsdCA8VmRvaW5nVGhlbWVDb25maWc+IHtcbiAgbmF2LCAvLyBcdTVCRkNcdTgyMkFcdTY4MEZcbiAgc2lkZWJhckRlcHRoOiAyLCAvLyBcdTRGQTdcdThGQjlcdTY4MEZcdTY2M0VcdTc5M0FcdTZERjFcdTVFQTZcdUZGMENcdTlFRDhcdThCQTQxXHVGRjBDXHU2NzAwXHU1OTI3Mlx1RkYwOFx1NjYzRVx1NzkzQVx1NTIzMGgzXHU2ODA3XHU5ODk4XHVGRjA5XG4gIGxvZ286IFwiL2ltZy9pbmRleC9sb2dvLnBuZ1wiLCAvLyBcdTVCRkNcdTgyMkFcdTY4MEZsb2dvXG4gIHJlcG86IFwiS2VsZS1CaW5ndGFuZy9LZWxlLUJpbmd0YW5nLmdpdGh1Yi5pb1wiLCAvLyBcdTVCRkNcdTgyMkFcdTY4MEZcdTUzRjNcdTRGQTdcdTc1MUZcdTYyMTBHaXRodWJcdTk0RkVcdTYzQTVcbiAgc2VhcmNoTWF4U3VnZ2VzdGlvbnM6IDEwLCAvLyBcdTY0MUNcdTdEMjJcdTdFRDNcdTY3OUNcdTY2M0VcdTc5M0FcdTY3MDBcdTU5MjdcdTY1NzBcbiAgbGFzdFVwZGF0ZWQ6IFwiXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0XCIsIC8vIFx1NUYwMFx1NTQyRlx1NjZGNFx1NjVCMFx1NjVGNlx1OTVGNFx1RkYwQ1x1NUU3Nlx1OTE0RFx1N0Y2RVx1NTI0RFx1N0YwMFx1NjU4N1x1NUI1NyAgIHN0cmluZyB8IGJvb2xlYW4gKFx1NTNENlx1NTAzQ1x1NEUzQWdpdFx1NjNEMFx1NEVBNFx1NjVGNlx1OTVGNClcbiAgZG9jc0RpcjogXCJkb2NzXCIsIC8vIFx1NjMwN1x1NUI5QVx1NjgzOVx1NzZFRVx1NUY1NVxuICBlZGl0TGlua3M6IGZhbHNlLCAvLyBcdTU0MkZcdTc1MjhcdTdGMTZcdThGOTFcbiAgZWRpdExpbmtUZXh0OiBcIlx1N0YxNlx1OEY5MVx1NkI2NFx1OTg3NVwiLFxuXG4gIC8vKioqIFx1NEVFNVx1NEUwQlx1OTE0RFx1N0Y2RVx1NjYyRlZkb2luZ1x1NEUzQlx1OTg5OFx1NjUzOVx1NTJBOFx1NTQ4Q1x1NjVCMFx1NTg5RVx1NzY4NFx1OTE0RFx1N0Y2RSAqKiovL1xuXG4gIC8vIGNhdGVnb3J5OiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU2MjUzXHU1RjAwXHU1MjA2XHU3QzdCXHU1MjlGXHU4MEZEXHVGRjBDXHU5RUQ4XHU4QkE0dHJ1ZVx1MzAwMiBcdTU5ODJcdTYyNTNcdTVGMDBcdUZGMENcdTRGMUFcdTUwNUFcdTc2ODRcdTRFOEJcdTYwQzVcdTY3MDlcdUZGMUExLiBcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdTc2ODRmcm9udG1hdHRlclx1NTMwNVx1NTQyQlx1NTIwNlx1N0M3Qlx1NUI1N1x1NkJCNSAyLlx1OTg3NVx1OTc2Mlx1NEUyRFx1NjYzRVx1NzkzQVx1NEUwRVx1NTIwNlx1N0M3Qlx1NzZGOFx1NTE3M1x1NzY4NFx1NEZFMVx1NjA2Rlx1NTQ4Q1x1NkEyMVx1NTc1NyAzLlx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1NTIwNlx1N0M3Qlx1OTg3NVx1OTc2Mlx1RkYwOFx1NTcyOEBwYWdlc1x1NjU4N1x1NEVGNlx1NTkzOVx1RkYwOVx1MzAwMlx1NTk4Mlx1NTE3M1x1OTVFRFx1RkYwQ1x1NTIxOVx1NTNDRFx1NEU0Qlx1MzAwMlxuICAvLyB0YWc6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTY4MDdcdTdCN0VcdTUyOUZcdTgwRkRcdUZGMENcdTlFRDhcdThCQTR0cnVlXHUzMDAyIFx1NTk4Mlx1NjI1M1x1NUYwMFx1RkYwQ1x1NEYxQVx1NTA1QVx1NzY4NFx1NEU4Qlx1NjBDNVx1NjcwOVx1RkYxQTEuIFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1NzY4NGZyb250bWF0dGVyXHU1MzA1XHU1NDJCXHU2ODA3XHU3QjdFXHU1QjU3XHU2QkI1IDIuXHU5ODc1XHU5NzYyXHU0RTJEXHU2NjNFXHU3OTNBXHU0RTBFXHU2ODA3XHU3QjdFXHU3NkY4XHU1MTczXHU3Njg0XHU0RkUxXHU2MDZGXHU1NDhDXHU2QTIxXHU1NzU3IDMuXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwXHU2ODA3XHU3QjdFXHU5ODc1XHU5NzYyXHVGRjA4XHU1NzI4QHBhZ2VzXHU2NTg3XHU0RUY2XHU1OTM5XHVGRjA5XHUzMDAyXHU1OTgyXHU1MTczXHU5NUVEXHVGRjBDXHU1MjE5XHU1M0NEXHU0RTRCXHUzMDAyXG4gIC8vIGFyY2hpdmU6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTVGNTJcdTY4NjNcdTUyOUZcdTgwRkRcdUZGMENcdTlFRDhcdThCQTR0cnVlXHUzMDAyIFx1NTk4Mlx1NjI1M1x1NUYwMFx1RkYwQ1x1NEYxQVx1NTA1QVx1NzY4NFx1NEU4Qlx1NjBDNVx1NjcwOVx1RkYxQTEuXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwXHU1RjUyXHU2ODYzXHU5ODc1XHU5NzYyXHVGRjA4XHU1NzI4QHBhZ2VzXHU2NTg3XHU0RUY2XHU1OTM5XHVGRjA5XHUzMDAyXHU1OTgyXHU1MTczXHU5NUVEXHVGRjBDXHU1MjE5XHU1M0NEXHU0RTRCXHUzMDAyXG4gIGNhdGVnb3J5VGV4dDogXCJcdTk2OEZcdTdCMTRcIiwgLy8gXHU3ODhFXHU3MjQ3XHU1MzE2XHU2NTg3XHU3QUUwXHVGRjA4X3Bvc3RzXHU2NTg3XHU0RUY2XHU1OTM5XHU3Njg0XHU2NTg3XHU3QUUwXHVGRjA5XHU5ODg0XHU4QkJFXHU3NTFGXHU2MjEwXHU3Njg0XHU1MjA2XHU3QzdCXHU1MDNDXHVGRjBDXHU5RUQ4XHU4QkE0J1x1OTY4Rlx1N0IxNCdcblxuICAvLyBwYWdlU3R5bGU6ICdjYXJkJywgLy8gXHU5ODc1XHU5NzYyXHU5OENFXHU2ODNDXHVGRjBDY2FyZCBcdTY1RjZcdTgwQ0NcdTY2NkZcdTY2M0VcdTc5M0FcdTcwNzBcdTgyNzJcdTg4NkNcdTYyNThcdTUxRkFcdTUzNjFcdTcyNDdcdTY4MzdcdTVGMEZcdUZGMENsaW5lIFx1NjVGNlx1ODBDQ1x1NjY2Rlx1NjYzRVx1NzkzQVx1N0VBRlx1ODI3Mlx1RkYwQ1x1NUU3Nlx1NEUxNFx1OTBFOFx1NTIwNlx1NkEyMVx1NTc1N1x1NUUyNlx1N0VCRlx1Njc2MVx1OEZCOVx1Njg0Nlx1RkYwOFx1NjcyQVx1OEJCRVx1N0Y2RSBib2R5QmdJbWcgXHU2NUY2XHU2MjREXHU3NTFGXHU2NTQ4XHVGRjA5XHVGRjBDXHU5RUQ4XHU4QkE0IGNhcmRcbiAgLy8gZGVmYXVsdE1vZGU6ICdhdXRvJywgLy8gXHU5RUQ4XHU4QkE0XHU0RTNCXHU5ODk4XHU1OTE2XHU4OUMyXHU2QTIxXHU1RjBGXHVGRjBDXHU3NTI4XHU2MjM3XHU2NzJBXHU1NzI4XHU5ODc1XHU5NzYyXHU2MjRCXHU1MkE4XHU0RkVFXHU2NTM5XHU4RkM3XHU2QTIxXHU1RjBGXHU2NUY2XHU2MjREXHU3NTFGXHU2NTQ4XHVGRjBDXHU1NDI2XHU1MjE5XHU0RUU1XHU3NTI4XHU2MjM3XHU4QkJFXHU3RjZFXHU3Njg0XHU2QTIxXHU1RjBGXHU0RTNBXHU1MUM2XHVGRjBDXHU1M0VGXHU5MDA5XHU1MDNDXHVGRjFBJ2F1dG8nIHwgJ2xpZ2h0JyB8ICdkYXJrJyB8ICdyZWFkJ1xuXG4gIGJvZHlCZ0ltZzogXCIvaW1nL2luZGV4L2JnLmpwZ1wiLFxuICAvLyBib2R5QmdJbWc6IFtcbiAgLy8gICAnaHR0cHM6Ly9jZG4uc3RhdGljYWx5LmNvbS9naC94dWdhb3lpL2ltYWdlX3N0b3JlQG1hc3Rlci9ibG9nLzIwMjAwNTA3MTc1ODI4LmpwZWcnLFxuICAvLyAgICdodHRwczovL2Nkbi5zdGF0aWNhbHkuY29tL2doL3h1Z2FveWkvaW1hZ2Vfc3RvcmVAbWFzdGVyL2Jsb2cvMjAyMDA1MDcxNzU4NDUuanBlZycsXG4gIC8vICAgJ2h0dHBzOi8vY2RuLnN0YXRpY2FseS5jb20vZ2gveHVnYW95aS9pbWFnZV9zdG9yZUBtYXN0ZXIvYmxvZy8yMDIwMDUwNzE3NTg0Ni5qcGVnJ1xuICAvLyBdLCAvLyBib2R5XHU4MENDXHU2NjZGXHU1OTI3XHU1NkZFKFx1NTM3M1x1NjU3NFx1NEUyQVx1OTg3NVx1OTc2Mlx1NzY4NFx1ODBDQ1x1NjY2Rlx1NTZGRSlcdUZGMENcdTlFRDhcdThCQTRcdTY1RTBcdTMwMDIgXHU1MzU1XHU1RjIwXHU1NkZFXHU3MjQ3IFN0cmluZyB8fCBcdTU5MUFcdTVGMjBcdTU2RkVcdTcyNDcgQXJyYXksIFx1NTkxQVx1NUYyMFx1NTZGRVx1NzI0N1x1NjVGNlx1NkJDRlx1OTY5NDE1XHU3OUQyXHU2MzYyXHU0RTAwXHU1RjIwXHUzMDAyXG4gIGJvZHlCZ0ltZ09wYWNpdHk6IDEsIC8vIGJvZHlcdTgwQ0NcdTY2NkZcdTU2RkVcdTkwMEZcdTY2MEVcdTVFQTZcdUZGMENcdTkwMDlcdTUwM0MgMCB+IDEuMCwgXHU5RUQ4XHU4QkE0MC41XG5cbiAgLy8gdGl0bGVCYWRnZTogZmFsc2UsIC8vIFx1NjU4N1x1N0FFMFx1NjgwN1x1OTg5OFx1NTI0RFx1NzY4NFx1NTZGRVx1NjgwN1x1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcbiAgLy8gdGl0bGVCYWRnZUljb25zOiBbIC8vIFx1NjU4N1x1N0FFMFx1NjgwN1x1OTg5OFx1NTI0RFx1NTZGRVx1NjgwN1x1NzY4NFx1NTczMFx1NTc0MFx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQlx1OTg5OFx1NTE4NVx1N0Y2RVx1NTZGRVx1NjgwN1xuICAvLyAgICdcdTU2RkVcdTY4MDdcdTU3MzBcdTU3NDAxJyxcbiAgLy8gICAnXHU1NkZFXHU2ODA3XHU1NzMwXHU1NzQwMidcbiAgLy8gXSxcbiAgLy8gY29udGVudEJnU3R5bGU6IDEsIC8vIFx1NjU4N1x1N0FFMFx1NTE4NVx1NUJCOVx1NTc1N1x1NzY4NFx1ODBDQ1x1NjY2Rlx1OThDRVx1NjgzQ1x1RkYwQ1x1OUVEOFx1OEJBNFx1NjVFMC4gMSA9PiBcdTY1QjlcdTY4M0MgfCAyID0+IFx1NkEyQVx1N0VCRiB8IDMgPT4gXHU3QUQ2XHU3RUJGIHwgNCA9PiBcdTVERTZcdTY1OUNcdTdFQkYgfCA1ID0+IFx1NTNGM1x1NjU5Q1x1N0VCRiB8IDYgPT4gXHU3MEI5XHU3MkI2XG5cbiAgLy8gdXBkYXRlQmFyOiB7IC8vIFx1NjcwMFx1OEZEMVx1NjZGNFx1NjVCMFx1NjgwRlxuICAvLyAgIHNob3dUb0FydGljbGU6IHRydWUsIC8vIFx1NjYzRVx1NzkzQVx1NTIzMFx1NjU4N1x1N0FFMFx1OTg3NVx1NUU5NVx1OTBFOFx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcbiAgLy8gICBtb3JlQXJ0aWNsZTogJy9hcmNoaXZlcycgLy8gXHUyMDFDXHU2NkY0XHU1OTFBXHU2NTg3XHU3QUUwXHUyMDFEXHU4REYzXHU4RjZDXHU3Njg0XHU5ODc1XHU5NzYyXHVGRjBDXHU5RUQ4XHU4QkE0Jy9hcmNoaXZlcydcbiAgLy8gfSxcbiAgLy8gcmlnaHRNZW51QmFyOiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBXHU1M0YzXHU0RkE3XHU2NTg3XHU3QUUwXHU1OTI3XHU3RUIyXHU2ODBGXHVGRjBDXHU5RUQ4XHU4QkE0dHJ1ZSAoXHU1QzRGXHU1QkJEXHU1QzBGXHU0RThFMTMwMHB4XHU0RTBCXHU2NUUwXHU4QkJBXHU1OTgyXHU0RjU1XHU5MEZEXHU0RTBEXHU2NjNFXHU3OTNBKVxuICAvLyBzaWRlYmFyT3BlbjogZmFsc2UsIC8vIFx1NTIxRFx1NTlDQlx1NzJCNlx1NjAwMVx1NjYyRlx1NTQyNlx1NjI1M1x1NUYwMFx1NEZBN1x1OEZCOVx1NjgwRlx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcbiAgLy8gcGFnZUJ1dHRvbjogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1NUZFQlx1NjM3N1x1N0ZGQlx1OTg3NVx1NjMwOVx1OTRBRVx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcblxuICBzaWRlYmFyOiBcInN0cnVjdHVyaW5nXCIsIC8vIFx1NEZBN1x1OEZCOVx1NjgwRiAgJ3N0cnVjdHVyaW5nJyB8IHsgbW9kZTogJ3N0cnVjdHVyaW5nJywgY29sbGFwc2FibGU6IEJvb2xlYW59IHwgJ2F1dG8nIHwgXHU4MUVBXHU1QjlBXHU0RTQ5ICAgIFx1NkUyOVx1OTlBOFx1NjNEMFx1NzkzQVx1RkYxQVx1NzZFRVx1NUY1NVx1OTg3NVx1NjU3MFx1NjM2RVx1NEY5RFx1OEQ1Nlx1NEU4RVx1N0VEM1x1Njc4NFx1NTMxNlx1NzY4NFx1NEZBN1x1OEZCOVx1NjgwRlx1NjU3MFx1NjM2RVx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NEY2MFx1NEUwRFx1OEJCRVx1N0Y2RVx1NEUzQSdzdHJ1Y3R1cmluZycsXHU1QzA2XHU2NUUwXHU2Q0Q1XHU0RjdGXHU3NTI4XHU3NkVFXHU1RjU1XHU5ODc1XG5cbiAgLy8gXHU3QUQ5XHU3MEI5XHU5MTREXHU3RjZFXHVGRjA4XHU5OTk2XHU5ODc1ICYgXHU2NTg3XHU3QUUwXHU5ODc1XHVGRjA5XG4gIGJsb2dJbmZvOiB7XG4gICAgYmxvZ0NyZWF0ZTogXCIyMDIxLTEwLTE5XCIsIC8vIFx1NTM1QVx1NUJBMlx1NTIxQlx1NUVGQVx1NjVGNlx1OTVGNFxuICAgIGluZGV4VmlldzogdHJ1ZSwgLy8gXHU1RjAwXHU1NDJGXHU5OTk2XHU5ODc1XHU3Njg0XHU4QkJGXHU5NUVFXHU5MUNGXHU1NDhDXHU2MzkyXHU1NDBEXHU3RURGXHU4QkExXHVGRjBDXHU5RUQ4XHU4QkE0IHRydWVcdUZGMDhcdTVGMDBcdTU0MkZcdUZGMDlcbiAgICBwYWdlVmlldzogdHJ1ZSwgLy8gXHU1RjAwXHU1NDJGXHU2NTg3XHU3QUUwXHU5ODc1XHU3Njg0XHU2RDRGXHU4OUM4XHU5MUNGXHU3RURGXHU4QkExXHVGRjBDXHU5RUQ4XHU4QkE0IHRydWVcdUZGMDhcdTVGMDBcdTU0MkZcdUZGMDlcbiAgICByZWFkaW5nVGltZTogdHJ1ZSwgLy8gXHU1RjAwXHU1NDJGXHU2NTg3XHU3QUUwXHU5ODc1XHU3Njg0XHU5ODg0XHU4QkExXHU5NjA1XHU4QkZCXHU2NUY2XHU5NUY0XHVGRjBDXHU2NzYxXHU0RUY2XHVGRjFBXHU1RjAwXHU1NDJGIGVhY2hGaWxlV29yZHNcdUZGMENcdTlFRDhcdThCQTQgdHJ1ZVx1RkYwOFx1NUYwMFx1NTQyRlx1RkYwOVx1MzAwMlx1NTNFRlx1NTcyOCBlYWNoRmlsZVdvcmRzIFx1NzY4NCByZWFkRWFjaEZpbGVXb3JkcyBcdTc2ODRcdTdCMkNcdTRFOENcdTRFMkFcdTU0OENcdTdCMkNcdTRFMDlcdTRFMkFcdTUzQzJcdTY1NzBcdTgxRUFcdTVCOUFcdTRFNDlcdUZGMENcdTlFRDhcdThCQTQgMSBcdTUyMDZcdTk0OUYgMzAwIFx1NEUyRFx1NjU4N1x1MzAwMTE2MCBcdTgyRjFcdTY1ODdcbiAgICBlYWNoRmlsZVdvcmRzOiByZWFkRWFjaEZpbGVXb3JkcyhbXCJcIl0sIDMwMCwgMTYwKSwgLy8gXHU1RjAwXHU1NDJGXHU2QkNGXHU0RTJBXHU2NTg3XHU3QUUwXHU5ODc1XHU3Njg0XHU1QjU3XHU2NTcwXHUzMDAycmVhZEVhY2hGaWxlV29yZHMoWyd4eCddKSBcdTUxNzNcdTk1RUQgeHggXHU3NkVFXHU1RjU1XHVGRjA4XHU1M0VGXHU1OTFBXHU0RTJBXHVGRjBDXHU1M0VGXHU0RTBEXHU0RjIwXHU1M0MyXHU2NTcwXHVGRjA5XHU0RTBCXHU3Njg0XHU2NTg3XHU3QUUwXHU5ODc1XHU1QjU3XHU2NTcwXHU1NDhDXHU5NjA1XHU4QkZCXHU2NUY2XHU5NTdGXHVGRjBDXHU1NDBFXHU5NzYyXHU0RTI0XHU0RTJBXHU1M0MyXHU2NTcwXHU1MjA2XHU1MjJCXHU2NjJGIDEgXHU1MjA2XHU5NDlGXHU5MUNDXHU4MEZEXHU5NjA1XHU4QkZCXHU3Njg0XHU0RTJEXHU2NTg3XHU1QjU3XHU2NTcwXHU1NDhDXHU4MkYxXHU2NTg3XHU1QjU3XHU2NTcwXHUzMDAyXHU2NUUwXHU5RUQ4XHU4QkE0XHU1MDNDXHUzMDAycmVhZEVhY2hGaWxlV29yZHMoKSBcdTY1QjlcdTZDRDVcdTlFRDhcdThCQTRcdTYzOTJcdTk2NjRcdTRFODYgYXJ0aWNsZSBcdTRFM0EgZmFsc2UgXHU3Njg0XHU2NTg3XHU3QUUwXG4gICAgbWRGaWxlQ291bnRUeXBlOiBcImFyY2hpdmVzXCIsIC8vIFx1NUYwMFx1NTQyRlx1NjU4N1x1Njg2M1x1NjU3MFx1MzAwMjEuIGFyY2hpdmVzIFx1ODNCN1x1NTNENlx1NUY1Mlx1Njg2M1x1NzY4NFx1NjU4N1x1Njg2M1x1NjU3MFx1RkYwOFx1OUVEOFx1OEJBNFx1RkYwOVx1MzAwMjIuIFx1NjU3MFx1N0VDNCByZWFkRmlsZUxpc3QoWyd4eCddKSBcdTYzOTJcdTk2NjQgeHggXHU3NkVFXHU1RjU1XHVGRjA4XHU1M0VGXHU1OTFBXHU0RTJBXHVGRjBDXHU1M0VGXHU0RTBEXHU0RjIwXHU1M0MyXHU2NTcwXHVGRjA5XHVGRjBDXHU4M0I3XHU1M0Q2XHU1MTc2XHU0RUQ2XHU3NkVFXHU1RjU1XHU3Njg0XHU2NTg3XHU2ODYzXHU2NTcwXHUzMDAyXHU2M0QwXHU3OTNBXHVGRjFBcmVhZEZpbGVMaXN0KCkgXHU4M0I3XHU1M0Q2IGRvY3MgXHU0RTBCXHU2MjQwXHU2NzA5XHU3Njg0IG1kIFx1NjU4N1x1Njg2M1x1RkYwOFx1OTY2NFx1NEU4NiBgLnZ1ZXByZXNzYCBcdTU0OEMgYEBwYWdlc2AgXHU3NkVFXHU1RjU1XHU0RTBCXHU3Njg0XHU2NTg3XHU2ODYzXHVGRjA5XG4gICAgdG90YWxXb3JkczogXCJhcmNoaXZlc1wiLCAvLyBcdTVGMDBcdTU0MkZcdTY3MkNcdTdBRDlcdTY1ODdcdTY4NjNcdTYwM0JcdTVCNTdcdTY1NzBcdTMwMDIxLiBhcmNoaXZlcyBcdTgzQjdcdTUzRDZcdTVGNTJcdTY4NjNcdTc2ODRcdTY1ODdcdTY4NjNcdTY1NzBcdUZGMDhcdTRGN0ZcdTc1MjggYXJjaGl2ZXMgXHU2NzYxXHU0RUY2XHVGRjFBXHU0RjIwXHU1MTY1IGVhY2hGaWxlV29yZHNcdUZGMENcdTU0MjZcdTUyMTlcdTYyQTVcdTk1MTlcdUZGMDlcdTMwMDIyLiByZWFkVG90YWxGaWxlV29yZHMoWyd4eCddKSBcdTYzOTJcdTk2NjQgeHggXHU3NkVFXHU1RjU1XHVGRjA4XHU1M0VGXHU1OTFBXHU0RTJBXHVGRjBDXHU1M0VGXHU0RTBEXHU0RjIwXHU1M0MyXHU2NTcwXHVGRjA5XHVGRjBDXHU4M0I3XHU1M0Q2XHU1MTc2XHU0RUQ2XHU3NkVFXHU1RjU1XHU3Njg0XHU2NTg3XHU3QUUwXHU1QjU3XHU2NTcwXHUzMDAyXHU2NUUwXHU5RUQ4XHU4QkE0XHU1MDNDXG4gICAgbW91dGVkRXZlbnQ6IFwiLnRhZ3Mtd3JhcHBlclwiLCAvLyBcdTk5OTZcdTk4NzVcdTc2ODRcdTdBRDlcdTcwQjlcdTZBMjFcdTU3NTdcdTYzMDJcdThGN0RcdTU3MjhcdTY3RDBcdTRFMkFcdTUxNDNcdTdEMjBcdTU0MEVcdTk3NjJcdUZGMDhcdTY1MkZcdTYzMDFcdTU5MUFcdTc5Q0RcdTkwMDlcdTYyRTlcdTU2NjhcdUZGMDlcdUZGMENcdTYzMDdcdTc2ODRcdTY2MkZcdTYzMDJcdThGN0RcdTU3MjhcdTU0RUFcdTRFMkFcdTUxNDRcdTVGMUZcdTUxNDNcdTdEMjBcdTc2ODRcdTU0MEVcdTk3NjJcdUZGMENcdTlFRDhcdThCQTRcdTY2MkZcdTcwRURcdTk1RThcdTY4MDdcdTdCN0UgJy50YWdzLXdyYXBwZXInIFx1NEUwQlx1OTc2Mlx1RkYwQ1x1NjNEMFx1NzkzQVx1RkYxQScuY2F0ZWdvcmllcy13cmFwcGVyJyBcdTRGMUFcdTYzMDJcdThGN0RcdTU3MjhcdTY1ODdcdTdBRTBcdTUyMDZcdTdDN0JcdTRFMEJcdTk3NjJcdTMwMDInLmJsb2dnZXItd3JhcHBlcicgXHU0RjFBXHU2MzAyXHU4RjdEXHU1NzI4XHU1MzVBXHU1QkEyXHU1OTM0XHU1MENGXHU2QTIxXHU1NzU3XHU0RTBCXHU5NzYyXG4gICAgLy8gXHU0RTBCXHU5NzYyXHU0RTI0XHU0RTJBXHU5MDA5XHU5ODc5XHVGRjFBXHU3QjJDXHU0RTAwXHU2QjIxXHU4M0I3XHU1M0Q2XHU4QkJGXHU5NUVFXHU5MUNGXHU1OTMxXHU4RDI1XHU1NDBFXHU3Njg0XHU4RkVEXHU0RUUzXHU2NUY2XHU5NUY0XG4gICAgaW5kZXhJdGVyYXRpb246IDI1MDAsIC8vIFx1NTk4Mlx1Njc5Q1x1OTk5Nlx1OTg3NVx1ODNCN1x1NTNENlx1OEJCRlx1OTVFRVx1OTFDRlx1NTkzMVx1OEQyNVx1RkYwQ1x1NTIxOVx1NkJDRlx1OTY5NFx1NTkxQVx1NUMxMVx1NjVGNlx1OTVGNFx1NTQwRVx1ODNCN1x1NTNENlx1NEUwMFx1NkIyMVx1OEJCRlx1OTVFRVx1OTFDRlx1RkYwQ1x1NzZGNFx1NTIzMFx1ODNCN1x1NTNENlx1NjIxMFx1NTI5Rlx1NjIxNlx1ODNCN1x1NTNENiA1IFx1NkIyMVx1NTQwRVx1MzAwMlx1OUVEOFx1OEJBNCAzIFx1NzlEMlx1MzAwMlx1NkNFOFx1NjEwRlx1RkYxQVx1OEJCRVx1N0Y2RVx1NjVGNlx1OTVGNFx1NTkyQVx1NEY0RVx1RkYwQ1x1NTNFRlx1ODBGRFx1NUJGQ1x1ODFGNFx1OEJCRlx1OTVFRVx1OTFDRiArIDJcdTMwMDErIDMgLi4uLi4uXG4gICAgcGFnZUl0ZXJhdGlvbjogMjUwMCwgLy8gXHU1OTgyXHU2NzlDXHU2NTg3XHU3QUUwXHU5ODc1XHU4M0I3XHU1M0Q2XHU4QkJGXHU5NUVFXHU5MUNGXHU1OTMxXHU4RDI1XHVGRjBDXHU1MjE5XHU2QkNGXHU5Njk0XHU1OTFBXHU1QzExXHU2NUY2XHU5NUY0XHU1NDBFXHU4M0I3XHU1M0Q2XHU0RTAwXHU2QjIxXHU4QkJGXHU5NUVFXHU5MUNGXHVGRjBDXHU3NkY0XHU1MjMwXHU4M0I3XHU1M0Q2XHU2MjEwXHU1MjlGXHU2MjE2XHU4M0I3XHU1M0Q2IDUgXHU2QjIxXHU1NDBFXHUzMDAyXHU5RUQ4XHU4QkE0IDMgXHU3OUQyXHUzMDAyXHU2Q0U4XHU2MTBGXHVGRjFBXHU4QkJFXHU3RjZFXHU2NUY2XHU5NUY0XHU1OTJBXHU0RjRFXHVGRjBDXHU1M0VGXHU4MEZEXHU1QkZDXHU4MUY0XHU4QkJGXHU5NUVFXHU5MUNGICsgMlx1MzAwMSsgMyAuLi4uLi5cbiAgICAvLyBcdThCRjRcdTY2MEVcdUZGMUFcdTYyMTBcdTUyOUZcdTgzQjdcdTUzRDZcdTRFMDBcdTZCMjFcdThCQkZcdTk1RUVcdTkxQ0ZcdUZGMENcdThCQkZcdTk1RUVcdTkxQ0YgKyAxXHVGRjBDXHU2MjQwXHU0RUU1XHU3QjJDXHU0RTAwXHU2QjIxXHU4M0I3XHU1M0Q2XHU1OTMxXHU4RDI1XHU1NDBFXHVGRjBDXHU4QkJFXHU3RjZFXHU3Njg0XHU2QkNGXHU0RTJBXHU5Njk0XHU2QkI1XHU5MUNEXHU2NUIwXHU4M0I3XHU1M0Q2XHU2NUY2XHU5NUY0XHVGRjBDXHU1QzA2XHU0RjFBXHU1RjcxXHU1NENEXHU4QkJGXHU5NUVFXHU5MUNGXHU3Njg0XHU2QjIxXHU2NTcwXHUzMDAyXHU1OTgyIDEwMCBcdTUzRUZcdTgwRkRcdTZCQ0ZcdTZCMjFcdTgzQjdcdTUzRDZcdThCQkZcdTk1RUVcdTkxQ0YgKyAzXG4gIH0sXG5cbiAgLy8gXHU3OUMxXHU1QkM2XHU2NTg3XHU3QUUwXHU5MTREXHU3RjZFXG4gIHByaXZhdGVQYWdlOiB7XG4gICAgb3BlblByaXZhdGU6IHRydWUsIC8vIFx1NUYwMFx1NTQyRlx1NzlDMVx1NUJDNlx1NjU4N1x1N0FFMFx1OUE4Q1x1OEJDMVx1RkYwQ1x1OUVEOFx1OEJBNFx1NUYwMFx1NTQyRlx1RkYwOHRydWVcdUZGMDlcdUZGMENcdTU5ODJcdTY3OUNcdTRFMERcdTVGMDBcdTU0MkZcdUZGMDhmYWxzZVx1RkYwOVx1RkYwQ1x1NTIxOVx1NEUwQlx1OTc2Mlx1OTE0RFx1N0Y2RVx1OTBGRFx1NTkzMVx1NjU0OFxuICAgIHVzZXJuYW1lOiBcInlvdW5na2J0XCIsIC8vIFx1N0JBMVx1NzQwNlx1NTQ1OFx1NzUyOFx1NjIzN1x1NTQwRFxuICAgIHBhc3N3b3JkOiBcImtidDY0ODYyMVwiLCAvLyBcdTdCQTFcdTc0MDZcdTU0NThcdTVCQzZcdTc4MDFcbiAgICBleHBpcmU6IFwiMWRcIiwgLy8gXHU3NjdCXHU1RjU1XHU4RkM3XHU2NzFGXHU2NUY2XHU5NUY0XHVGRjFBMWQgXHU0RUUzXHU4ODY4IDEgXHU1OTI5XHVGRjBDMWggXHU0RUUzXHU4ODY4IDEgXHU1QzBGXHU2NUY2XHVGRjBDXHU0RUM1XHU2NTJGXHU2MzAxXHU4RkQ5XHU0RTI0XHU0RTJBXHU1MzU1XHU0RjREXHVGRjBDXHU0RTBEXHU1MkEwXHU1MzU1XHU0RjREXHU0RUUzXHU4ODY4XHU3OUQyXHUzMDAyXHU4RkM3XHU2NzFGXHU1NDBFXHU4QkJGXHU5NUVFXHU3OUMxXHU1QkM2XHU2NTg3XHU3QUUwXHU5MUNEXHU2NUIwXHU4RjkzXHU1MTY1XHU3NTI4XHU2MjM3XHU1NDBEXHU1NDhDXHU1QkM2XHU3ODAxXHUzMDAyXHU5RUQ4XHU4QkE0XHU0RTAwXHU1OTI5XG4gICAgbG9naW5QYXRoOiBcIi92ZG9pbmcvbG9naW4vXCIsIC8vIFx1NUYxNVx1NzUyOFx1NzY3Qlx1NUY1NVx1N0VDNFx1NEVGNlx1NzY4NCBtZCBcdTY1ODdcdTdBRTBcdTc2ODQgcGVybWFsaW5rXHVGRjA4XHU1RkM1XHU5ODdCXHVGRjA5XHVGRjBDXHU2NUUwXHU5RUQ4XHU4QkE0XHU1MDNDXG4gICAgbG9naW5LZXk6IFwidmRvaW5nX21hbmFnZXJcIiwgLy8gXHU1QjU4XHU1MEE4XHU3NTI4XHU2MjM3XHU1NDBEXHU0RkUxXHU2MDZGXHU3Njg0IGtleVx1RkYwQ1x1OUVEOFx1OEJBNFx1NjYyRiB2ZG9pbmdfbWFuYWdlclx1MzAwMlx1N0NGQlx1N0VERlx1OTAxQVx1OEZDN1x1OEJFNSBrZXkgXHU5QThDXHU4QkMxXHU2NjJGXHU1NDI2XHU3NjdCXHU1RjU1XHUzMDAxXHU2NjJGXHU1NDI2XHU4RkM3XHU2NzFGXG4gICAgbG9naW5TZXNzaW9uOiBmYWxzZSwgLy8gXHU1RjAwXHU1NDJGXHU2NjJGXHU1NDI2XHU1NzI4XHU3RjUxXHU5ODc1XHU1MTczXHU5NUVEXHU2MjE2XHU1MjM3XHU2NUIwXHU1NDBFXHVGRjBDXHU2RTA1XHU5NjY0XHU3NjdCXHU1RjU1XHU3MkI2XHU2MDAxXHVGRjBDXHU4RkQ5XHU2ODM3XHU1MThEXHU2QjIxXHU4QkJGXHU5NUVFXHU3RjUxXHU5ODc1XHVGRjBDXHU5NzAwXHU4OTgxXHU5MUNEXHU2NUIwXHU3NjdCXHU1RjU1XHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBIGZhbHNlXHVGRjA4XHU0RTBEXHU1RjAwXHU1NDJGXHVGRjA5XG4gICAgZmlyc3RMb2dpbjogMCwgLy8gXHU3QjJDXHU0RTAwXHU2QjIxXHU4RkRCXHU1MTY1XHU3RjUxXHU3QUQ5XHU5NzAwXHU4OTgxXHU5QThDXHU4QkMxXHUzMDAyXHU3NTI4XHU0RThFXHU1QzAxXHU5NTAxXHU2NTc0XHU0RTJBXHU3RjUxXHU3QUQ5XHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBIDBcdUZGMDhcdTRFMERcdTVGMDBcdTU0MkZcdUZGMDlcdUZGMEMxIFx1NTQ4QyAyIFx1OTBGRFx1NEVFM1x1ODg2OFx1NUYwMFx1NTQyRlx1RkYwQ1x1NTMzQVx1NTIyQlx1RkYxQTEgXHU0RUUzXHU4ODY4XHU4NjdEXHU3MTM2XHU4RkRCXHU1MTY1XHU3RjUxXHU3QUQ5XHU2MjEwXHU1MjlGXHVGRjBDXHU0RjQ2XHU2NjJGXHU3RjUxXHU3QUQ5XHU1MTg1XHU3Njg0XHU3OUMxXHU1QkM2XHU2NTg3XHU3QUUwXHU0RUNEXHU5NzAwXHU4OTgxXHU1MzU1XHU3MkVDXHU5QThDXHU4QkMxXHVGRjBDMiBcdTRFRTNcdTg4NjhcdThGREJcdTUxNjVcdTdGNTFcdTdBRDlcdTYyMTBcdTUyOUZcdUZGMENcdTdGNTFcdTdBRDlcdTUxODVcdTc2ODRcdTc5QzFcdTVCQzZcdTY1ODdcdTdBRTBcdTRFMERcdTk3MDBcdTg5ODFcdTUzNTVcdTcyRUNcdTlBOENcdThCQzFcdUZGMENcdTRFNUZcdTVDMzFcdTY2MkZcdTdGNTFcdTdBRDlcdTUxODVcdTc2ODRcdTc5QzFcdTVCQzZcdTY1ODdcdTdBRTBcdTU0OENcdTY2NkVcdTkwMUFcdTY1ODdcdTdBRTBcdTRFMDBcdTY4MzdcdTUzRUZcdTRFRTVcdThCQkZcdTk1RUVcbiAgICBmaXJzdExvZ2luS2V5OiBcInZkb2luZ19maXJzdF9sb2dpblwiLCAvLyBcdTVCNThcdTUwQThcdTc1MjhcdTYyMzdcdTU0MERcdTRGRTFcdTYwNkZcdTc2ODQga2V5XHVGRjBDZmlyc3RMb2dpbiBcdTVGMDBcdTU0MkZcdTU0MEVcdThCRTVcdTkxNERcdTdGNkVcdTc1MUZcdTY1NDhcdUZGMENcdTlFRDhcdThCQTRcdTRFM0EgdmRvaW5nX2ZpcnN0X2xvZ2luXHVGRjBDXHU3Q0ZCXHU3RURGXHU5MDFBXHU4RkM3XHU4QkU1IGtleSBcdTlBOENcdThCQzFcdTY2MkZcdTU0MjZcdTc2N0JcdTVGNTVcdTMwMDFcdTY2MkZcdTU0MjZcdThGQzdcdTY3MUZcbiAgICAvLyBcdTc5QzFcdTVCQzZcdTY1ODdcdTdBRTBcdTU5MUFcdTdFQzRcdTc1MjhcdTYyMzdcdTU0MERcdTVCQzZcdTc4MDFcbiAgICBsb2dpbkluZm86IHtcbiAgICAgIFwiL3ByaXZhdGUvdGVzdDEvXCI6IFtcbiAgICAgICAgeyB1c2VybmFtZTogXCJ2ZG9pbmdcIiwgcGFzc3dvcmQ6IFwiMTIzNDU2XCIgfSxcbiAgICAgIF0sXG4gICAgICBcInZkb2luZ19maXJzdF9sb2dpblwiIDpbICAvLyBcdTVCRjlcdTVFOTQgZmlyc3RMb2dpbktleSBcdTc2ODRcdTUwM0NcbiAgICAgICAgeyB1c2VybmFtZTogXCJ2ZG9pbmdcIiwgcGFzc3dvcmQ6IFwiMTIzNDU2XCIgfSxcbiAgICAgIF1cbiAgICB9LFxuICB9LFxuICAvLyBcdTk5OTZcdTk4NzVcdTU5MjdcdTU2RkVcdTcyNDdcdTkxNERcdTdGNkVcbiAgaW5kZXhJbWc6IHtcbiAgICBuYXZDb2xvcjogMiwgLy8gXHU1QkZDXHU4MjJBXHU2ODBGXHU1REU2XHU0RkE3XHU1NDBEXHU1QjU3XHUzMDAxXHU0RTJEXHU5NUY0XHU2NDFDXHU3RDIyXHU2ODQ2XHUzMDAxXHU1M0YzXHU0RkE3XHU1QjU3XHU0RjUzXHU3Njg0XHU5ODlDXHU4MjcyXHVGRjBDMSBcdTY2MkZcdTlFRDFcdTgyNzJcdUZGMEMyIFx1NjYyRlx1NzY3RFx1ODI3Mlx1MzAwMlx1OUVEOFx1OEJBNFx1NjYyRiAxXG4gICAgc3dpdGNoTmF2Q29sb3I6IHRydWUsIC8vIFx1OTg3NVx1OTc2Mlx1NzlGQlx1NTFGQVx1NTkyN1x1NTZGRVx1NzI0N1x1NzY4NFx1NEY0RFx1N0Y2RVx1NTQwRVx1RkYwQ25hdkNvbG9yIFx1NjYyRlx1NTQyNlx1NTNEOFx1NjM2Mlx1RkYwQ1x1NTk4Mlx1NzUzMVx1NzY3RFx1ODI3Mlx1NTNEOFx1OUVEMVx1ODI3Mlx1RkYwQ1x1OUVEMVx1ODI3Mlx1NTNEOFx1NzY3RFx1ODI3Mlx1MzAwMlx1OUVEOFx1OEJBNFx1NjYyRiBmYWxzZVxuICAgIC8vIFx1NTZFMFx1NEUzQVx1NjcyQ1x1NEUzQlx1OTg5OFx1NzY4NFx1OUVEOFx1OEJBNFx1ODBDQ1x1NjY2Rlx1ODI3Mlx1NTA0Rlx1NTQxMVx1NzY3RFx1ODI3Mlx1RkYwQ1x1NTk4Mlx1Njc5QyBuYXZDb2xvciBcdTY2MkYgMlx1RkYwQ1x1NUVGQVx1OEJBRVx1OTcwMFx1ODk4MVx1NUYwMFx1NTQyRih0cnVlKVx1RkYwQ1x1NTQyNlx1NTIxOVx1NzY3RFx1ODBDQ1x1NjY2RiArIFx1NzY3RFx1NUI1N1x1NEY1MyA9IFx1NzcwQlx1NEUwRFx1ODlDMVxuICAgIGJnVGltZUNvbG9yOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTVGMDBcdTU0MkZcdTU2RkVcdTcyNDdcdTc2ODRcdTgwQ0NcdTY2NkZcdTgyNzJcdTk2OEZcdTRFMDBcdTU5MjlcdTc2ODRcdTRFMERcdTU0MENcdTY1RjZcdTk1RjRcdTgwMENcdTUzRDhcdTUzMTZcdUZGMENcdTVFNzZcdTRFMTRcdTVGMDBcdTU0MkZcdTY1RjZcdTk1RjRcdTdBOTdcdTUzRTNcdTYzRDBcdTc5M0FcdUZGMENcdTlFRDhcdThCQTRcdTY2MkYgZmFsc2VcdTMwMDJcdTY1RjZcdTk1RjRcdTUyMDZcdTRFM0FcdTU2REJcdTc5Q0RcdUZGMUFcdTc2N0RcdTU5MjlcdUZGMDhcdTUzOUZcdTU2RkVcdUZGMDlcdTMwMDFcdTlFQzRcdTY2MEZcdUZGMDhcdTUwNEZcdTlFQzRcdUZGMDlcdTMwMDFcdTY2NUFcdTRFMEFcdUZGMDhcdTUwNEZcdTlFRDFcdUZGMDlcdTMwMDFcdTZERjFcdTU5MUNcdUZGMDhcdTUwNEZcdTZERjFcdTlFRDFcdUZGMDlcbiAgICBiZ1RpbWVDb2xvckFycmF5OiBbXG4gICAgICBcInRyYW5zcGFyZW50XCIsXG4gICAgICBcInRyYW5zcGFyZW50XCIsXG4gICAgICBcInRyYW5zcGFyZW50XCIsXG4gICAgICBcInRyYW5zcGFyZW50XCIsXG4gICAgXSwgLy8gXHU3QjJDXHU0RTAwXHU0RTJBXHU2NjJGXHU3NjdEXHU1OTI5XHU3Njg0XHU5ODlDXHU4MjcyXHVGRjA4XHU5RUQ4XHU4QkE0XHU1MzlGXHU1NkZFXHVGRjA5XHVGRjBDXHU3QjJDXHU0RThDXHU0RTJBXHU2NjJGXHU5RUM0XHU2NjBGXHU3Njg0XHU5ODlDXHU4MjcyXHVGRjBDXHU3QjJDXHU0RTA5XHU0RTJBXHU2NjJGXHU2NjVBXHU0RTBBXHU3Njg0XHU5ODlDXHU4MjcyXHVGRjBDXHU3QjJDXHU1NkRCXHU0RTJBXHU2NjJGXHU2REYxXHU1OTFDXHU3Njg0XHU5ODlDXHU4MjcyXHUzMDAyYmdUaW1lQ29sb3IgXHU0RTNBIHRydWUgXHU3NTFGXHU2NTQ4XG4gICAgZGVzY0ZhZGU6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NUYwMFx1NTQyRlx1NTZGRVx1NzI0N1x1NEUyRFx1OTVGNFx1NjNDRlx1OEZGMFx1NzY4NFx1NkRFMVx1NTE2NVx1NkRFMVx1NTFGQVx1NjU0OFx1Njc5Q1x1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQSBmYWxzZVxuICAgIGRlc2M6IFtcbiAgICAgIFwiXHU2NTQ1XHU0RThCXHU3NTMxXHU2MjExXHU0RTY2XHU1MTk5XHVGRjBDXHU2NUM1XHU3QTBCXHU3NTMxXHU0RjYwXHU4OUMxXHU4QkMxXHVGRjBDXHU0RjIwXHU1OTQ3XHU3NTMxXHU1OTc5XHU4MDQ2XHU1NDJDIFx1MjAxNFx1MjAxNCBcdTY3NjVcdTgxRUEgWW91bmcgS2J0XCIsXG4gICAgICBcIlx1NzlFRlx1OERFQ1x1NkI2NVx1NEVFNVx1ODFGM1x1NTM0M1x1OTFDQ1x1RkYwQ1x1ODFGNFx1NjU2Q1x1NkJDRlx1NEUyQVx1NzIzMVx1NUI2Nlx1NEU2MFx1NzY4NFx1NEY2MCBcdTIwMTRcdTIwMTQgXHU2NzY1XHU4MUVBIEV2YW4gWHVcIixcbiAgICAgIFwiXHU4RkQ5XHU0RTAwXHU3NTFGXHU2Q0UyXHU2RjlDXHU1OEVFXHU5NjE0XHU2MjE2XHU2NjJGXHU0RTBEXHU2MENBXHU5MEZEXHU2Q0ExXHU5NUVFXHU5ODk4IFx1MjAxNFx1MjAxNCBcdTY3NjVcdTgxRUEgV2VpYndcIixcbiAgICBdLCAvLyBcdTU5MUFcdTY3NjFcdTYzQ0ZcdThGRjBcdUZGMENcdTU5ODJcdTY3OUNcdTU4NkJcdTUxOTlcdTUyMTlcdTg5ODZcdTc2RDYgaW5kZXgubWQgXHU3Njg0IHRhZ2xpbmVcdUZGMENcdTRFMERcdTU4NkJcdTUxOTlcdTUyMTlcdTlFRDhcdThCQTRcdThCRkJcdTUzRDYgaW5kZXgubWQgXHU3Njg0IHRhZ2xpbmVcdUZGMENkZXNjRmFkZUluIFx1NEUzQSB0cnVlIFx1NzUxRlx1NjU0OFxuICAgIGRlc2NGb250U2l6ZTogXCIxLjRyZW1cIiwgLy8gZGVzYyBcdTc2ODRcdTVCNTdcdTRGNTNcdTU5MjdcdTVDMEZcdUZGMENcdTlFRDhcdThCQTQgMS40cmVtXHUzMDAyXHU2M0QwXHU3OTNBXHVGRjFBXHU1MzlGXHU0RTNCXHU5ODk4XHU2NjJGIDEuMXJlbVxuICAgIGRlc2NGYWRlSW5UaW1lOiAyMDAsIC8vIFx1NjNDRlx1OEZGMFx1NzY4NFx1NkRFMVx1NTE2NVx1NjU0OFx1Njc5Q1x1NjMwMVx1N0VFRFx1NjVGNlx1OTVGNFx1RkYwQ2Rlc2NGYWRlIFx1NEUzQSB0cnVlIFx1NzUxRlx1NjU0OFx1RkYwQ1x1OUVEOFx1OEJBNCAyMDAgXHU2QkVCXHU3OUQyXG4gICAgZGVzY0ZhZGVPdXRUaW1lOiAxMDAsIC8vIFx1NjNDRlx1OEZGMFx1NzY4NFx1NkRFMVx1NTFGQVx1NjU0OFx1Njc5Q1x1NjMwMVx1N0VFRFx1NjVGNlx1OTVGNFx1RkYwQ2Rlc2NGYWRlIFx1NEUzQSB0cnVlIFx1NzUxRlx1NjU0OFx1RkYwQ1x1OUVEOFx1OEJBNCAxMDAgXHU2QkVCXHU3OUQyXG4gICAgZGVzY05leHRUaW1lOiA4MDAsIC8vIFx1NUY1M1x1NjcwOVx1NTkxQVx1NEUyQSBkZXNjIFx1NjVGNlx1RkYwQ1x1NEUwMFx1NEUyQSBkZXNjIFx1NUM1NVx1NzkzQVx1NUI4Q1x1NTQwRVx1NjIxNlx1NTFDNlx1NTkwN1x1NUYwMFx1NTlDQlx1NjVGNlx1RkYwQ1x1NTkxQVx1NUMxMVx1NjVGNlx1OTVGNFx1NTQwRVx1NTFGQVx1NzNCMFx1NEUwQlx1NEUwMFx1NEUyQSBkZXNjXHVGRjBDXHU5RUQ4XHU4QkE0IDgwMCBcdTZCRUJcdTc5RDJcbiAgICBidWJibGU6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTVGMDBcdTU0MkZcdTU2RkVcdTcyNDdcdTc2ODRcdTZDMTRcdTZDRTFcdTY1NDhcdTY3OUNcdUZGMENcdTlFRDhcdThCQTRcdTRFM0EgZmFsc2VcbiAgICBidWJibGVQb3NpdGlvbjogMCwgLy8gXHU2QzE0XHU2Q0UxXHU2NTQ4XHU2NzlDXHU3Njg0XHU0RjREXHU3RjZFXHVGRjBDXHU4MzAzXHU1NkY0XHVGRjFBMC0xMDBcdUZGMENcdTRFMERcdTU0MENcdTY1NzBcdTUwM0NcdTRFRTNcdTg4NjhcdTRFMERcdTU0MENcdTc2ODRcdThENzdcdTU5Q0JcdTRGNERcdTdGNkVcdUZGMEMwXHU2NjJGXHU2NTc0XHU0RTJBXHU1NkZFXHU3MjQ3XHVGRjBDNTBcdTY2MkZcdTUzNEFcdTVGMjBcdTU2RkVcdUZGMDhcdTRFMDBcdTUzNEFcdTc2ODRcdTRFMEJcdTY1QjlcdUZGMDlcdTMwMDJidWJibGUgXHU0RTNBIHRydWUgXHU3NTFGXHU2NTQ4XHUzMDAyXHU5RUQ4XHU4QkE0XHU2NjJGIDBcbiAgICBidWJibGVOdW06IDIwMCwgLy8gXHU2QzE0XHU2Q0UxXHU3Njg0XHU0RTJBXHU2NTcwXHVGRjBDYnViYmxlIFx1NEUzQSB0cnVlIFx1NzUxRlx1NjU0OFx1RkYwQ1x1OUVEOFx1OEJBNCAyMDAgXHU0RTJBXG4gIH0sXG4gIGF1dGhvcjoge1xuICAgIC8vIFx1NjU4N1x1N0FFMFx1OUVEOFx1OEJBNFx1NzY4NFx1NEY1Q1x1ODAwNVx1NEZFMVx1NjA2Rlx1RkYwQ1x1NTNFRlx1NTcyOG1kXHU2NTg3XHU0RUY2XHU0RTJEXHU1MzU1XHU3MkVDXHU5MTREXHU3RjZFXHU2QjY0XHU0RkUxXHU2MDZGIFN0cmluZyB8IHtuYW1lOiBTdHJpbmcsIGxpbms6IFN0cmluZ31cbiAgICBuYW1lOiBwZW5OYW1lLCAvLyBcdTVGQzVcdTk3MDBcbiAgICBsaW5rLCAvLyBcdTUzRUZcdTkwMDlcdTc2ODRcbiAgfSxcbiAgYmxvZ2dlcjoge1xuICAgIC8vIFx1NTM1QVx1NEUzQlx1NEZFMVx1NjA2Rlx1RkYwQ1x1NjYzRVx1NzkzQVx1NTcyOFx1OTk5Nlx1OTg3NVx1NEZBN1x1OEZCOVx1NjgwRlxuICAgIGF2YXRhcixcbiAgICBuYW1lLFxuICAgIHNsb2dhbiwgLy8gXHU0RTJBXHU2MDI3XHU3QjdFXHU1NDBEXG4gIH0sXG4gIHNvY2lhbDoge1xuICAgIC8vIFx1NzkzRVx1NEVBNFx1NTZGRVx1NjgwN1x1RkYwQ1x1NjYzRVx1NzkzQVx1NEU4RVx1NTM1QVx1NEUzQlx1NEZFMVx1NjA2Rlx1NjgwRlx1NTQ4Q1x1OTg3NVx1ODExQVx1NjgwRlxuICAgIC8vIGljb25mb250Q3NzRmlsZTogJy8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTY3ODQ4Ml91NG5ybnA4eHA2Zy5jc3MnLCAvLyBcdTUzRUZcdTkwMDlcdUZGMENcdTk2M0ZcdTkxQ0NcdTU2RkVcdTY4MDdcdTVFOTNcdTU3MjhcdTdFQkZjc3NcdTY1ODdcdTRFRjZcdTU3MzBcdTU3NDBcdUZGMENcdTVCRjlcdTRFOEVcdTRFM0JcdTk4OThcdTZDQTFcdTY3MDlcdTc2ODRcdTU2RkVcdTY4MDdcdTUzRUZcdTgxRUFcdTc1MzFcdTZERkJcdTUyQTBcbiAgICBpY29uczogW1xuICAgICAge1xuICAgICAgICBpY29uQ2xhc3M6IFwiaWNvbi1naXRodWJcIixcbiAgICAgICAgdGl0bGU6IFwiR2l0SHViXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2tlbGUtYmluZ3RhbmdcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb25DbGFzczogXCJpY29uLWdpdGVlXCIsXG4gICAgICAgIHRpdGxlOiBcIkdpdGVlXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRlZS5jb20va2VsZS1iaW5ndGFuZ1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbkNsYXNzOiBcImljb24tcnNzXCIsXG4gICAgICAgIHRpdGxlOiBcIlx1N0Y1MVx1N0FEOVx1OTk5Nlx1OTg3NVwiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnlvdW5na2J0LmNuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uQ2xhc3M6IFwiaWNvbi1RUVwiLFxuICAgICAgICB0aXRsZTogXCJRUVwiLFxuICAgICAgICBsaW5rOiBcImh0dHA6Ly93cGEucXEuY29tL21zZ3JkP3Y9MyZ1aW49Mjg3NjEwMjUmc2l0ZT1xcSZtZW51PXllc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbkNsYXNzOiBcImljb24teW91amlhblwiLFxuICAgICAgICB0aXRsZTogXCJcdTgwNTRcdTdDRkJcdTYyMTFcIixcbiAgICAgICAgbGluazogXCJodHRwczovL3d3dy55b3VuZ2tidC5jbi8/Y29udGFjdD10cnVlXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIGZvb3RlcixcbiAgLy8gaHRtbE1vZHVsZXMgLy8gXHU2M0QyXHU1MTY1aG10bFx1NkEyMVx1NTc1N1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTs7O0FDQ0E7QUFHQSxJQUFPLGtCQUFzQjtBQUFBLEVBRTNCO0FBQUEsSUFDRTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sb0JBQW9CLENBQUMsWUFBWSxlQUFlLGFBQWE7QUFBQTtBQUFBO0FBQUEsRUFXakU7QUFBQSxFQWlDQSxDQUFDO0FBQUEsRUFFRDtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFFRSxjQUFjLENBQUMsK0JBQStCO0FBQUEsTUFDOUMsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLE1BQ1YsY0FBYztBQUFBO0FBQUE7QUFBQSxFQWlCbEI7QUFB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
