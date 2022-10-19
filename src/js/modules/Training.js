import back from './backToPreviuousPage.js';

let training = function () {
    back();

    let LSArr = JSON.parse(localStorage.getItem('key'))

    let tooMuch = new Audio;
    tooMuch.src = './sounds/too-much.wav';

    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('wrap');
    wrapper.style.display = 'block';

    let quantity = 0;

    let mainButtonSound = new Audio;
    mainButtonSound.src = './sounds/main-button.wav';

    let claim = new Audio;
    claim.src = './sounds/claimMain.wav';

    let removeSound = new Audio;
    removeSound.src = './sounds/del.wav';

    let addElements = new Audio;
    addElements.src = './sounds/addElements.mp3';

    let errorSound = new Audio;
    errorSound.src = './sounds/error.wav';

    let complete = new Audio;
    complete.src = './sounds/complete.mp3';

    let needMore = new Audio;
    needMore.src = './sounds/needMore.mp3';

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

    let defWordTranslate = document.createElement('input');
    defWordInputs.appendChild(defWordTranslate);
    defWordTranslate.classList.add('defWordTranslate');
    defWordTranslate.readOnly = 1;
    defWordTranslate.dataset.id = 1;
    defWordTranslate.value = 'Перевод';
    defWordTranslate.style.color = 'black';

    let arr = [];
    arr.push(defWordEng, defWordTranslate);

    for (let key of arr) {
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


    const trainingFieldWrap = document.createElement('div');
    trainingFieldWrap.classList.add('trainingFieldWrap');
    wrapper.appendChild(trainingFieldWrap);

    let defApply = document.createElement('button');
    defApply.classList.add('defApply');
    defWrap.appendChild(defApply);
    defApply.innerHTML = 'APPLY';

    defApply.addEventListener('click', () => {
        if (LSArr.length == 0) addElements.play();
        if (+defQuantityInput.value <= LSArr.length && +defQuantityInput.value != 0 && +defQuantityInput.value > 1) {

            if (defWordEng.style.color == 'white' && defWordTranslate.style.color == 'white') {
                mainButtonSound.play();
                console.log(3);

                trainingFieldWrap.innerHTML = '';
                trainingCombineEvent();
                //Return inputs to start condition
                defWordEng.style.color = 'black';
                defWordEng.style.backgroundColor = 'rgb(167, 249, 255)';
                defWordTranslate.style.color = 'black';
                defWordTranslate.style.backgroundColor = 'rgb(167, 249, 255)';
                defQuantityInput.value = '';

            } else if (defWordEng.style.color == 'white') {
                mainButtonSound.play();
                console.log(1);

                trainingFieldWrap.innerHTML = '';
                trainingEnglishEvent();

                //Return inputs to start condition
                defWordEng.style.color = 'black';
                defWordEng.style.backgroundColor = 'rgb(167, 249, 255)';
                defWordTranslate.style.color = 'black';
                defWordTranslate.style.backgroundColor = 'rgb(167, 249, 255)';
                defQuantityInput.value = '';

            } else if (defWordTranslate.style.color == 'white') {
                mainButtonSound.play();
                console.log(2);

                trainingFieldWrap.innerHTML = '';
                trainingTranslateEvent();

                //Return inputs to start condition
                defWordEng.style.color = 'black';
                defWordEng.style.backgroundColor = 'rgb(167, 249, 255)';
                defWordTranslate.style.color = 'black';
                defWordTranslate.style.backgroundColor = 'rgb(167, 249, 255)';
                defQuantityInput.value = '';
            }

        } else if (LSArr.length !== 0 && +defQuantityInput.value > LSArr.length) tooMuch.play();
        else if (+defQuantityInput.value <= 1) needMore.play();
    })

    const trainingEnglishEvent = function () {

        let arr = [];

        for (let i = 0; i < +defQuantityInput.value; i++) {
            arr.push(LSArr[i]);
        }

        let randomElement = arr[Math.floor(Math.random() * arr.length)];

        console.log(arr);

        let count = 0;

        let mistakes = 0;

        let question = document.createElement('div');
        question.classList.add('question');
        trainingFieldWrap.appendChild(question);
        question.innerText = randomElement.engWord;

        let lable = document.createElement('p');
        lable.classList.add('lable');
        trainingFieldWrap.appendChild(lable);
        lable.innerHTML = 'Make a translation please';

        let createAnswer = function () {

            const answerWrapper = document.createElement('div');
            answerWrapper.classList.add('answerWrapper');
            trainingFieldWrap.appendChild(answerWrapper);

            let answerInput = document.createElement('input');
            answerInput.classList.add('answerInput');
            answerWrapper.appendChild(answerInput);

            let answerApply = document.createElement('button');
            answerApply.classList.add('answerApply');
            answerWrapper.appendChild(answerApply);
            answerApply.innerHTML = 'Enter';

            answerApply.addEventListener('click', () => {

                if (count <= 19) {

                    if (answerInput.value.toLowerCase() == randomElement.translate.toLowerCase()) {
                        claim.play();
                        trainingFieldWrap.style.backgroundColor = 'aquamarine';
                        setTimeout(() => {
                            trainingFieldWrap.style.backgroundColor = 'white';
                        }, 300);
                        console.log(true);

                        let newRandomElement = arr[Math.floor(Math.random() * arr.length)];

                        if (newRandomElement !== randomElement) {
                            question.innerText = newRandomElement.engWord;
                            randomElement = newRandomElement;
                            answerWrapper.remove();
                            createAnswer();
                            count++;

                        } else {
                            while (newRandomElement == randomElement) {
                                newRandomElement = arr[Math.floor(Math.random() * arr.length)];
                            }
                            randomElement = newRandomElement;
                            question.innerText = newRandomElement.engWord;
                            answerWrapper.remove();
                            createAnswer();
                            count++;
                        }

                    } else {
                        errorSound.play();
                        trainingFieldWrap.style.backgroundColor = 'crimson';
                        setTimeout(() => {
                            trainingFieldWrap.style.backgroundColor = 'white';
                        }, 300);
                        answerInput.value = '';
                        mistakes++;
                    }
                }
            })

            if (count == 19) question.innerText = '', setTimeout(() => {
                returnResults(mistakes);

            }, 400)
        }


        createAnswer();
    }


    const trainingTranslateEvent = function () {
        let arr = [];

        for (let i = 0; i < +defQuantityInput.value; i++) {
            arr.push(LSArr[i]);
        }

        let randomElement = arr[Math.floor(Math.random() * arr.length)];


        console.log(arr);

        let count = 0;

        let mistakes = 0;

        let question = document.createElement('div');
        question.classList.add('question');
        trainingFieldWrap.appendChild(question);
        question.innerText = randomElement.translate;

        let lable = document.createElement('p');
        lable.classList.add('lable');
        trainingFieldWrap.appendChild(lable);
        lable.innerHTML = 'Make a translation please';

        let createAnswer = function () {

            const answerWrapper = document.createElement('div');
            answerWrapper.classList.add('answerWrapper');
            trainingFieldWrap.appendChild(answerWrapper);

            let answerInput = document.createElement('input');
            answerInput.classList.add('answerInput');
            answerWrapper.appendChild(answerInput);

            let answerApply = document.createElement('button');
            answerApply.classList.add('answerApply');
            answerWrapper.appendChild(answerApply);
            answerApply.innerHTML = 'Enter';

            answerApply.addEventListener('click', () => {

                if (count <= 19) {

                    if (answerInput.value.toLowerCase() == randomElement.engWord.toLowerCase()) {
                        claim.play();
                        trainingFieldWrap.style.backgroundColor = 'aquamarine';
                        setTimeout(() => {
                            trainingFieldWrap.style.backgroundColor = 'white';
                        }, 300);
                        console.log(true);

                        let newRandomElement = arr[Math.floor(Math.random() * arr.length)];

                        if (newRandomElement !== randomElement) {
                            question.innerText = newRandomElement.translate;
                            randomElement = newRandomElement;
                            answerWrapper.remove();
                            createAnswer();
                            count++;

                        } else {
                            while (newRandomElement == randomElement) {
                                newRandomElement = arr[Math.floor(Math.random() * arr.length)];
                            }
                            randomElement = newRandomElement;
                            question.innerText = newRandomElement.translate;
                            answerWrapper.remove();
                            createAnswer();
                            count++;
                        }
                    } else {
                        errorSound.play();
                        trainingFieldWrap.style.backgroundColor = 'crimson';
                        setTimeout(() => {
                            trainingFieldWrap.style.backgroundColor = 'white';
                        }, 300);
                        answerInput.value = '';
                        mistakes++;
                    }
                }
            })

            if (count == 19) question.innerText = '', setTimeout(() => {
                returnResults(mistakes);

            }, 400)
        }


        createAnswer();
    }


    const trainingCombineEvent = function () {
        let arr = [];

        for (let i = 0; i < +defQuantityInput.value; i++) {
            arr.push(LSArr[i]);
        }

        let randomElement = arr[Math.floor(Math.random() * arr.length)];

        console.log(arr);

        let count = 0;

        let mistakes = 0;

        let question = document.createElement('div');
        question.classList.add('question');
        trainingFieldWrap.appendChild(question);
        question.innerText = randomElement.engWord;

        let lable = document.createElement('p');
        lable.classList.add('lable');
        trainingFieldWrap.appendChild(lable);
        lable.innerHTML = 'Make a translation please';

        let createAnswer = function () {

            const answerWrapper = document.createElement('div');
            answerWrapper.classList.add('answerWrapper');
            trainingFieldWrap.appendChild(answerWrapper);

            let answerInput = document.createElement('input');
            answerInput.classList.add('answerInput');
            answerWrapper.appendChild(answerInput);

            let answerApply = document.createElement('button');
            answerApply.classList.add('answerApply');
            answerWrapper.appendChild(answerApply);
            answerApply.innerHTML = 'Enter';

            answerApply.addEventListener('click', () => {

                if (count <= 19) {

                    if ((question.innerText == randomElement.engWord && answerInput.value.toLowerCase() == randomElement.translate.toLowerCase()) || (question.innerText == randomElement.translate && answerInput.value.toLowerCase() == randomElement.engWord.toLowerCase())) {
                        claim.play();
                        trainingFieldWrap.style.backgroundColor = 'aquamarine';
                        setTimeout(() => {
                            trainingFieldWrap.style.backgroundColor = 'white';
                        }, 300);
                        console.log(true);

                        let newRandomElement = arr[Math.floor(Math.random() * arr.length)];

                        if (newRandomElement !== randomElement) {
                            randomElement = newRandomElement;
                            if (count % 2 != 0) {
                                question.innerText = randomElement.engWord;
                            } else question.innerText = randomElement.translate;
                            answerWrapper.remove();
                            createAnswer();
                            count++;

                        } else {
                            while (newRandomElement == randomElement) {
                                newRandomElement = arr[Math.floor(Math.random() * arr.length)];
                            }
                            randomElement = newRandomElement;
                            if (count % 2 != 0) {
                                question.innerText = randomElement.engWord;
                            } else question.innerText = randomElement.translate;
                            answerWrapper.remove();
                            createAnswer();
                            count++;
                        }

                    } else {
                        errorSound.play();
                        trainingFieldWrap.style.backgroundColor = 'crimson';
                        setTimeout(() => {
                            trainingFieldWrap.style.backgroundColor = 'white';
                        }, 300);
                        answerInput.value = '';
                        mistakes++;
                    }
                }
            })

            if (count == 19) question.innerText = '', setTimeout(() => {
                returnResults(mistakes);

            }, 400)
        }


        createAnswer();
    }

    let returnResults = function (mistakes) {
        complete.play();

        mistakes = +mistakes;
        trainingFieldWrap.innerHTML = '';

        let results = document.createElement('p');
        results.classList.add('results');
        trainingFieldWrap.appendChild(results);
        results.innerHTML = `Тренировка завершена <br> Правильных ответов: ${8 - mistakes}\/8`
    }

}


export default training;