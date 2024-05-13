
(() => {
    const cretaeVerticalTextCanvas = (text, font, options = {}) => {
        return _cretaeVerticalTextCanvas(text, font, false, false, 0, options);
    }
    
    const cretaeAllVerticalTextCanvas = (text, font, options = {}) => {
        return _cretaeVerticalTextCanvas(text, font, true, false, 0, options);
    }

    const cretaeVerticalStrokeTextCanvas = (text, font, options = {}, maxWidth) => {
        return _cretaeVerticalTextCanvas(text, font, false, true, maxWidth, options);
    }
    
    const cretaeAllVerticalStrokeTextCanvas = (text, font, options = {}, maxWidth) => {
        return _cretaeVerticalTextCanvas(text, font, true, true, maxWidth, options);
    }
    
    const _cretaeVerticalTextCanvas = (text, font, shouldHankakuVertical, useStrokeText, maxWidth, options) => {
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
        if (useStrokeText) {
            if (maxWidth !== undefined) {
                context.strokeText(text, 0, -textHeight, maxWidth);
            }
            else {
                context.strokeText(text, 0, -textHeight);
            }
        }
        else {
            context.fillText(text, 0, -textHeight);
        }
    
        document.body.removeChild(canvas);
        canvas.style.position = '';
        canvas.style.top = '';
        canvas.style.left = '';
        canvas.style.writingMode = '';
    
        return canvas;
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            cretaeVerticalTextCanvas, cretaeAllVerticalTextCanvas,
            cretaeVerticalStrokeTextCanvas, cretaeAllVerticalStrokeTextCanvas
        };
    }
    else if (typeof window !== 'undefined') {
        window.cretaeVerticalTextCanvas = cretaeVerticalTextCanvas;
        window.cretaeAllVerticalTextCanvas = cretaeAllVerticalTextCanvas;
        window.cretaeVerticalStrokeTextCanvas = cretaeVerticalStrokeTextCanvas;
        window.cretaeAllVerticalStrokeTextCanvas = cretaeAllVerticalStrokeTextCanvas;
    }
})();
