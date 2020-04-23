# RandomBalls.js

ランダムなサイズ・透明度の円がふわふわと動くJavaScriptです。
クリックするとボールが増えます。

[デモはこちら](https://gita-mw.github.io/randomballs/dist/demo.html)  
[フロントページはこちら](https://gita-mw.github.io/randomballs/)

---

## 基本の使い方

### STEP1
HTMLファイルに`<canvas>`タグを記述し、好きなID名をつけます。

例：
~~~html
<canvas id="randomBalls"></canvas>
~~~

### STEP2
以下のJSファイルを`</body>`閉じタグ直前で読み込みます。

例：
~~~html
<script src="randomballs-settings.js"></script>
<script src="randomballs.min.js"></script>
~~~

### STEP3
`randomballs-settings.js`ファイルを開き、11行目をSTEP1でつけたID名に書き換えます。

例：
~~~javascript
var randomBalls_canvasID = 'randomBalls'; //<canvas>のIDを''内に記入
~~~

---

## 高度な設定

`randomballs-settings.js`ファイルを書き換えることでさまざな設定をすることができます。

### `<canvas>`の背景色設定
~~~javascript
var randomBalls_canvasColor = 'rgba(255, 127, 80, 0.8)';
~~~
- `<canvas>`の背景色を好きな色に変更することができます。
- RGBa指定だけでなく、CSSで使用できる色の指定であればいずれも使用可能です。
- `transparent`とかけば透明になります。

### `<canvas>`のサイズ設定
~~~javascript
var randomBalls_canvasSize = false;
~~~
- `<canvas>`のサイズを設定することができます。
- `true`または`false`で指定します。
- `true`の時は、`<canvas>`の親要素のサイズと同じになります。
- `false`の時は、ブラウザの表示画面いっぱいに広がります。

### ボールの動く速度
~~~javascript
var randomBalls_ballsSpeed = 1;
~~~
- 数値を入力することで、ボールの動く速度を変更することができます。
- 数字が小さいとゆるやかに動き、大きいと速く動きます。

### ボールの最大半径
~~~javascript
var randomBalls_ballsSize = 23;
~~~
- 数値を入力することで、ランダムに生成されるボールの大きさの、最大半径を変更することができます。

### 初期ボールの個数
~~~javascript
var randomBalls_initialBalls = 20;
~~~
- ページ読み込み時に最初に生成されるボールの個数を変更することができます。

### 初期ボールの色
~~~javascript
var randomBalls_initialBallsColor = [255, 255, 255]; //ボールの色（RGB）
~~~
- ページ読み込み時に最初に生成されるボールの色を変更することができます。
- `[]`内に、RGBカラーのR、G、Bの数値をそれぞれ入力します。
- RGB以外の指定はできません。

### 初期ボールの透明度
~~~javascript
var randomBalls_initialBallsOpacity = 4;
~~~
- ページ読み込み時に最初にランダムに生成されるボールの透明度を変更することができます。
- `1`-`9`の数値を入力することができます。

### クリックして増やせるボールの最大個数
~~~javascript
var randomBalls_extraBallsMax = 10;
~~~
- `<canvas>`の領域をクリックするとボールを増やすことができます。
- 数値を入力することで増やせる最大個数を変更することができます。

### クリックして増やせるボールの透明度
~~~javascript
var randomBalls_extraBallsColor = 'rgba(255,255,0,0.15)';
~~~
- クリックして増やせるボールの色を変更することができます。
- RGBa指定だけでなく、CSSで使用できる色の指定であればいずれも使用可能です。

---

## 対応ブラウザ
2020年4月23日時点で、以下のブラウザでの動作を確認しています。  
Chrome, Safari, Firefox Developer Edition