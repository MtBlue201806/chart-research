# chart-research

JavaScriptでChartを実装できるライブラリ/プラグイン/フレームワークについて調べます。

### 欲しいグラフ

- 線
- 棒
- 線と棒の Mixed / Combined

### 欲しい機能

- イベントの捕捉
  - 各データのクリックやハイライト
  - ラベルのクリック
- リアルタイムでの変化、アニメーション

## 調査したライブラリの一覧

ライセンス的に問題なく、基本的な棒グラフや線グラフなどに対応しているライブラリでそれなりに知名度のあるものを選びました。

- Chart.js
- Google Charts
- Chartist
- ApexCharts
- Highcharts（有料）
- C3.js
- plotly.js

### 調査から除外したもの

- D3.js
  - チャート専用ではない。D3関連のリポジトリが50件以上ある。
- Three.js
  - WebGLで3DCGを描画できる。

上記のメタでオーバーキルなライブラリは調査コスト、学習コストの面から除外します。

## 機能の比較

|name|mixed|event|animation|comment|
|:--:|:---:|:---:|:-----:|:--:|
|Chart.js|◯|◯|◯|canvas / シンプル / デザイン◎|
|Google Charts|◯|◯|◯|google / OSSではない / WebAPI / クライアント側からgoogleのAPIにアクセスが必要|
|Chartist|×|△|◯|軽い / CSS Heavy / 機能は少ない / シンプル / デザイン◎|
|ApexCharts|◯|◯|◯|新しい / 付箋機能あり / シンプル / 新しいので知名度は低い / しかし直近のcommit頻度はかなり高い / デザイン◎|
|plotly.js|◯|◯|◯|D3.js based / グラフの種類がかなり多い / 複雑 |
|C3.js|◯|◯|◯|D3.js based / シンプル|
|Highcharts|◯|◯|◯|有料 / 多機能|
