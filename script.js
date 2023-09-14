
const imageElement = document.getElementById('myImage');
const buttonElement = document.getElementById('changeImageBtn');

buttonElement.addEventListener('click', function() {
    imageElement.src = 'im2.jpg';
    imageElement.alt = 'A different image';
    buttonElement.textContent = 'Image Changed!';
});

const imageElement1 = document.getElementById('myImage1');
const buttonElement1 = document.getElementById('changeImageBtn1');

buttonElement1.addEventListener('click', function() {
    imageElement1.src = 'im2.jpg';
    imageElement1.alt = 'A different image';
    buttonElement1.textContent = 'Image Changed!';
});

const imageElement2 = document.getElementById('myImage2');
const buttonElement2 = document.getElementById('changeImageBtn2');

buttonElement2.addEventListener('click', function() {
    imageElement2.src = 'im2.jpg';
    imageElement2.alt = 'A different image';
    buttonElement2.textContent = 'Image Changed!';
});

const videoElement1 = document.getElementById('vid1');
const btnElement1 = document.getElementById('Btn1');

btnElement1.addEventListener('click', function() {
    videoElement1.src = 'Ganyu.mp4';
    videoElement1.alt = 'A different video';
    btnElement1.textContent = 'Video Changed!';
});

const videoElement2 = document.getElementById('vid2');
const btnElement2 = document.getElementById('Btn2');

btnElement2.addEventListener('click', function() {
    videoElement2.src = 'Ganyu.mp4';
    videoElement2.alt = 'A different video';
    btnElement2.textContent = 'Video Changed!';
});

const videoElement3 = document.getElementById('vid3');
const btnElement3 = document.getElementById('Btn3');

btnElement3.addEventListener('click', function() {
    videoElement3.src = 'Ganyu.mp4';
    videoElement3.alt = 'A different video';
    btnElement3.textContent = 'Video Changed!';
});




