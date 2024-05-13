
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d', { willReadFrequently: true });

const font = '400 40px serif';

const image1 = createVerticalTextCanvas('123 Lemon', font, { fillStyle: '#ff0000' });
const image1s = createVerticalTextStrokeCanvas('123 Lemon', font, { strokeStyle: '#00ffff', lineWidth: 3 });
const image2 = createAllVerticalTextCanvas('456 Soda', font, { fillStyle: '#00ff00' });
const image3 = createAllVerticalTextCanvas('Chocolate', font, { fillStyle: '#0000ff' });
const image3s = createAllVerticalTextStrokeCanvas('Chocolate', font, { strokeStyle: '#ffff00', lineWidth: 3 });

canvas.width = 400;
canvas.height = 400;
context.fillStyle = '#eeeeee';
context.fillRect(0, 0, canvas.width, canvas.height);
context.drawImage(image1s, canvas.width * 3 / 4 - image1s.width / 2, (canvas.height - image1s.height) / 2);
context.drawImage(image1, canvas.width * 3 / 4 - image1.width / 2, (canvas.height - image1.height) / 2);
context.drawImage(image2, canvas.width / 2 - image2.width / 2, (canvas.height - image2.height) / 2);
context.drawImage(image3s, canvas.width / 4 - image3s.width / 2, (canvas.height - image3s.height) / 2);
context.drawImage(image3, canvas.width / 4 - image3.width / 2, (canvas.height - image3.height) / 2);
