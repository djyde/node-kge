const assert = require('power-assert')

const { getPlayList, getLyrics, getPlayUrl, getUserInfo } = require('../index')

const SHARE_UID = '639c958d222c308e3c'
const SHARE_ID = 'BJvnYrB0jNxUpBpT'
const SONG_MID = '002gVjL13AvaO9'
const TIMEOUT = 10000

describe('node-kge', () => {

  describe('#getUserInfo', () => {
    it('should get user info', done => {
      getUserInfo(SHARE_UID)
        .then(info => {
          assert(info.age)
          assert(info.nickname)
          assert(info.head_img_url)
          assert(info.ugc_total_count)
          done()
        })
        .catch(e => {
          done(e)
        })
    }).timeout(TIMEOUT)
  })

  describe('#getPlayList', () => {
    it('should get play list', done => {
      getPlayList(SHARE_UID, 1, 5)
        .then(response => {
          const result = response.data
          assert(result.message === 'ok')
          const playList = result.data.ugclist
          assert(playList.length !== 0)
          done()
        })
        .catch(e => {
          done(e)
        })
    }).timeout(TIMEOUT)
  })

  describe('#getLyrics', () => {
    it('should get lyrics', done => {
      getLyrics(SONG_MID)
        .then(response => {
          const result = response.data
          assert(result.code === 0)
          assert(result.data.lyric)
          done()
        })
        .catch(e => {
          done(e)
        })
    }).timeout(TIMEOUT)
  })

  describe('#getPlayUrl', () => {
    it('should get play url', done => {
      getPlayUrl(SHARE_ID)
        .then(res => {
          assert(res)
          done()
        })
        .catch(e => {
          done(e)
        })
    }).timeout(TIMEOUT)
  })
})