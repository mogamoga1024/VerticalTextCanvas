## これ is 何

縦書きができるキャンバスを生成するライブラリ

## 使い方

### createVerticalTextCanvas(text, font, options)

引数のテキストが縦書きされたキャンバスを返します。  
ただし半角文字は横書きされます。

#### 引数

|名称|型|説明|
|-|-|-|
|text|string|縦書きにしたい文字列|
|font|string|太さ、大きさ、フォントファミリーの文字列<br>例：`'400 40px sans-serif'`|
|options|object (省略可)|canvasのcontextに適応させたい設定など<br>例：`{ fillStyle: '#ff0000' }`|

#### 戻り値

Canvas

備考：width, heightは引数のtextを表示可能な最小限のサイズ

### 備考

半角文字は縦書きになりません。  
縦書きにしたい場合は`createAllVerticalTextCanvas`関数を使ってください。

#### 使用例

```js:例
const vTextcanvas = createVerticalTextCanvas('はろー', '400 40px sans-serif', { fillStyle: '#ff0000' });
context.drawImage(vTextcanvas, 0, 0);
```

### createAllVerticalTextCanvas(text, font, options)

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

### createVerticalTextStrokeCanvas(text, font, options, maxWidth)

引数のテキストの輪郭が縦書きされたキャンバスを返します。  
ただし半角文字は横書きされます。

#### 引数

|名称|型|説明|
|-|-|-|
|text|string|縦書きにしたい文字列|
|font|string|太さ、大きさ、フォントファミリーの文字列<br>例：`'400 40px sans-serif'`|
|options|object (省略可)|canvasのcontextに適応させたい設定など<br>例：`{ strokeStyle: '#00ff00', lineWidth: 3 }`|
|maxWidth|number (省略可)|テキストを描画する際の最大幅。<br>CanvasRenderingContext2D:strokeTextメソッドの第3引数で使う。|

#### 戻り値

Canvas

備考：width, heightは引数のtextを表示可能な最小限のサイズ

### 備考

半角文字は縦書きになりません。  
縦書きにしたい場合は`createAllVerticalTextStrokeCanvas`関数を使ってください。

#### 使用例

```js:例
const vTextcanvas = createVerticalTextStrokeCanvas('はろー', '400 40px sans-serif', { strokeStyle: '#00ff00', lineWidth: 3 });
context.drawImage(vTextcanvas, 0, 0);
```

### createAllVerticalTextStrokeCanvas(text, font, options, maxWidth)

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

## サンプル

[普通の日本語](https://mogamoga1024.github.io/VerticalTextCanvas/sample/sample1.html)  
[半角英字](https://mogamoga1024.github.io/VerticalTextCanvas/sample/sample2.html)

## 無理なこと

CSSを適用させる必要があるため、WebWorker内で使えないと思われます。

## 自分がCSSでCanvasが縦書きができることを知ったリポジトリ（先駆者）

https://github.com/yuneco/canvas-draw-styled-text

## ライセンス

MIT or WTFLP or くいなちゃんライセンス
