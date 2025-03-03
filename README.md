## これ is 何

テキストが縦書きされたキャンバスを生成するライブラリ

## サンプル

[普通の日本語](https://mogamoga1024.github.io/VerticalTextCanvas/sample/sample1.html)  
[半角文字](https://mogamoga1024.github.io/VerticalTextCanvas/sample/sample2.html)

## ダウンロード方法

### ファイルが欲しい場合

`vertical_text_canvas.js`を使ってください。

### CDNで使いたい場合

```html
<script src="https://cdn.jsdelivr.net/npm/@mogamoga1024/vertical-text-canvas@latest/vertical_text_canvas.min.js"></script>
```

### npmで使いたい場合

```
npm i @mogamoga1024/vertical-text-canvas
```

```js
import { createVerticalTextCanvas } from '@mogamoga1024/vertical-text-canvas';
```

使いたい関数をimportしてください。

## 関数リファレンス

### createVerticalTextCanvas(text, font, options, maxHeight)

引数のテキストが縦書きされたキャンバスを返します。  
ただし半角文字は横書きされます。  
縦書きにしたい場合は`createAllVerticalTextCanvas`関数を使ってください。

#### 引数

|名称|型|説明|
|-|-|-|
|text|string|縦書きにしたい文字列|
|font|string|太さ、大きさ、フォントファミリーの文字列<br>例：`'400 40px sans-serif'`|
|options|object (省略可)|canvasのcontextに適応させたい設定など<br>また、lineWidthプロパティを定義すると輪郭が追加されます。<br>例：`{ fillStyle: '#ff0000' }`|
|maxHeight|number (省略可)|テキストを描画する際の最大高さ。<br>CanvasRenderingContext2D:fillTextメソッドの第4引数で使う。|

#### 戻り値

`Canvas`

##### 補足

戻り値のCanvasのwidth, heightは引数のtextを表示可能な最小限のサイズ  

maxHeightとoptions.lineWidthの両方を引数で定義すると戻り値のcanvas.heightはmaxHeight + options.lineWidthになります。

#### 使用例

```js:例
const vTextcanvas = createVerticalTextCanvas('はろー', '400 40px sans-serif', { fillStyle: '#ff0000' });
context.drawImage(vTextcanvas, 0, 0);
```

### createAllVerticalTextCanvas(text, font, options, maxHeight)

引数のテキストが縦書きされたキャンバスを返します。  
半角文字も縦書きされます。

#### 引数

`createVerticalTextCanvas`関数と同じ

#### 戻り値

`createVerticalTextCanvas`関数と同じ

#### 使用例

```js:例
const vTextcanvas = createAllVerticalTextCanvas('123 Hello', '400 40px sans-serif', { fillStyle: '#ff0000' });
context.drawImage(vTextcanvas, 0, 0);
```

### createVerticalTextStrokeCanvas(text, font, options, maxHeight)

引数のテキストの輪郭が縦書きされたキャンバスを返します。  
ただし半角文字は横書きされます。  
縦書きにしたい場合は`createAllVerticalTextStrokeCanvas`関数を使ってください。

#### 引数

|名称|型|説明|
|-|-|-|
|text|string|縦書きにしたい文字列|
|font|string|太さ、大きさ、フォントファミリーの文字列<br>例：`'400 40px sans-serif'`|
|options|object (省略可)|canvasのcontextに適応させたい設定など<br>例：`{ strokeStyle: '#00ff00', lineWidth: 3 }`|
|maxHeight|number (省略可)|テキストを描画する際の最大高さ。<br>CanvasRenderingContext2D:strokeTextメソッドの第4引数で使う。|

#### 戻り値

`Canvas`

##### 補足

戻り値のCanvasのwidth, heightは引数のtextを表示可能な最小限のサイズ  

maxHeightとoptions.lineWidthの両方を引数で定義すると戻り値のcanvas.heightはmaxHeight + options.lineWidthになります。

#### 使用例

```js:例
const vTextcanvas = createVerticalTextStrokeCanvas('はろー', '400 40px sans-serif', { strokeStyle: '#00ff00', lineWidth: 3 });
context.drawImage(vTextcanvas, 0, 0);
```

### createAllVerticalTextStrokeCanvas(text, font, options, maxHeight)

引数のテキストの輪郭が縦書きされたキャンバスを返します。  
半角文字も縦書きされます。

#### 引数

`createVerticalTextStrokeCanvas`関数と同じ

#### 戻り値

`createVerticalTextStrokeCanvas`関数と同じ

#### 使用例

```js:例
const vTextcanvas = createAllVerticalTextStrokeCanvas('123 Hello', '400 40px sans-serif', { strokeStyle: '#00ff00', lineWidth: 3 });
context.drawImage(vTextcanvas, 0, 0);
```

### measureVerticalTextCanvasSize(text, font, options)

`createVerticalTextCanvas`関数で生成されるキャンバスのwidthとheightを返します。

#### 引数

|名称|型|説明|
|-|-|-|
|text|string|縦書きにしたい文字列|
|font|string|太さ、大きさ、フォントファミリーの文字列<br>例：`'400 40px sans-serif'`|
|options|object (省略可)|canvasのcontextに適応させたい設定など<br>例：`{ letterSpacing: '10px' }`|
|maxHeight|number (省略可)|テキストを描画する際の最大高さ。<br>CanvasRenderingContext2D:fillTextメソッドの第4引数で使う。|

#### 戻り値

`{ width: キャンバスのwidth, height: キャンバスのheight }`

#### 使用例

```js:例
const vTextcanvasSize = measureVerticalTextCanvasSize('はろー', '400 40px sans-serif', { letterSpacing: '10px' });
console.log(vTextcanvasSize.width, vTextcanvasSize.height);
```

### measureAllVerticalTextCanvasSize(text, font, options)

`createAllVerticalTextCanvas`関数で生成されるキャンバスのwidthとheightを返します。

#### 引数

`measureVerticalTextCanvasSize`関数と同じ

#### 戻り値

`measureVerticalTextCanvasSize`関数と同じ

#### 使用例

```js:例
const vTextcanvasSize = measureAllVerticalTextCanvasSize('123 Hello', '400 40px sans-serif', { letterSpacing: '10px' });
console.log(vTextcanvasSize.width, vTextcanvasSize.height);
```

## 無理なこと

CSSを適用させる必要があるため、WebWorker内で使えないと思われます。

## 自分がCSSでCanvasが縦書きができることを知ったリポジトリ（偉大なる先駆者）

https://github.com/yuneco/canvas-draw-styled-text

## ライセンス

MIT or WTFLP or くいなちゃんライセンス
