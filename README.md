# node-kge

[![](https://circleci.com/gh/djyde/node-kge.svg?style=shield)](https://circleci.com/gh/djyde/node-kge)
[![codecov](https://codecov.io/gh/djyde/node-kge/branch/master/graph/badge.svg)](https://codecov.io/gh/djyde/node-kge)


全民k歌 for Node.js

## Installation

```bash
$ npm install kge
```

## API

- `getUserInfo(share_uid: string): Promise<object>`

- `getPlayList(share_uid: string, start_num: number, page_size: number): AxiosPromise`

- `getLyrics(ksongmid: string): AxiosPromise`

- `getPlayUrl(share_id: string): Promise<string>`

# License

MIT License
