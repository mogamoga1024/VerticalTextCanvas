
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d', { willReadFrequently: true });

const font = '900 40px serif';

const image1 = createVerticalTextCanvas('123 Lemon', font, { fillStyle: '#00ffff', strokeStyle: '#ff0000', lineWidth: 0.8 });
const image2 = createAllVerticalTextCanvas('456 Soda', font, { fillStyle: '#00ff00' });
const image3 = createAllVerticalTextStrokeCanvas('Chocolate', font, { strokeStyle: '#0000ff', lineWidth: 5 }, 150);

canvas.width = 400;
canvas.height = 400;
context.fillStyle = '#eeeeee';
context.fillRect(0, 0, canvas.width, canvas.height);
context.drawImage(image1, canvas.width * 3 / 4 - image1.width / 2, (canvas.height - image1.height) / 2);
context.drawImage(image2, canvas.width / 2 - image2.width / 2, (canvas.height - image2.height) / 2);
context.drawImage(image3, canvas.width / 4 - image3.width / 2, (canvas.height - image3.height) / 2);
