'use strict';

import addWordsFunc from './modules/Words.js';
import training from './modules/Training.js';

let createStartContent = function () {
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('wrap');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';

    const descrWrap = document.createElement('div');
    descrWrap.classList.add('descrWrap');
    wrapper.appendChild(descrWrap);

    let descrHeader = document.createElement('h1')
    descrWrap.appendChild(descrHeader);
    descrHeader.innerHTML = 'Вітаємо Вас!'

    let descr = document.createElement('div');
    descr.classList.add('descr');
    descrWrap.appendChild(descr);

    let desc1 = document.createElement('p');
    desc1.classList.add('desc1');
    descr.appendChild(desc1);
    desc1.innerHTML = 'Ви знаходитесь у додатку, який допоможе Вам вивчити любу іноземну мову, зокрема англійську.';

    let desc2 = document.createElement('p');
    desc2.classList.add('desc2');
    descr.appendChild(desc2);
    desc2.innerHTML = 'Отже, перш ніж переходити до тренування, необхідно додати нові слова та/або фрази до вашого словника.';

    let desc3 = document.createElement('p');
    desc3.classList.add('desc3');
    descr.appendChild(desc3);
    desc3.innerHTML = 'Для того щоб розпочати тренування, у вашому словнику має бути не менш ніж два слова, пам\'ятайте це!';
    
    const btnWrap = document.createElement('div');
    btnWrap.classList.add('btnWrap');
    wrapper.appendChild(btnWrap);

    const addWords = document.createElement('button');
    addWords.classList.add('addWords');
    addWords.classList.add('main-button');
    addWords.innerHTML = 'ПЕРЕЙТИ ДО СЛОВНИКА';
    addWords.id = '1';
    btnWrap.appendChild(addWords);

    const or = document.createElement('div');
    or.classList.add('or');
    btnWrap.appendChild(or);
    or.innerText = 'АБО'

    const startTraining = document.createElement('button');
    startTraining.classList.add('startTraining');
    startTraining.classList.add('main-button');
    startTraining.innerHTML = 'ПОЧАТИ ТРЕНУВАННЯ';
    startTraining.id = 2;
    btnWrap.appendChild(startTraining);

    let mainButtonArr = [];
    mainButtonArr.push(addWords, startTraining);

    let mainButtonSound = new Audio;
    mainButtonSound.src = './sounds/main-button.wav';
    for (let key of mainButtonArr) {
        key.addEventListener('click', () => {
            mainButtonSound.play();
            wrapper.innerHTML = '';
            if (key.id == 1) {
                addWordsFunc();
            } else if (key.id == 2) {
                training();
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createStartContent();
})

export default createStartContent;




