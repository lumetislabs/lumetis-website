/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://lumetislabs.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
}

