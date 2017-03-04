const axios = require('axios')
const cheerio = require('cheerio')

const http = axios.create({
  baseURL: 'http://kg.qq.com'
})

global.window = global.window || {}

exports.getUserInfo = (share_uid) => {
  return http.get('/node/personal', {
    params: {
      g_f: 'old_pc',
      uid: share_uid
    }
  })
  .then(res => {
    applyWindowData(res.data)

    const info = window.__DATA__.data

    return info
  })
}

exports.getPlayList = (share_uid, start = 1, num = 8) => http.get('/cgi/kg_ugc_get_homepage', {
  params: {
    start,
    num,
    share_uid,
    format: 'json',
    type: 'get_ugc'
  }
})

exports.getLyrics = (ksongmid) => http.get('/cgi/fcg_lyric', {
  params: {
    ksongmid,
    format: 'json'
  }
})

exports.getPlayUrl = (share_id) => {
  return http.get('/node/play', {
    params: {
      s: share_id,
      g_f: 'personal'
    }
  })
  .then(res => {
    applyWindowData(res.data)
    const playurl = global.window.__DATA__.detail.playurl
    return playurl
  })
}

function applyWindowData (htmlText) {
  const $ = cheerio.load(htmlText)

  $('script').map(function (i, el) {
    const scriptText = $(el).text()
    if (scriptText.match('window.__DATA__')) {
      eval(scriptText)
    }
  })
}
