import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1c58ad37c99e80119a02ef8d6c1c22ed',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Japan Tech Career Lab | 일본 IT 커뮤니티',
  domain: 'japantechcareerlab.vercel.app',
  author: 'Japan Tech Career Lab',

  // open graph metadata (optional)
  description:
    '일본 IT 취업·이직을 위한 한국인 커뮤니티. 일본 대기업, 외국계, 빅테크 현직자 600명과 함께하는 멘토링, 이벤트, 커리어 인사이트를 제공합니다.',

  // language setting
  language: 'ko',

  // social usernames (optional)
  // twitter: 'your_twitter',
  // github: 'your_github',
  linkedin: '14783072',
  // newsletter: 'https://your-newsletter-url',
  // youtube: 'your_channel',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: '🚀',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // include Notion ID in URLs for both dev and production
  includeNotionIdInUrls: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  pageUrlOverrides: {
    '/crew': '2488ad37c99e80c89f6ac6dc08cac2ef',
    '/mentoring': '1c58ad37c99e80a0b3b8f26f2530f6dc',
    '/events': '2388ad37c99e80d4b62add89b4f71758',
    '/webinars': '1c58ad37c99e8031a8a3c8b802c004de',
    '/interviews': '1c78ad37c99e80f9ac86fc24ffbe37d5',
    '/insights': '20e8ad37c99e80708258d1ab34ef949e',
    '/guidelines': '2688ad37c99e801086d8c6ce310bde76'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '운영진 소개',
      pageId: '2488ad37c99e80c89f6ac6dc08cac2ef'
    },
    {
      title: '멘토 찾기',
      pageId: '1c58ad37c99e80a0b3b8f26f2530f6dc'
    },
    {
      title: '이벤트 & 활동',
      pageId: '2388ad37c99e80d4b62add89b4f71758'
    },
    {
      title: '커리어 인사이트',
      pageId: '20e8ad37c99e80708258d1ab34ef949e'
    }
  ]
})
