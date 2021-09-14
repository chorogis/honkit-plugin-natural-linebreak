"use strict"

const cheerio = require('cheerio')

module.exports = {
  hooks: {
    'page': async function (page) {
      const $ = cheerio.load(page.content);

      $('p').each((_i, elem) => {
        const p = $(elem)
        p.html(p.html().replace(/\n/g, '<br />'))
      })

      page.content = $.html()

      return page
    }
  }
}