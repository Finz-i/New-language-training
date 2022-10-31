import back from './backToPreviuousPage.js';
import training from './Training.js';

let addWordsFunc = function () {

    back();

    console.log(localStorage.length);

    if(localStorage.length != 0){
        for (let key of JSON.parse(localStorage.getItem('key'))){
            key.id = JSON.parse(localStorage.getItem('key')).indexOf(key);  
        }
    }

    let mainButtonSound = new Audio;
    mainButtonSound.src = './sounds/main-button.wav';

    let delSound = new Audio;
    delSound.src = './sounds/del.wav';

    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('wrap');
    console.log(wrapper.style.display);

    const wordsWrapper = document.createElement('div');
    wordsWrapper.classList.add('wordsWrapper');
    wrapper.appendChild(wordsWrapper);

    let addWordInput = document.createElement('input');
    addWordInput.classList.add('addWordInput');
    wordsWrapper.appendChild(addWordInput);
    addWordInput.value = 'Add english word';

    addWordInput.addEventListener('focus', () => {
        if(addWordInput.value == 'Add english word'){
            addWordInput.value = '';
        }
    })
    addWordInput.addEventListener('focusout', () => {
        if (addWordInput.value == '') {
            addWordInput.value = 'Add english word';
        }
    })

    let addTranslateInput = document.createElement('input');
    addTranslateInput.classList.add('addTranslateInput');
    wordsWrapper.appendChild(addTranslateInput);
    addTranslateInput.value = 'Add translate';

    addTranslateInput.addEventListener('focus', () => {
        if(addTranslateInput.value == 'Add translate'){
            addTranslateInput.value = '';
        }
    })
    addTranslateInput.addEventListener('focusout', () => {
        if (addTranslateInput.value == '') {
            addTranslateInput.value = 'Add translate';
        }
    })

    let addWord = document.createElement('button');
    addWord.classList.add('addWord');
    addWord.innerHTML = 'ADD WORD'
    wordsWrapper.appendChild(addWord);

    addWord.addEventListener('click', () => {
        mainButtonSound.play();
    })

    let amountOfWords = document.createElement('div');
    amountOfWords.classList.add('wordNum');
    wrapper.appendChild(amountOfWords);
    let arr = [];
    let LSArr = JSON.parse(localStorage.getItem('key'));

    if(localStorage.length != 0){
        for (let key of LSArr) {
            arr.push(key);
        }
    }

    addWord.addEventListener('click', () => {
        mainButtonSound.play();
        if ((addTranslateInput.value != '' && addTranslateInput.value != 'Add translate') && (addWordInput.value != '' && addWordInput.value != 'Add english word')){
            let obj = {
                id: '',
                engWord: '',
                translate: ''
            };

            obj.id = arr.length;
            obj.id += 1;

            let engArr = [];

            engArr.push(addWordInput.value[0].toUpperCase());
            for(let i = 1; i <= addWordInput.value.length-1; i++){
                engArr.push(addWordInput.value[i]);
            }
            
            let newEngStr = '';

            for(let key of engArr){
                newEngStr += key;
            }
            
            obj.engWord = newEngStr.trim();


            let translateArr = [];

            translateArr.push(addTranslateInput.value[0].toUpperCase());
            for(let i = 1; i <= addTranslateInput.value.length-1; i++){
                translateArr.push(addTranslateInput.value[i])
            }

            let newTranslateStr = '';

            for(let key of translateArr){
                newTranslateStr += key;
            }

            obj.translate = newTranslateStr.trim();
            arr.push(obj);

            for(let key of arr){
                key.id = arr.indexOf(key);
                key.id += 1;
            }

            vocabulary.innerHTML = '';
            arr.forEach((element) => {
                createVocabularyElement(element.id, element.engWord, element.translate);
            })

            localStorage.setItem('key', JSON.stringify(arr));

        }

        addWordInput.value = 'Add english word';
        addTranslateInput.value = 'Add translate';
        amountOfWords.innerText = arr.length + '';
    })

    //Vocabulary section
    const vocabulary = document.createElement('div');
    vocabulary.classList.add('vocabulary');
    wrapper.appendChild(vocabulary);
    amountOfWords.innerText = arr.length;

    let createVocabularyElement = function (id, engWord, translate) {

        let vocElement = document.createElement('div');
        vocElement.classList.add('vocElement');
        vocabulary.appendChild(vocElement);
        vocElement.dataset.id = id;

        //Words content
        let wordEng = document.createElement('div');
        wordEng.classList.add('wordEng');
        vocElement.appendChild(wordEng);
        wordEng.innerText = engWord;


        let dash = document.createElement('div');
        dash.classList.add('dash');
        dash.innerText = '—';
        vocElement.appendChild(dash);

        let wordTranslate = document.createElement('div');
        wordTranslate.classList.add('wordTranslate');
        vocElement.appendChild(wordTranslate);
        wordTranslate.innerText = translate;


        //Delete
        let del = document.createElement('button');
        del.classList.add('del');
        vocElement.appendChild(del);

        let rmvImg = document.createElement('img');
        rmvImg.classList.add('rmvImg');
        rmvImg.src = './remove.svg';
        del.appendChild(rmvImg);

        //Delete item action
        del.addEventListener('click', () => {
            delSound.play();
            vocElement.remove();
            for (let key of arr) {
                if (key.id == vocElement.dataset.id){
                    arr.splice(arr.indexOf(key), 1);
                    localStorage.setItem('key', JSON.stringify(arr));
                }  
            }

            for (let key of arr) {
                key.id = arr.indexOf(key);
                key.id += 1;
            }

            vocabulary.innerHTML = '';
            arr.forEach((element) => {
                createVocabularyElement(element.id, element.engWord, element.translate);
            })

            localStorage.setItem('key', JSON.stringify(arr));
            amountOfWords.innerText = arr.length + '';
        })  
    }

    vocabulary.innerHTML = '';
    if (localStorage.length != 0) {
        LSArr.forEach((element) => {
            createVocabularyElement(element.id, element.engWord, element.translate);
        });
    }

}
export default addWordsFunc;