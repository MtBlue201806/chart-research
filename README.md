# chart-research

ここではJavaScriptでChartを実装できるライブラリ/プラグイン/フレームワークの調査をして結果を載せていきます。

実際にコードを書いて各ライブラリを触ってみたりして調査を進めていきます。


コードは下記コマンドで動きます。

```shell
npm run serve
# OR
yarn serve
```

---

### 欲しいグラフ

- 線
- 棒
- 棒のstacked
- 線と棒の Mixed / Combined

### 欲しい機能

- イベントの捕捉
  - 各データのクリックやハイライト
  - ラベルのクリック
- リアルタイムでの変化、アニメーション

## 調査候補のライブラリの一覧

ライセンス的に問題なく、基本的な棒グラフや線グラフなどに対応しているライブラリでそれなりに知名度のあるものを選びました。

- Chart.js
- Google Charts
- Chartist
- ApexCharts
- Highcharts（有料）
- C3.js
- plotly.js

### 候補から除外したもの

- D3.js
  - でかい。
- Three.js
  - WebGLで3DCGを描画できる。

メタでオーバーキルなライブラリは調査コスト、学習コストの面から除外しました。

## 機能の比較

|name|mixed|event|animation|comment|
|:--:|:---:|:---:|:-----:|:--:|
|Chart.js|◯|◯|◯|canvas / シンプル / デザイン◎|
|Google Charts|◯|◯|◯|google / OSSではない / WebAPI / クライアント側からgoogleのAPIにアクセスが必要|
|Chartist|×|△|◯|軽い / CSS Heavy / 機能は少ない / シンプル / デザイン◎|
|ApexCharts|◯|◯|◯|新しい / pngやsvgのダウンロードができる / シンプル / 新しいので知名度は低い / 直近のcommit頻度はかなり高いかも / デザイン◎|
|plotly.js|◯|◯|◯|D3.js based / グラフの種類がかなり多い / 複雑 |
|C3.js|◯|◯|◯|D3.js based / シンプル|
|Highcharts|◯|◯|◯|有料 / 多機能|

## 詳細レビュー

### Chart.js

- vue用のラッパーコンポーネントが何種類かある
  - とはいってもただvueのコンポーネント化してるだけなので、自分で素の`chart.js`触った方がブラックボックスが増えなくてよいかも

#### `Pros:`

- 有名
  - 他に比べると情報が多い
    - 日本語の情報もある
- reactiveに更新できる
- stacked barとlineのmixedもできる

#### `Cons:`

- 用意されていないことはできない。
- 情報が多いとは言っても公式documentに書かれてないことがあったりする（手が回ってない？）

### ApexCharts

#### `Pros:`

- 公式でVueのコンポーネントが用意されている
  - propsにパラメーターを渡して使う（データやオプションなど。イベントのハンドラーも渡せる）
  - 使い方はわりと簡単で、データの変更に対してもリアクティブ
  - オプションが豊富
    - ズーム、svgの書き出し、グリッドやツールチップのカスタマイズ、レジェンド機能など
    - すぐにいろんな機能が使える上、最初からアニメーションがついている
  - demoが豊富にあるためdemoにやりたいパターンがあればかなり容易に実装できる
  - コミット頻度が高く開発が盛んで、どんどん機能が追加されている(2019/02/21現在)
- reactiveに更新できる
- クリックしたデータ取得したりなどのイベント周りもわりと簡単にできる

#### `Cons:`

- 公式にAPI Referenceはあるが、それ以外の情報がほぼない
  - demoやreferenceにないことをやろうとすると困る
- **stacked barとlineのmixedができないっぽい（今の所）**
- 用意されている機能にdocumentが追いついていない
- まだ新しいため知名度が低い

### C3.js

D3.js basedのグラフライブラリで、作者が日本人の方(Masayuki Tanakaさん)
（でも日本語ドキュメントはない）

#### `Pros:`

- 使い方がシンプルで簡単
- シンプルだけど高機能っぽい
- グラフの状態コントロールが売りらしい

#### `Cons:`

- 公式DocumentにExampleなどはたくさんあるけど細かい説明はない
  - 説明は薄い