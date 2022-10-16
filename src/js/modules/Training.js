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
    mainButtonSound.src = '../.././sounds/main-button.wav';

    let claim = new Audio;
    claim.src = '../.././sounds/claimMain.wav';

    let removeSound = new Audio;
    removeSound.src = '../.././sounds/del.wav';

    let defWrap = document.createElement('div');
    defWrap.classList.add('defWrap');
    wrapper.appendChild(defWrap);

    //Define type of training
    let defWordWrap = document.createElement('div');
    defWrap.appendChild(defWordWrap);
    defWordWrap.classList.add('defWordWrap');

    let defWordText = document.createElement('div');
    defWordWrap.appendChild(defWordText);
    defWordText.classList.add('defWordText');
    defWordText.innerText = 'Выберите слова для тренировки';


    let defWordInputs = document.createElement('div');
    defWordWrap.appendChild(defWordInputs);
    defWordInputs.classList.add('defWordInputs');

    let defWordEng = document.createElement('input');
    defWordInputs.appendChild(defWordEng);
    defWordEng.classList.add('defWordEng');
    defWordEng.readOnly = 1;
    defWordEng.dataset.id = 0;
    defWordEng.value = 'ENG';
    defWordEng.style.color = 'black';
    /* defWordEng.type = 'radio'; */

    let defWordTranslate = document.createElement('input');
    defWordInputs.appendChild(defWordTranslate);
    defWordTranslate.classList.add('defWordTranslate');
    defWordTranslate.readOnly = 1;
    defWordTranslate.dataset.id = 1;
    defWordTranslate.value = 'Перевод';
    defWordTranslate.style.color = 'black';
    /* defWordTranslate.type = 'radio'; */

    let arr = [];
    arr.push(defWordEng, defWordTranslate);

    for(let key of arr){
        key.addEventListener('click', () => {
            if (key.style.color == 'black') {
                key.style.color = 'white';
                key.style.backgroundColor = 'black';
                claim.play();
            } else if (key.style.color == 'white') {
                key.style.color = 'black';
                key.style.backgroundColor = 'rgb(167, 249, 255)';
                removeSound.play();
            }
        })
    }


    //Define quantity of words
    let defQuantityWrap = document.createElement('div');
    defWrap.appendChild(defQuantityWrap);
    defQuantityWrap.classList.add('defQuantityWrap');

    let defQantityText = document.createElement('div');
    defQantityText.classList.add('defQuantityText');
    defQuantityWrap.appendChild(defQantityText);
    defQantityText.innerHTML = 'Выберите кол-во слов для тренировки';

    let defQuantityInput = document.createElement('input');
    defQuantityInput.classList.add('defQuantityInput');
    defQuantityWrap.appendChild(defQuantityInput);
    defQuantityInput.maxLength = '10';


    

    let defApply = document.createElement('button');
    defApply.classList.add('defApply');
    defWrap.appendChild(defApply);
    defApply.innerHTML = 'APPLY';


    const trainingFieldWrap = document.createElement('div');
    trainingFieldWrap.classList.add('trainingFieldWrap');
    wrapper.appendChild(trainingFieldWrap);

    

    defApply.addEventListener('click', () =>{
        if(+defQuantityInput.value != 0 && +defQuantityInput.value <= LSArr.length){

            if (defWordEng.style.color == 'white' && defWordTranslate.style.color == 'white'){
                mainButtonSound.play();
                console.log(3);
                
                //Return inputs to start condition
                defWordEng.style.color = 'black';
                defWordEng.style.backgroundColor = 'rgb(167, 249, 255)';
                defWordTranslate.style.color = 'black';
                defWordTranslate.style.backgroundColor = 'rgb(167, 249, 255)';
                defQuantityInput.value = '';

            } else if (defWordEng.style.color == 'white'){
                mainButtonSound.play();
                console.log(1);
                
                //Return inputs to start condition
                defWordEng.style.color = 'black';
                defWordEng.style.backgroundColor = 'rgb(167, 249, 255)';
                defWordTranslate.style.color = 'black';
                defWordTranslate.style.backgroundColor = 'rgb(167, 249, 255)';
                defQuantityInput.value = '';

            } else if(defWordTranslate.style.color == 'white'){
                mainButtonSound.play();
                console.log(2);
                
                //Return inputs to start condition
                defWordEng.style.color = 'black';
                defWordEng.style.backgroundColor = 'rgb(167, 249, 255)';
                defWordTranslate.style.color = 'black';
                defWordTranslate.style.backgroundColor = 'rgb(167, 249, 255)';
                defQuantityInput.value = '';
            }

        } else if (+defQuantityInput.value > LSArr.length) tooMuch.play();
    })



}

export default training;