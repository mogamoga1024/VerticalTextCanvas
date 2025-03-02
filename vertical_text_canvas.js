
(() => {
    const createVerticalTextCanvas = (text, font, options = {}, maxHeight) => {
        return _createVerticalTextCanvas(text, font, false, true, options, maxHeight);
    };
    
    const createAllVerticalTextCanvas = (text, font, options = {}, maxHeight) => {
        return _createVerticalTextCanvas(text, font, true, true, options, maxHeight);
    };

    const createVerticalTextStrokeCanvas = (text, font, options = {}, maxHeight) => {
        return _createVerticalTextCanvas(text, font, false, false, options, maxHeight);
    };
    
    const createAllVerticalTextStrokeCanvas = (text, font, options = {}, maxHeight) => {
        return _createVerticalTextCanvas(text, font, true, false, options, maxHeight);
    };

    const measureVerticalTextCanvasSize = (text, font, options = {}, maxHeight) => {
        return _measureVerticalTextCanvasSize(text, font, false, options, maxHeight);
    };

    const measureAllVerticalTextCanvasSize = (text, font, options = {}, maxHeight) => {
        return _measureVerticalTextCanvasSize(text, font, true, options, maxHeight);
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

    const _measureVerticalTextCanvasSize = (text, font, shouldHankakuVertical, options = {}, maxHeight) => {
        const canvas = appendCanvas(shouldHankakuVertical);
        const context = canvas.getContext('2d');
        context.font = font;
        context.textBaseline = 'top';
        Object.assign(context, options);
        const measure = context.measureText(text);

        let lineWidth = 0;
        if (options?.lineWidth !== undefined) {
            lineWidth = options.lineWidth;
        }
        // 90度回転させるため縦横が入れ替わる
        const height = Math.min(measure.width, maxHeight !== undefined ? maxHeight : Infinity) + lineWidth;
        const width = measure.fontBoundingBoxAscent + measure.fontBoundingBoxDescent + lineWidth;
        
        removeCanvas(canvas);

        return { width, height };
    };
    
    const _createVerticalTextCanvas = (text, font, shouldHankakuVertical, useFillText, options, maxHeight) => {
        const isFirefox = /^.*Firefox.*$/.test(window.navigator.userAgent);

        const canvas = appendCanvas(shouldHankakuVertical);
        const context = canvas.getContext('2d');
        context.font = font;
        context.textBaseline = 'top';
        Object.assign(context, options);
        const measure = context.measureText(text);
        const textWidth = Math.min(measure.width, maxHeight !== undefined ? maxHeight : Infinity);
        const textHeight = measure.fontBoundingBoxAscent + measure.fontBoundingBoxDescent;

        let lineWidth = 0;
        if (options?.lineWidth !== undefined) {
            lineWidth = options.lineWidth;
        }
        canvas.width = textHeight + lineWidth;
        canvas.height = textWidth + lineWidth;

        if (!isFirefox) {
            context.rotate(Math.PI / 2);
        }
    
        context.font = font;
        context.textBaseline = 'middle';
        Object.assign(context, options);
        const x = isFirefox ? canvas.width / 2 + lineWidth / 2 : lineWidth / 2;
        const y = isFirefox ? lineWidth / 2 : -textHeight / 2 - lineWidth / 2;
        const args = [text, x, y];
        if (maxHeight !== undefined) {
            args.push(maxHeight);
        }
        if (useFillText) {
            context.fillText(...args);
        }
        if (lineWidth !== 0) {
            context.strokeText(...args);
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
