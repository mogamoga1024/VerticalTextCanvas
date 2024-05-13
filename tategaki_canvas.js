
(() => {
    const cretaeVerticalCanvas = (text, font, options = {}) => {
        return _cretaeVerticalCanvas(text, font, false, options);
    }
    
    const cretaeAllVerticalCanvas = (text, font, options = {}) => {
        return _cretaeVerticalCanvas(text, font, true, options);
    }
    
    const _cretaeVerticalCanvas = (text, font, shouldHankakuVertical, options) => {
        const canvas = document.createElement('canvas');
    
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '110%';
        canvas.style.writingMode = 'vertical-rl';
        if (shouldHankakuVertical) {
            canvas.style.textOrientation = 'upright';
        }
        document.body.append(canvas);
    
        const context = canvas.getContext('2d');
        context.font = font;
        context.textBaseline = 'top';
        Object.assign(context, options);
        const measure = context.measureText(text);
        const textWidth = measure.width;
        const textHeight = Math.abs(measure.actualBoundingBoxAscent) + measure.actualBoundingBoxDescent;
    
        canvas.width = textHeight;
        canvas.height = textWidth;
        context.rotate(Math.PI / 2);
    
        context.font = font;
        context.textBaseline = 'top';
        Object.assign(context, options);
        context.fillText(text, 0, -textHeight);
    
        document.body.removeChild(canvas);
        canvas.style.position = '';
        canvas.style.top = '';
        canvas.style.left = '';
        canvas.style.writingMode = '';
    
        return canvas;
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            cretaeVerticalCanvas, cretaeAllVerticalCanvas
        };
    }
    else if (typeof window !== 'undefined') {
        window.cretaeVerticalCanvas = cretaeVerticalCanvas;
        window.cretaeAllVerticalCanvas = cretaeAllVerticalCanvas;
    }
})();
