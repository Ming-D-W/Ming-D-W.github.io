// 工具导航栏
export default {
    text: 'Web Api', link: '/tool/',
    items: [
        {
            text: '管理',
            items: [
                { text: 'Maven', link: '/maven/' },
                { text: 'Git', link: '/git/' }
            ]
        },
        {
            text: '部署',
            items: [
                { text: 'Linux', link: '/linux/' },
                { text: 'Docker', link: '/docker/' },
                { text: 'Jenkins', link: '/jenkins/' },
            ]
        },
    ]
}
