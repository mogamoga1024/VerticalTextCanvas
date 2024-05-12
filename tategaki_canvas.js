
function cretaeTategakiCanvas(text, font) {
    const canvas = document.createElement("canvas");
    document.body.append(canvas); // styleをいじる前にDOMを追加しないと縦書きにならない。

    canvas.style.writingMode = "vertical-rl";

    const context = canvas.getContext("2d");
    context.font = font;
    context.textBaseline = "top";
    const measure = context.measureText(text);
    const textWidth = measure.width;
    const textHeight = Math.abs(measure.actualBoundingBoxAscent) + measure.actualBoundingBoxDescent;

    canvas.width = textHeight;
    canvas.height = textWidth;
    context.rotate(Math.PI / 2);

    context.font = font;
    context.textBaseline = "top";
    context.fillText(text, 0, -textHeight);

    document.body.removeChild(canvas);

    return canvas;
}
