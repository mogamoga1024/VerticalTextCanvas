
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d', { willReadFrequently: true });

const font = '400 35px sans-serif';

const image1a = createVerticalStrokeTextCanvas('「ああ～、', font, { strokeStyle: '#00ffff', lineWidth: 1 });
const image1b = createVerticalTextCanvas('「ああ～、', font, { fillStyle: '#ff0000' });
const image2 = createVerticalTextCanvas('心がぴょんぴょん', font, { fillStyle: '#00ff00' });
const image3a = createVerticalStrokeTextCanvas('するんじゃ～。」', font, { strokeStyle: '#ffff00', lineWidth: 1 });
const image3b = createVerticalTextCanvas('するんじゃ～。」', font, { fillStyle: '#0000ff' });

canvas.width = 400;
canvas.height = 400;
context.fillStyle = '#eeeeee';
context.fillRect(0, 0, canvas.width, canvas.height);
context.drawImage(image1a, canvas.width * 3 / 4 - image1a.width / 2, 10);
context.drawImage(image1b, canvas.width * 3 / 4 - image1b.width / 2, 10);
context.drawImage(image2, canvas.width / 2 - image2.width / 2, canvas.height / 2 - image2.height / 2);
context.drawImage(image3a, canvas.width / 4 - image3a.width / 2, canvas.height - image3a.height - 10);
context.drawImage(image3b, canvas.width / 4 - image3b.width / 2, canvas.height - image3b.height - 10);
