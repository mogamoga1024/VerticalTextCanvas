
function cretaeTategakiCanvas(text, font) {
    const canvas = document.createElement("canvas");

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "110%";
    canvas.style.writingMode = "vertical-rl";
    document.body.append(canvas);

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
    canvas.style.position = "";
    canvas.style.top = "";
    canvas.style.left = "";
    canvas.style.writingMode = "";

    return canvas;
}
