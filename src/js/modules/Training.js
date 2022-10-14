import back from './backToPreviuousPage.js'

let training = function() {
    back();

    let LSArr = JSON.parse(localStorage.getItem('key'))

    let tooMuch = new Audio;
    tooMuch.src = '../.././sounds/too-much.wav';
    
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('wrap');
    wrapper.style.display = 'block'

    let quantity = 0;

    let mainButtonSound = new Audio;
    mainButtonSound.src = './sounds/main-button.wav';
    
    let defQantityWrap = document.createElement('div');
    defQantityWrap.classList.add('defQuantityWrap');
    wrapper.appendChild(defQantityWrap);

    let defQantityText = document.createElement('div');
    defQantityText.classList.add('defQuantityText');
    defQantityWrap.appendChild(defQantityText);
    defQantityText.innerText = 'Выберите кол-во слов для тренировки';

    let defQuantityInput = document.createElement('input');
    defQuantityInput.classList.add('defQuantityInput');
    defQantityWrap.appendChild(defQuantityInput);
    defQuantityInput.maxLength = '10';

    /* let regexp = /[^\s]/;
    defQuantityInput.addEventListener('imput', () => {
       defQuantityInput.value = defQuantityInput.value.replace(regexp, '');
    }) */

    let defQantityApply = document.createElement('button');
    defQantityApply.classList.add('defQantityApply');
    defQantityWrap.appendChild(defQantityApply);
    defQantityApply.innerHTML = 'APPLY';


    const trainingFieldWrap = document.createElement('div');
    trainingFieldWrap.classList.add('trainingFieldWrap');
    wrapper.appendChild(trainingFieldWrap);

    defQantityApply.addEventListener('click', () =>{
        if(+defQuantityInput.value != 0 && +defQuantityInput.value <= LSArr.length){
            mainButtonSound.play()
        } else if (+defQuantityInput.value > LSArr.length) tooMuch.play();
    })
}

export default training;