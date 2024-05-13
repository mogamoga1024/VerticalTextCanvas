## これ is 何

縦書きができるキャンバスを生成するライブラリ

## 使い方

### createVerticalTextCanvas(text, font, options)

#### 引数

|名称|型|説明|
|-|-|-|
|text|string|縦書きにしたい文字列|
|font|string|太さ、大きさ、フォントファミリーの文字列<br>例：`'400 40px sans-serif'`|
|options|object (省略可)|canvasのcontextに適応させたい設定など<br>例：`{ fillStyle: '#ff0000' }`|

#### 戻り値

Canvas

備考：width, heightは引数のtextを表示可能な最小限のサイズ

#### 使用例

```js:例
const vTextcanvas = createVerticalTextCanvas('はろー', '400 40px sans-serif', { fillStyle: '#ff0000' });
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
