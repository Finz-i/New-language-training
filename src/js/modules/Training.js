import back from './backToPreviuousPage.js';

let training = function () {
    back();

    let LSArr = JSON.parse(localStorage.getItem('key'));

    let tooMuch = new Audio;
    tooMuch.src = './sounds/too-much.wav';

    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('wrap');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'row';
    wrapper.style.justifyContent = 'space-around';
    wrapper.style.aliginItems = 'center';
    wrapper.style.paddingTop = '0';

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

    let win = new Audio;
    win.src = './sounds/win.mp3';

    let needMore = new Audio;
    needMore.src = './sounds/needMore.mp3';

    let defWrap = document.createElement('div');
    defWrap.classList.add('defWrap');
    wrapper.appendChild(defWrap);

    let defDescr = document.createElement('div');
    defDescr.classList.add('defDescr');
    defWrap.appendChild(defDescr);

    let defDescrHeader = document.createElement('h3');
    defDescrHeader.classList.add('defDescrHeader');
    defDescr.appendChild(defDescrHeader);
    defDescrHeader.innerHTML = 'Тренування';

    let defDescrText = document.createElement('p');
    defDescrText.classList.add('defDescrText');
    defDescr.appendChild(defDescrText);
    defDescrText.innerHTML = 'У цьому вікні Ви можете обрати режим тренування (переклад з/на англійську, або мікс-режим, обравши два попередніх разом).<br><br>Крім того Вам необхідно указати кількість слів, якої вам буде достатньо для опрацювання.'


    //Define type of training
    let defWordWrap = document.createElement('div');
    defWrap.appendChild(defWordWrap);
    defWordWrap.classList.add('defWordWrap');

    let defWordText = document.createElement('div');
    defWordWrap.appendChild(defWordText);
    defWordText.classList.add('defWordText');
    defWordText.innerText = 'Виберіть режим тренування';


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
    defWordTranslate.value = 'Переклад';
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
    defQantityText.innerHTML = 'Виберіть кількість слів/фраз, яка будe опрацьована';

    let defQuantityInputWrap = document.createElement('div');
    defQuantityInputWrap.classList.add('defQuantityInputWrap');
    defQuantityWrap.appendChild(defQuantityInputWrap);

    let defQuantityInput = document.createElement('input');
    defQuantityInput.classList.add('defQuantityInput');
    defQuantityInputWrap.appendChild(defQuantityInput);
    defQuantityInput.maxLength = '10';

    let regexp = /[A-Za-zA-Яа-яЁё]/g;
    
    defQuantityInput.oninput = function() {
        this.value = this.value.replace(regexp, '');
    }

    let defApply = document.createElement('button');
    defApply.classList.add('defApply');
    defWrap.appendChild(defApply);
    defApply.innerHTML = 'Підтвердити';

    const trainingFieldWrap = document.createElement('div');
    trainingFieldWrap.classList.add('trainingFieldWrap');
    wrapper.appendChild(trainingFieldWrap);

    defApply.addEventListener('click', () => {

        if (LSArr != undefined && LSArr.length == 0) {
            //Add new elements to vocabulary
            errorSound.play();
            let alertText = document.createElement('div');
            defWrap.appendChild(alertText);
            alertText.classList.add('alert');
            alertText.innerText = 'Ваш словник пустий. Наповніть його новими словами/фразами!';

            setTimeout(() => {
                alertText.style.width = '0.1px';
                alertText.style.height = '0.1px';
                alertText.style.backgroundColor = 'white';
                alertText.innerText = '';
                alertText.style.left = '37%';
                alertText.style.top = '90%';
                defApply.disabled = false;
                setTimeout(() => {
                    alertText.remove();
                }, 200)
            }, 2500);
            defApply.disabled = true;


        }
        if (LSArr != undefined && +defQuantityInput.value <= LSArr.length && +defQuantityInput.value != 0 && +defQuantityInput.value > 1) {

            if (defWordEng.style.color == 'white' && defWordTranslate.style.color == 'white') {
                mainButtonSound.play();
                defWrap.remove();

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
                defWrap.remove();

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
                defWrap.remove();

                trainingFieldWrap.innerHTML = '';
                trainingTranslateEvent();

                //Return inputs to start condition
                defWordEng.style.color = 'black';
                defWordEng.style.backgroundColor = 'rgb(167, 249, 255)';
                defWordTranslate.style.color = 'black';
                defWordTranslate.style.backgroundColor = 'rgb(167, 249, 255)';
                defQuantityInput.value = '';
            }

        } else if (LSArr != undefined && LSArr.length !== 0 && +defQuantityInput.value > LSArr.length){
            errorSound.play();
            let alertText = document.createElement('div');
            defWrap.appendChild(alertText);
            alertText.classList.add('alert');
            alertText.innerText = 'Ви вказали більшу кількість слів, ніж є у словнику!';

            setTimeout(() => {
                alertText.style.width = '0.1px';
                alertText.style.height = '0.1px';
                alertText.style.backgroundColor = 'white';
                alertText.innerText = '';
                alertText.style.left = '37%';
                alertText.style.top = '90%';
                defApply.disabled = false;
                setTimeout(() => {
                    alertText.remove();
                }, 200)
            }, 2500);
            defApply.disabled = true;
        }
        else if (LSArr != undefined && +defQuantityInput.value <= 1 && LSArr.length > 0) {
            errorSound.play();
            let alertText = document.createElement('div');
            defWrap.appendChild(alertText);
            alertText.classList.add('alert');
            alertText.innerText = 'Вам потрібно обрати не менше двох елементів словника!';

            setTimeout(() => {
                alertText.style.width = '0.1px';
                alertText.style.height = '0.1px';
                alertText.style.backgroundColor = 'white';
                alertText.innerText = '';
                alertText.style.left = '37%';
                alertText.style.top = '90%';
                defApply.disabled = false;
                setTimeout(() => {
                    alertText.remove();
                }, 200)
            }, 2500);
            defApply.disabled = true;
            
        };
    })

    let mistakesArr = [];

    const trainingEnglishEvent = function () {

        trainingFieldWrap.style.justifyContent = 'space-around'; 
        trainingFieldWrap.style.display = 'flex';

        console.log(trainingFieldWrap.style.backgroundColor == 0)
        let arr = [];

        for (let i = 0; i < +defQuantityInput.value; i++) {
            arr.push(LSArr[i]);
        }

        let randomElement = arr[Math.floor(Math.random() * arr.length)];

        let count = 0;

        let mistakes = 0;

        let trainingHeader = document.createElement('div');
        trainingHeader.classList.add('trainingHeader');
        trainingFieldWrap.appendChild(trainingHeader);

        let progress = document.createElement('div');
        progress.classList.add('progress');
        trainingHeader.appendChild(progress);

        let postProgressWrapper = document.createElement('div');
        postProgressWrapper.classList.add('postProgressWrapper');
        progress.appendChild(postProgressWrapper);

        let postProgress = document.createElement('div');
        postProgress.classList.add('postProgress');
        postProgressWrapper.appendChild(postProgress);

        let progressWidth = 0;

        let progressText = document.createElement('div');
        progress.appendChild(progressText);
        progressText.innerText = `Progress: ${count}/30`;  
        progressText.style.zIndex = '1';  
        progressText.style.position = 'absolute';

        let backToModeMenu = document.createElement('button');
        backToModeMenu.classList.add('backToModeMenu');
        trainingFieldWrap.appendChild(backToModeMenu);
        backToModeMenu.innerHTML = 'Back to menu';

        backToModeMenu.addEventListener('click', () => {
            removeSound.play();
            trainingFieldWrap.remove();
            training();
        })

        let question = document.createElement('div');
        question.classList.add('question');
        trainingFieldWrap.appendChild(question);
        question.innerText = randomElement.engWord;

        let lable = document.createElement('div');
        lable.classList.add('lable');
        trainingFieldWrap.appendChild(lable);
        lable.innerText = 'Make a translation please';

        let claimFunc = function () {
            claim.play();
            trainingFieldWrap.style.backgroundColor = 'aquamarine';
            lable.classList.add('lableTrue');
            lable.innerText = 'TRUE!)'
            setTimeout(() => {
                trainingFieldWrap.style.backgroundColor = 'white';
                lable.classList.remove('lableTrue');
                lable.innerText = 'Make a translation please';
            }, 300);
        }

        let createAnswer = function () {

            const answerWrapper = document.createElement('div');
            answerWrapper.classList.add('answerWrapper');
            trainingFieldWrap.appendChild(answerWrapper);

            let answerInput = document.createElement('input');
            answerInput.classList.add('answerInput');
            answerWrapper.appendChild(answerInput);
            answerInput.select();

            let advice = document.createElement('p');
            advice.classList.add('advice');
            advice.innerHTML = 'Press Enter please'
            answerWrapper.appendChild(advice);
            
            answerInput.addEventListener('keyup', (e) => {

                if(e.key === 'Enter'){
                    if (count <= 29 && answerInput.readOnly == false) {
                        
                        if (answerInput.value.trim().toLowerCase() == randomElement.translate.trim().toLowerCase()) {
                            claimFunc();
                            let newRandomElement = arr[Math.floor(Math.random() * arr.length)];

                            if (newRandomElement !== randomElement) {
                                question.innerText = newRandomElement.engWord;
                                randomElement = newRandomElement;
                                answerWrapper.remove();
                                createAnswer();
                                count++;
                                progressText.innerText = `Progress: ${count}/30`;
                                
                            } else {
                                claimFunc();
                                while (newRandomElement == randomElement) {
                                    newRandomElement = arr[Math.floor(Math.random() * arr.length)];
                                }
                                randomElement = newRandomElement;
                                question.innerText = newRandomElement.engWord;
                                answerWrapper.remove();
                                createAnswer();
                                count++;
                                progressText.innerText = `Progress: ${count}/30`;
                                
                            }
                            postProgress.style.width = `${progressWidth += 3.333}%`

                        } else {
                            answerInput.readOnly = true;
                            falseFunc(randomElement.translate);
                            setTimeout(() => {
                                answerInput.readOnly = false;
                            }, 2000);
                            answerInput.value = '';
                            mistakes++;
                            mistakesArr.push(randomElement.engWord);
                        }
                    }
                }
                
            })


            if (count == 29) {
            
                setTimeout(() => {
                    trainingFieldWrap.innerHTML = '';
                    question.innerText = '';
                    answerInput.readOnly = true;
                    postProgress.style.width = '100%';

                    let blinkFunc = function (target) {
                        if (target.style.backgroundColor == 'white') target.style.backgroundColor = 'aquamarine';
                        else if (target.style.backgroundColor == 'aquamarine') target.style.backgroundColor = 'white';
                    }

                    setTimeout(() => {
                        win.play();
                        let timer = setInterval(() => {
                            blinkFunc(trainingFieldWrap);
                        }, 200);
                        setTimeout(() => {
                            clearInterval(timer);
                        }, 2000);

                    }, 400);

                    setTimeout(() => {
                        trainingFieldWrap.style.backgroundColor = 'white';
                        returnResults(mistakes);
                    }, 2700);
                }, 200)
            }
        }


        createAnswer();
    }


    const trainingTranslateEvent = function () {

        trainingFieldWrap.style.justifyContent = 'space-around'; 
        trainingFieldWrap.style.display = 'flex';

        let arr = [];

        for (let i = 0; i < +defQuantityInput.value; i++) {
            arr.push(LSArr[i]);
        }

        let randomElement = arr[Math.floor(Math.random() * arr.length)];


        console.log(arr);

        let count = 0;

        let mistakes = 0;

        let trainingHeader = document.createElement('div');
        trainingHeader.classList.add('trainingHeader');
        trainingFieldWrap.appendChild(trainingHeader);

        let progress = document.createElement('div');
        progress.classList.add('progress');
        trainingHeader.appendChild(progress);

        let postProgressWrapper = document.createElement('div');
        postProgressWrapper.classList.add('postProgressWrapper');
        progress.appendChild(postProgressWrapper);

        let postProgress = document.createElement('div');
        postProgress.classList.add('postProgress');
        postProgressWrapper.appendChild(postProgress);

        let progressWidth = 0;

        let progressText = document.createElement('div');
        progress.appendChild(progressText);
        progressText.innerText = `Progress: ${count}/30`;
        progressText.style.zIndex = '1';
        progressText.style.position = 'absolute';

        let backToModeMenu = document.createElement('button');
        backToModeMenu.classList.add('backToModeMenu');
        trainingFieldWrap.appendChild(backToModeMenu);
        backToModeMenu.innerHTML = 'Back to menu';

        backToModeMenu.addEventListener('click', () => {
            removeSound.play();
            trainingFieldWrap.remove();
            training();
        })

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
            answerInput.select();

            let advice = document.createElement('p');
            advice.classList.add('advice');
            advice.innerHTML = 'Press Enter please'
            answerWrapper.appendChild(advice);

            answerInput.addEventListener('keyup', (e) => {
                if(e.key == 'Enter'){

                    if (count <= 29 && answerInput.readOnly == false) {

                        if (answerInput.value.trim().toLowerCase() == randomElement.engWord.trim().toLowerCase()) {
                            claim.play();
                            trainingFieldWrap.style.backgroundColor = 'aquamarine';
                            lable.classList.add('lableTrue');
                            lable.innerText = 'TRUE!)'
                            setTimeout(() => {
                                trainingFieldWrap.style.backgroundColor = 'white';
                                lable.classList.remove('lableTrue');
                                lable.innerText = 'Make a translation please';
                            }, 400);
                            let newRandomElement = arr[Math.floor(Math.random() * arr.length)];

                            if (newRandomElement !== randomElement) {
                                question.innerText = newRandomElement.translate;
                                randomElement = newRandomElement;
                                answerWrapper.remove();
                                createAnswer();
                                count++;
                                progressText.innerText = `Progress: ${count}/30`;

                            } else {
                                while (newRandomElement == randomElement) {
                                    newRandomElement = arr[Math.floor(Math.random() * arr.length)];
                                }
                                randomElement = newRandomElement;
                                question.innerText = newRandomElement.translate;
                                answerWrapper.remove();
                                createAnswer();
                                count++;
                                progressText.innerText = `Progress: ${count}/30`;
                            }
                            postProgress.style.width = `${progressWidth += 3.333}%`
                        } else {
                            answerInput.readOnly = true;
                            falseFunc(randomElement.engWord);
                            setTimeout(() => {
                                answerInput.readOnly = false;
                            }, 2000);
                            answerInput.value = '';
                            mistakes++;
                            mistakesArr.push(randomElement.translate);
                        }
                    }
                }
                
            })

            

            if (count == 29) {

                setTimeout(() => {
                    trainingFieldWrap.innerHTML = '';
                    question.innerText = '';
                    answerInput.readOnly = true;
                    postProgress.style.width = '100%';

                    let blinkFunc = function (target) {
                        if (target.style.backgroundColor == 'white') target.style.backgroundColor = 'aquamarine';
                        else if (target.style.backgroundColor == 'aquamarine') target.style.backgroundColor = 'white';
                    }

                    setTimeout(() => {
                        win.play();
                        let timer = setInterval(() => {
                            blinkFunc(trainingFieldWrap);
                        }, 200);
                        setTimeout(() => {
                            clearInterval(timer);
                        }, 2000);

                    }, 400);

                    setTimeout(() => {
                        trainingFieldWrap.style.backgroundColor = 'white';
                        returnResults(mistakes);
                    }, 2700);
                }, 200)
            }
        }


        createAnswer();
    }


    const trainingCombineEvent = function () {

        trainingFieldWrap.style.justifyContent = 'space-around'; 
        trainingFieldWrap.style.display = 'flex';

        let arr = [];

        for (let i = 0; i < +defQuantityInput.value; i++) {
            arr.push(LSArr[i]);
        }

        let randomElement = arr[Math.floor(Math.random() * arr.length)];

        console.log(arr);

        let count = 0;

        let mistakes = 0;

        let trainingHeader = document.createElement('div');
        trainingHeader.classList.add('trainingHeader');
        trainingFieldWrap.appendChild(trainingHeader);

        let progress = document.createElement('div');
        progress.classList.add('progress');
        trainingHeader.appendChild(progress);

        let postProgressWrapper = document.createElement('div');
        postProgressWrapper.classList.add('postProgressWrapper');
        progress.appendChild(postProgressWrapper);

        let postProgress = document.createElement('div');
        postProgress.classList.add('postProgress');
        postProgressWrapper.appendChild(postProgress);

        let progressWidth = 0;

        let progressText = document.createElement('div');
        progress.appendChild(progressText);
        progressText.innerText = `Progress: ${count}/30`;
        progressText.style.zIndex = '1';
        progressText.style.position = 'absolute';

        let backToModeMenu = document.createElement('button');
        backToModeMenu.classList.add('backToModeMenu');
        trainingFieldWrap.appendChild(backToModeMenu);
        backToModeMenu.innerHTML = 'Back to menu';

        backToModeMenu.addEventListener('click', () => {
            removeSound.play();
            trainingFieldWrap.remove();
            training();
        })

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
            answerInput.select();

            let advice = document.createElement('p');
            advice.classList.add('advice');
            advice.innerHTML = 'Press Enter please'
            answerWrapper.appendChild(advice);

            answerInput.addEventListener('keyup', (e) => {
                if(e.key == 'Enter'){

                    if (count <= 29 && answerInput.readOnly == false) {

                        if ((question.innerText == randomElement.engWord && answerInput.value.trim().toLowerCase() == randomElement.translate.trim().toLowerCase()) || (question.innerText == randomElement.translate && answerInput.value.trim().toLowerCase() == randomElement.engWord.trim().toLowerCase())) {
                            claim.play();
                            trainingFieldWrap.style.backgroundColor = 'aquamarine';
                            lable.classList.add('lableTrue');
                            lable.innerText = 'TRUE!)'
                            setTimeout(() => {
                                trainingFieldWrap.style.backgroundColor = 'white';
                                lable.classList.remove('lableTrue');
                                lable.innerText = 'Make a translation please';
                            }, 400);
                            let newRandomElement = arr[Math.floor(Math.random() * arr.length)];

                            if (newRandomElement !== randomElement) {
                                randomElement = newRandomElement;
                                if (count % 2 != 0) {
                                    question.innerText = randomElement.engWord;
                                } else question.innerText = randomElement.translate;
                                answerWrapper.remove();
                                createAnswer();
                                count++;
                                progressText.innerText = `Progress: ${count}/30`;

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
                                progressText.innerText = `Progress: ${count}/30`;
                            }
                            postProgress.style.width = `${progressWidth += 3.333}%`

                        } else{
                            answerInput.readOnly = true;
                            if (question.innerText == randomElement.engWord && answerInput.value.trim().toLowerCase() != randomElement.translate.trim().toLowerCase() ) {
                                falseFunc(randomElement.translate);
                            } else if (question.innerText == randomElement.translate && answerInput.value.trim().toLowerCase() != randomElement.engWord.trim().toLowerCase()){
                                falseFunc(randomElement.engWord);
                            } 
                            setTimeout(() => {
                                answerInput.readOnly = false;
                            }, 2000);
                            answerInput.value = '';
                            mistakes++;
                            mistakesArr.push(randomElement.engWord);
                        }
                    }
                }
                
            })

            if (count == 29) {

                setTimeout(() => {
                    trainingFieldWrap.innerHTML = '';
                    question.innerText = '';
                    answerInput.readOnly = true;
                    postProgress.style.width = '100%';

                    let blinkFunc = function (target) {
                        if (target.style.backgroundColor == 'white') target.style.backgroundColor = 'aquamarine';
                        else if (target.style.backgroundColor == 'aquamarine') target.style.backgroundColor = 'white';
                    }

                    setTimeout(() => {
                        win.play();
                        let timer = setInterval(() => {
                            blinkFunc(trainingFieldWrap);
                        }, 200);
                        setTimeout(() => {
                            clearInterval(timer);
                        }, 2000);

                    }, 400);

                    setTimeout(() => {
                        trainingFieldWrap.style.backgroundColor = 'white';
                        returnResults(mistakes);
                    }, 2700);
                }, 200)
            }
        }


        createAnswer();
    }

    let returnResults = function (mistakes) {

        let newMistakesArr = mistakesArr.filter((value, index) => {
            return mistakesArr.indexOf(value) === index;
        })
        console.log(newMistakesArr)

        trainingFieldWrap.style.justifyContent = 'space-between';

        mistakes = +mistakes;

        trainingFieldWrap.innerHTML = '';

        let backToModeMenu = document.createElement('button');
        backToModeMenu.classList.add('backToModeMenu');
        trainingFieldWrap.appendChild(backToModeMenu);
        backToModeMenu.classList.add('backToModeMenuAftertrain');

        let backImg = document.createElement('img');
        backImg.classList.add('backImg');
        backToModeMenu.appendChild(backImg);
        backImg.src = './remove.svg';

        backToModeMenu.addEventListener('click', () => {
            removeSound.play();
            trainingFieldWrap.remove();
            training();
        })

        let results = document.createElement('p');
        results.classList.add('results');
        trainingFieldWrap.appendChild(results);
        results.innerHTML = `Тренування закінчено <br> Помилок зроблено: ${mistakes}`;

        if(mistakes == 0){
            trainingFieldWrap.style.justifyContent = 'center';
        }

        if(mistakes > 0){
            let resultsLable = document.createElement('h3');
            resultsLable.classList.add('resultsLable');
            trainingFieldWrap.appendChild(resultsLable);
            resultsLable.innerHTML = 'Наступні слова/фрази потребують вашої уваги:'

            let resultsWrapper = document.createElement('div');
            resultsWrapper.classList.add('resultsWrapper');
            trainingFieldWrap.appendChild(resultsWrapper);

            for (let key of newMistakesArr) {
                let resultsListEl = document.createElement('div');
                resultsListEl.classList.add('resultsList');
                resultsWrapper.appendChild(resultsListEl);
                resultsListEl.innerText = key;
            }
        }

        mistakesArr = [];
    }

    let falseFunc = function (answer) {

        let falseAlertWrap = document.createElement('div');
        falseAlertWrap.classList.add('falseAlertWrap');
        trainingFieldWrap.appendChild(falseAlertWrap);

        let falseAlertHeader = document.createElement('h3');
        falseAlertWrap.appendChild(falseAlertHeader);
        falseAlertHeader.innerHTML = 'ПОМИЛКА';
        falseAlertHeader.style.color = 'crimson';

        let falseAlertLable = document.createElement('div');
        falseAlertLable.classList.add('falseAlertLable');
        falseAlertWrap.appendChild(falseAlertLable);
        falseAlertLable.innerText = 'Правильна відповідь -';

        let falseAlertTrue = document.createElement('h4');
        falseAlertTrue.classList.add('falseAlertTrue');
        falseAlertWrap.appendChild(falseAlertTrue);
        falseAlertTrue.innerHTML = `${answer}`;

        errorSound.play();
        trainingFieldWrap.style.backgroundColor = 'crimson';
        setTimeout(() => {
            trainingFieldWrap.style.backgroundColor = 'white';
            falseAlertWrap.remove();
        }, 2000);
    }

}


export default training;