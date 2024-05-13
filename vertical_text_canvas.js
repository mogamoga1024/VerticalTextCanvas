
(() => {
    const cretaeVerticalTextCanvas = (text, font, options = {}) => {
        return _cretaeVerticalTextCanvas(text, font, false, options);
    }
    
    const cretaeAllVerticalTextCanvas = (text, font, options = {}) => {
        return _cretaeVerticalTextCanvas(text, font, true, options);
    }
    
    const _cretaeVerticalTextCanvas = (text, font, shouldHankakuVertical, options) => {
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
            cretaeVerticalTextCanvas, cretaeAllVerticalTextCanvas
        };
    }
    else if (typeof window !== 'undefined') {
        window.cretaeVerticalTextCanvas = cretaeVerticalTextCanvas;
        window.cretaeAllVerticalTextCanvas = cretaeAllVerticalTextCanvas;
    }
})();
