import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: "WhackCAT's Translation",
  description: "A websit that post translation works",

  lang: 'zh-CN',
  locales: {
    '/': {
      label: '简体中文',
      lang: 'zh-CN',
      title: "WhackCAT 的翻译",
      description: "一个发布翻译作品的网站"
    }
  },

  themeConfig: {
    darkModeSwitchLabel: '切换主题',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outlineTitle: '内容',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        }
      }
    },
    
    nav: [
      { text: 'Home', link: '/docs/index' },
      { text: 'About', link: '/docs/about' }
    ],

    sidebar: generateSidebar({
      documentRootPath: '/docs/translations',
      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: true,
      sortMenusByFrontmatterOrder: true,
      sortFolderTo: 'top',
      collapsed: true,
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/whitecat346' }
    ],

    footer: {
      message: 'All translated by DeepSeek. Released under the MIT License.',
      copyright: 'Copyright © 2026-present WhackCAT'
    },

    notFound: {
      title: "页面未找到",
      quote: "哎呀，您好像迷失在网络的小胡同里啦，别着急，赶紧回头是岸！",
      linkText: "返回首页",
    },
  }
})
