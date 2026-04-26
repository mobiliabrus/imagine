import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-UK',
  title: 'Imagine',
  description: 'Imagine documentation',
  base: '/imagine/',
  appearance: false,

  srcDir: './',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', {}, `
      // Override default viewport to disable zooming
      (function() {
        function updateViewport() {
          const viewport = document.querySelector('meta[name="viewport"]');
          if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
          } else {
            // If viewport doesn't exist yet, create it
            const meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
            document.head.appendChild(meta);
          }
        }
        
        // Try immediately and on DOMContentLoaded
        updateViewport();
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', updateViewport);
        }
        // Also try after a short delay to ensure VitePress has rendered
        setTimeout(updateViewport, 0);
      })();
      
      if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js')
            .then(registration => {
              console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
              console.log('SW registration failed: ', registrationError);
            });
        });
      }
    `]
  ],
  
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

  markdown: {
    image: {
      lazyLoading: true
    },
  },
})