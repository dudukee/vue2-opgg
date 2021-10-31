# UPDATE

本项目现处于停止维护状态：国服塞拉斯上线之后未更新过英雄数据。

# vue2-opgg

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8888
npm run dev

# build for production with minification
npm run build
```


## API

- 总体数据  `https://www.op.gg/app/champion/statistics/list.json/`

- 英雄数据 `https://www.op.gg/app/champion/summary.json/key={championName}`



以下接口UA需设置为`Mozilla/5.0 (Linux; Android 4.4.2; R8207 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36; OP.GG Mobile Android (4.8.0); X-DEVICE-WIDTH=540`

- 详情 `http://www.op.gg/champion/{championName}/statistics/{position}`

- 物品 `http://www.op.gg/champion/{championName}/statistics/{position}/item`

- 技能 `http://www.op.gg/champion/{championName}/statistics/{position}/skill`

- 符文 `http://www.op.gg/champion/{championName}/statistics/{position}/rune`

- 趋势 `http://www.op.gg/champion/{championName}/statistics/{position}/trend`

- Counters `http://www.op.gg/champion/{championName}/statistics/{position}/matchup`
