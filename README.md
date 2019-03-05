# chart-research

ここではJavaScriptでChartを実装できるライブラリ/プラグイン/フレームワークの調査をして結果を載せていきます。

実際にコードを書いて各ライブラリを触ってみたりして調査を進めていきます。


コードは下記コマンドで動きます。

```shell
npm run serve
# OR
yarn serve
```

最終的なまとめは[こちら](#Conclusion)

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

上記表から・・・

- Chartistは除外
- Highchartsは有料のためいったん除外

### stacked barの注意点

negativeな値のスタックの仕方について、`y = 0`を起点にpositiveな値とnegativeな値が別々にスタックしていくパターンとそうじゃないパターンがあるので要注意（これから決まってくる要件の期待値次第では無理なライブラリもでてくるかも）

## 各ライブラリの詳細

### Chart.js

- vue用のラッパーコンポーネントが何種類かある
  - とはいってもただvueのコンポーネント化してるだけなので、自分で素の`chart.js`触った方がブラックボックスが増えなくてよいかも

#### `Pros:`

- 有名
  - 他に比べると情報が多い
    - 日本語の情報もある
- stacked barとlineのmixedができる

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
- クリックしたデータ取得したりなどのイベント周りもわりと簡単にできる

#### `Cons:`

- 公式にAPI Referenceはあるが、それ以外の情報がほぼない
  - demoやreferenceにないことをやろうとすると困る
- **stacked barとlineのmixedができないっぽい（今の所）**
- 用意されている機能にdocumentが追いついていない
- まだ新しいため知名度がかなり低い

### C3.js

- D3.js basedのグラフライブラリで、作者が日本人の方(Masayuki Tanakaさん)
  - > ただし公式に日本語ドキュメントはない
- vueのラッパーがある
  - > とはいってもvueのコンポーネント化しているだけなのでわざわざ使わなくても良さそう
- **注意点: CSSのインポートが必要！！**
  - 他のライブラリとは異なり、ライブラリ付属のcssを読み込む必要がある
  - svgのスタイルはcssで定義されており、このcssを読み込まないとグラフの見た目が期待通りの結果にならない
  - > 公式の一番最初に書いてあったものの、cssが必要なことに気がつくまでに時間がかかってしまった・・・😅

#### `Pros:`

- 使い方がシンプルで簡単
  - いままで一番シンプルで簡単だった
  - クリックされたデータの取得も簡単にできる！
    - 他のライブラリだとクリックされたデータのindexしかとれないけど、C3では最初からvalueもdataの名前などもとれる上に書き方がシンプルで簡単
- シンプルだけど高機能っぽい
- stacked bar + lineのmixedも簡単にできた
- **stackするグループを決められる**
- 日本語の情報もそこそこある
- cssのクラスが付与されてsvgが出力されるので、クラスがついてるものについてはcssでスタイルをあてられる

#### `Cons:`

- 公式DocumentにExampleなどはたくさんあるけど細かい説明はない
  - かなりシンプルで簡単に使えるので説明が薄くてもそこまで困らないかも
- バグっぽい挙動をいくつか発見

### plotly.js

- [github](https://github.com/plotly/plotly.js)
- [公式サイト](https://plot.ly/plotly-js-scientific-d3-charting-library/)
- [公式ドキュメント](https://plot.ly/javascript/)
- d3 based
- Plotlyという会社がOSSとして公開しているchartライブラリ
  - R版やPython版もある
  - 統計とかデータの可視化に関してかなり強い会社の様子
  - 創業者はハーバードのドクターなど
- 規模が大きい。30種類以上のグラフがある
  - scientific charts
  - 3D graphs
  - statistical charts
  - SVG maps
  - financial charts
  - and more.

#### `Pros:`

- 3Dのグラフが描画ができる
- ズーム、pngダウンロードなど補助ツールが強力
- とにかくグラフの種類が多い
- 機能が豊富（比較した中では最多）でリッチ、公式ドキュメントが膨大
- 開発元のバックグラウンドは専門的な感じで統計やあらゆるデータの可視化に強い会社
- **Edit chart**というリンクを表示するオプションがある
  - Edit chartをクリックするとplotlyのサイトのweb chart editorでグラフを開き直していじれる
  - すごい

#### `Cons:`

- 公式以外で情報が探しにくい
- 公式ドキュメントがみにくい
- とりあえず軽く使うには規模が大きく複雑
  - chart.jsやc3が500kb以下に対してこれは3MBくらいある（とはいっても部分的に使うことも可能っぽい）
- 使用者がちょっと少ない
- **stacked barの挙動（negative valueなデータの積まれ方）が他と異なる**
  - [これ](https://community.plot.ly/t/when-i-am-ploting-a-stacked-bar-chart-with-both-ve-ve-values-using-ployly-js-the-value-in-stacked-bar-is-coming-as-the-substraction-of-ve-value-from-ve-value-but-it-should-come-on-both-side-of-x-axis-wrt-y-axix-ve-ve-value-plz-suggest/497)
  - [と思ったらすでに変更できるように対応済みだった](https://github.com/plotly/plotly.js/issues/475)
    - 他のライブラリみたいにnegative valueをマイナス軸にふるにはbarmodeをstackedからrelativeに切り替えたらできる


#### memo： hovermodeの設定によっては複数のtraceを表示している場合にクリックされたデータひとつを確実に特定できない
  - > 前提：plotly.jsではdatasetをtraceと呼びます
  - クリック時のイベントハンドラーに渡ってくるのはMouseEventとクリックされた場所のデータ
  - hovermodeがclosest以外の場合はクリックされた場所に基づいて複数のtraceが渡ってくるのでどのデータがクリックされたのか判別不可能
  - [公式のコミュニティにも同じ質問](https://community.plot.ly/t/extended-click-event-get-what-point-or-trace-is-clicked/2494)
  - なのでデータひとつを特定したい場合はhovermodeを必ずclosestにする必要がある

### Google Charts

- Google Chartsのライブラリ自体はオープンソースではない
- `script`要素でCDNのライブラリを読み込んで使う形式（なので素で使おうとするとちょっとめんどくさい）
  - いちおう`vue-google-charts`や`vue-charts`といった3rdパーティー製のvueのラッパーがいくつかある
- はじめデータをWebAPIに送るのかと勘違いしていたがおそらくそうではないっぽい

#### `Pros:`

- googleという安心感がる
- 公式ドキュメントが充実している（読みやすいかどうかは別）
- グラフの種類が豊富
- google map apiが使える

#### `Cons:`

- ライブラリをCDNから読み込む形式
  - 3rd partyのコンポーネントを使わないでバニラのvueでやろうとすると微妙な感じ
- 学習コストがちょっと高いかも
  - 使い方がすぐにはわかりにくい
- デフォルトのデザインが微妙
- 他のライブラリと比較するとちょっと特殊

## 知名度 / 人気度の比較

- Star 
  - githubでのstar数
- Avg
  - 平均commit間隔
    - [このサイト](https://www.javascripting.com/)を参考にした数値（どこまで信憑性があるかは不明）
- DL
  - npmでのDL数 via [npm trends](https://www.npmtrends.com/chart.js-vs-plotly.js-vs-c3-vs-apexcharts)（2019-3月時点）

|Lib Name|Star|Avg|DL|
|:------:|:--:|:-:|:-:|
|Chart.js|42,095|22 hours|494,375|
|C3.js|8,236|3.2 days|49,273|
|Plotly.js|9,710|2 hours|33,177|
|ApexCharts|5538|5hours|6,591|

npm trendsでの[DL数の比較グラフ](https://www.npmtrends.com/chart.js-vs-plotly.js-vs-c3-vs-apexcharts)

（ちなみにこの**npm trends**自体はChart.jsでグラフを表示している）

Google ChartについてはGithubにないので不明。

## Conclusion

最終的な候補を下記の3つに絞って評価の概略をまとめました。

- `Chart.js`
  - 圧倒的に知名度があり一番メンテされてそうで信頼性が高い
  - 最低限の機能は揃っている
- `C3.js`
  - 機能やカスタマイズ性は`Chart.js`よりも高い
  - 学習コストも低めでわりと使いやすい
  - ただ、信頼性がちょっと低い印象がある
- `Plotly.js`
  - 知名度では劣るもののライブラリのベースがデータ可視化に特化したそこそこ権威のある会社によって作られているため信頼性は高い
  - 機能は圧倒的に豊富だが習得コストは高め

とりあえず現段階では`Chart.js`が一番無難そうというのが個人的な結論です。

---

## 余談（個人的に感じたこと、ハマったこと）

vueでグラフライブラリを使って見て、特に深いことを考えず雑に作ったからこそ感じたことをまとめます。（グラフに限らず）

フロントエンドを仮に
- 「フロントエンド/フロントエンド」
- 「フロントエンド/バックエンド（vuexまわり）」

の二つに分けて考えたときに、「フロントエンド/フロントエンド」の状態管理については注意が必要と感じました（fluxのように一方通行ではない）

- vueインスタンスのdataプロパティやpropsのように値をセットできるところは注意してないと意図しない状態になっているかもしれない
  - > グラフが意図せず変わったりした😅

- 返り値がdataプロパティに依存しない作りのmethodsとかライフサイクルフックに関してはわりと安全
  - 不変にしたいものについてはdataプロパティじゃなくてmethodsが良さげ

- ネストしてる配列やオブジェクトのコピーに注意（当たり前？）
  - > deepコピーしたいなら`lodash.clonedeep`とかが無難そう

```js
const array1 = [[1,2],[1,2],[1,2]]
const copy1 = [...array1] // → deepコピーではない
const [a, b, c] = copy1
a[0] = 9 // array1[0][0]が影響を受ける

console.log(array1) // [ [ 9, 2 ], [ 1, 2 ], [ 1, 2 ] ]
```
