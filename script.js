let popup = document.getElementById('popup');
let frontend = document.getElementById('frontend').addEventListener('click', close);

setInterval(poop, 10000);

function poop(){
    popup.style.visibility = 'visible';

}

function close(){
    popup.style.visibility = 'hidden';
    console.log('Hi')
}