
(() => {
    const createVerticalTextCanvas = (text, font, options = {}) => {
        return _createVerticalTextCanvas(text, font, false, false, 0, options);
    };
    
    const createAllVerticalTextCanvas = (text, font, options = {}) => {
        return _createVerticalTextCanvas(text, font, true, false, 0, options);
    };

    const createVerticalTextStrokeCanvas = (text, font, options = {}, maxWidth) => {
        return _createVerticalTextCanvas(text, font, false, true, maxWidth, options);
    };
    
    const createAllVerticalTextStrokeCanvas = (text, font, options = {}, maxWidth) => {
        return _createVerticalTextCanvas(text, font, true, true, maxWidth, options);
    };

    const measureVerticalTextCanvasSize = (text, font, options = {}) => {
        return _measureVerticalTextCanvasSize(text, font, false, options);
    };

    const measureAllVerticalTextCanvasSize = (text, font, options = {}) => {
        return _measureVerticalTextCanvasSize(text, font, true, options);
    };

    const appendCanvas = (shouldHankakuVertical) => {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '110%';
        canvas.style.writingMode = 'vertical-rl';
        if (shouldHankakuVertical) {
            canvas.style.textOrientation = 'upright';
        }
        document.body.append(canvas);
        return canvas;
    };

    const removeCanvas = (canvas) => {
        document.body.removeChild(canvas);
        canvas.style.position = '';
        canvas.style.top = '';
        canvas.style.left = '';
        canvas.style.writingMode = '';
    };

    const _measureVerticalTextCanvasSize = (text, font, shouldHankakuVertical, options = {}) => {
        const canvas = appendCanvas(shouldHankakuVertical);
        const context = canvas.getContext('2d');
        context.font = font;
        context.textBaseline = 'top';
        Object.assign(context, options);
        const measure = context.measureText(text);

        // 90度回転させるため縦横が入れ替わる
        const height = measure.width;
        const width = Math.abs(measure.actualBoundingBoxAscent) + measure.actualBoundingBoxDescent;
        
        removeCanvas(canvas);

        return { width, height };
    };
    
    const _createVerticalTextCanvas = (text, font, shouldHankakuVertical, useStrokeText, maxWidth, options) => {
        const canvas = appendCanvas(shouldHankakuVertical);
        const context = canvas.getContext('2d');
        context.font = font;
        context.textBaseline = 'top';
        Object.assign(context, options);
        const measure = context.measureText(text);
        const textWidth = measure.width;
        const textHeight = Math.abs(measure.actualBoundingBoxAscent) + measure.actualBoundingBoxDescent;
    
        let lineWidth = 0;
        if (useStrokeText && options?.lineWidth !== undefined) {
            lineWidth = options.lineWidth;
        }
        canvas.width = textHeight + lineWidth;
        canvas.height = textWidth + lineWidth;
        context.rotate(Math.PI / 2);
    
        context.font = font;
        context.textBaseline = 'middle';
        Object.assign(context, options);
        if (useStrokeText) {
            if (maxWidth !== undefined) {
                context.strokeText(text, lineWidth / 2, -textHeight / 2 - lineWidth / 2, maxWidth);
            }
            else {
                context.strokeText(text, lineWidth / 2, -textHeight / 2 - lineWidth / 2);
            }
        }
        else {
            context.fillText(text, 0, -textHeight / 2);
        }
    
        removeCanvas(canvas);
        
        return canvas;
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            createVerticalTextCanvas, createAllVerticalTextCanvas,
            createVerticalTextStrokeCanvas, createAllVerticalTextStrokeCanvas,
            measureVerticalTextCanvasSize, measureAllVerticalTextCanvasSize
        };
    }
    else if (typeof window !== 'undefined') {
        window.createVerticalTextCanvas = createVerticalTextCanvas;
        window.createAllVerticalTextCanvas = createAllVerticalTextCanvas;
        window.createVerticalTextStrokeCanvas = createVerticalTextStrokeCanvas;
        window.createAllVerticalTextStrokeCanvas = createAllVerticalTextStrokeCanvas;
        window.measureVerticalTextCanvasSize = measureVerticalTextCanvasSize;
        window.measureAllVerticalTextCanvasSize = measureAllVerticalTextCanvasSize;
    }
})();
