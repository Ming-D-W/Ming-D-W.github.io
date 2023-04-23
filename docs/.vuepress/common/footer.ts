import { penName, footerTitle } from '../common/info'

interface Footer {
  createYear: number, // 博客创建年份
  copyrightInfo: string // 博客版权信息，支持 a 标签
}

export default <Footer> {
  // 页脚信息
  createYear: 2021,
  copyrightInfo:
    penName + ' | ' + footerTitle + '<br>' +
    '<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33019202000592" target="_blank" style="margin-right: 20px; height:20px;line-height:20px;"><img src="https://photo-album-1314189846.cos.ap-shanghai.myqcloud.com/202304131844613.png" style="height:18px; margin: 0px 5px 0px 0px;"/>浙公网安备 33019202000592号</a>'+
      ' <a href="http://beian.miit.gov.cn/" target="_blank">陇ICP备2023000815号-1</a>',
}

