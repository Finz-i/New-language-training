'use strict';

import addWordsFunc from './modules/Words.js';



document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('wrap');

    const addWords = document.createElement('button');
    addWords.classList.add('addWords');
    addWords.classList.add('main-button');
    addWords.innerHTML = 'ADD WORDS';
    addWords.id = '1';
    wrapper.appendChild(addWords);

    const or = document.createElement('div');
    or.classList.add('or');
    wrapper.appendChild(or);
    or.innerText = 'OR'

    const startTraining = document.createElement('button');
    startTraining.classList.add('startTraining');
    startTraining.classList.add('main-button');
    startTraining.innerHTML = 'START TRAINING';
    startTraining.id = 2;
    wrapper.appendChild(startTraining);

    let mainButtonArr = [];
    mainButtonArr.push(addWords, startTraining);

    let mainButtonSound = new Audio;
    mainButtonSound.src = './sounds/main-button.wav';
    for (let key of mainButtonArr) {
        key.addEventListener('click', () => {
            mainButtonSound.play();
            addWords.remove();
            startTraining.remove();
            or.remove();
            if (key.id == 1) {
                addWordsFunc();
                wrapper.style.display = 'block';
            }
        })
    }

})
