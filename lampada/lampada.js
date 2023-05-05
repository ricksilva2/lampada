const turnOn = document.getElementById ( 'turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function stopAll () {
    
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if (!stopAll ())  {
    lamp.src = './img/ligadaa.jpg';
    }
};

function lampOff() {
    if (!stopAll ())  {
       lamp.src = './img/desligadaa.jpg';
    }
}

function lampBroken() {
    if (!stopAll ())  {
    lamp.src = './img/quebrada.jpg'
    }
}


turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener('click' , lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);

