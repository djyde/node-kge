const axios = require('axios')
const cheerio = require('cheerio')

const http = axios.create({
  baseURL: 'http://kg.qq.com'
})

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

// const getPlayUrl = (share_uid) => {
//   http.get('/node/play', {
//     params: {
//       s: share_uid,
//       g_f: 'personal'
//     }
//   })
//   .then(res => {
//     const htmlText = res.data
//     const $ = cheerio.load(htmlText)
//   })
//   .catch(e => {
//     console.log(e)
//   })
// }
