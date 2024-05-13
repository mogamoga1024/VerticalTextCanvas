
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d', { willReadFrequently: true });

const font = '400 40px sans-serif';

const image1 = createVerticalTextCanvas('「ああ～、', font, { fillStyle: '#ff0000' });
const image1s = createVerticalTextStrokeCanvas('「ああ～、', font, { strokeStyle: '#00ffff', lineWidth: 3 });
const image2 = createVerticalTextCanvas('心がぴょんぴょん', font, { fillStyle: '#00ff00' });
const image3 = createVerticalTextCanvas('するんじゃ～。」', font, { fillStyle: '#0000ff' });
const image3s = createVerticalTextStrokeCanvas('するんじゃ～。」', font, { strokeStyle: '#ffff00', lineWidth: 3 });

canvas.width = 400;
canvas.height = 400;
context.fillStyle = '#eeeeee';
context.fillRect(0, 0, canvas.width, canvas.height);
context.drawImage(image1s, canvas.width * 3 / 4 - image1s.width / 2, 10);
context.drawImage(image1, canvas.width * 3 / 4 - image1.width / 2, 10);
context.drawImage(image2, canvas.width / 2 - image2.width / 2, canvas.height / 2 - image2.height / 2);
context.drawImage(image3s, canvas.width / 4 - image3s.width / 2, canvas.height - image3s.height - 10);
context.drawImage(image3, canvas.width / 4 - image3.width / 2, canvas.height - image3.height - 10);
