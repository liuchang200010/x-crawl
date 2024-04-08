import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'x-crawl',
  description: '灵活的 Node.js AI 辅助爬虫库',

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/coder-hxl/x-crawl/edit/main/docs/:path',
      text: '为此页提供修改建议'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/coder-hxl/x-crawl' },
      { icon: 'discord', link: 'https://discord.gg/SF7aaebg4E' }
    ]
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'cn',

      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: '指南', link: '/guide/index' },
          { text: 'API', link: '/api/index' },
          { text: 'Type', link: '/type/index' },
          {
            text: '关于',
            items: [
              { text: '常见问题', link: '/about/faq' },
              { text: '社区', link: '/about/community' },
              { text: '版本发布', link: '/about/releases' },
              { text: '旧版本文档', link: '/about/old-docs' },
              { text: 'Issues', link: '/about/issues' },
              { text: '注意事项', link: '/about/announcements' }
            ]
          }
        ],

        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        },

        sidebar: {
          '/guide': [
            {
              text: '开始',
              items: [
                { text: '简介', link: '/guide/index' },
                { text: '快速上手', link: '/guide/quick-start' }
              ]
            },
            {
              text: '基础',
              items: [
                { text: '创建应用', link: '/guide/create-crawl-application' },
                { text: '爬取页面', link: '/guide/crawl-page' },
                { text: '爬取 HTML', link: '/guide/crawl-html' },
                { text: '爬取接口', link: '/guide/crawl-data' },
                { text: '爬取文件', link: '/guide/crawl-file' },
                { text: '间隔时间', link: '/guide/interval' },
                { text: '失败重试', link: '/guide/retry' },
                { text: '轮换代理', link: '/guide/proxy' },
                { text: '优先队列', link: '/guide/priority' },
                { text: '终端信息', link: '/guide/reporters' },
                { text: '关于结果', link: '/guide/results' },
                { text: 'TypeScript', link: '/guide/typescript' }
              ]
            },
            {
              text: 'AI 辅助',
              items: [
                { text: '创建 AI 应用', link: '/guide/create-ai-application' },
                { text: '智能按需分析元素', link: '/guide/parse-elements' },
                {
                  text: '智能生成元素选择器',
                  link: '/guide/get-element-selectors'
                },
                { text: '智能回复爬虫问题', link: '/guide/crawl-openai-help' },
                {
                  text: '用户自定义 AI 功能',
                  link: '/guide/crawl-openai-custom'
                }
              ]
            },
            {
              text: '进阶',
              items: [
                { text: '爬取模式', link: '/guide/crawl-mode' },
                { text: '设备指纹', link: '/guide/fingerprint' },
                { text: '配置', link: '/guide/config' }
              ]
            }
          ],

          '/api': [
            {
              text: '爬虫',
              items: [
                { text: 'createCrawl', link: '/api/index' },
                { text: 'crawlPage', link: '/api/crawl-page' },
                { text: 'crawlHTML', link: '/api/crawl-html' },
                { text: 'crawlData', link: '/api/crawl-data' },
                { text: 'crawlFile', link: '/api/crawl-file' }
              ]
            },
            {
              text: 'AI',
              items: [
                { text: 'createCrawlOpenAI', link: '/api/create-crawl-openai' },
                { text: 'parseElements', link: '/api/parse-elements' },
                {
                  text: 'getElementSelectors',
                  link: '/api/get-element-selectors'
                },
                { text: 'help', link: '/api/help' },
                { text: 'custom', link: '/api/custom' }
              ]
            }
          ],

          '/type': [
            {
              text: '爬虫',
              items: [
                { text: 'createCrawl', link: '/type/index' },
                { text: 'crawlPage', link: '/type/crawl-page' },
                { text: 'crawlHTML', link: '/type/crawl-html' },
                { text: 'crawlData', link: '/type/crawl-data' },
                { text: 'crawlFile', link: '/type/crawl-file' },
                { text: 'CrawlOtherConfig', link: '/type/crawl-other-config' }
              ]
            },
            {
              text: 'AI',
              items: [
                {
                  text: 'createCrawlOpenAI',
                  link: '/type/create-crawl-openai'
                },
                { text: 'parseElements', link: '/type/parse-elements' },
                {
                  text: 'getElementSelectors',
                  link: '/type/get-element-selectors'
                },
                {
                  text: 'CrawlOpenaiOtherConfig',
                  link: '/type/crawl-openai-other-config'
                }
              ]
            }
          ]
        },

        footer: {
          message: '基于 MIT 许可发布',
          copyright: '版权所有 © 2024-present CoderHXL'
        }
      }
    },

    en: { label: 'English', lang: 'en', link: '/en' }
  }
})
