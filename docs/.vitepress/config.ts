import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-UK',
  title: 'Imagine',
  description: 'Imagine documentation',
  base: '/imagine/',
  appearance: false,

  srcDir: './',
  
  themeConfig: {
    // 全局关闭上一页/下一页导航
    docFooter: {
      prev: false,
      next: false,
    },
    
    sidebar: [],

    socialLinks: [],
    
    footer: {
      message: 'Imagine',
      copyright: 'Copyright © 2026',
    },
  },
})