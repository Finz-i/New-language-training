
let addWordsFunc = function () {

    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('wrap');

    const wordsWrapper = document.createElement('div');
    wordsWrapper.classList.add('wordsWrapper');
    wrapper.appendChild(wordsWrapper);

    let addWordInput = document.createElement('input');
    addWordInput.classList.add('addWordInput');
    wordsWrapper.appendChild(addWordInput);
    addWordInput.value = 'Add english word';
    addWordInput.addEventListener('focus', () => {
        addWordInput.value = '';
    })
    addWordInput.addEventListener('focusout', () => {
        addWordInput.value = 'Add english word';
    })

    let addTranslateInput = document.createElement('input');
    addTranslateInput.classList.add('addTranslateInput');
    wordsWrapper.appendChild(addTranslateInput);
    addTranslateInput.value = 'Add translate';
    addTranslateInput.addEventListener('focus', () => {
        addTranslateInput.value = '';
    })
    addTranslateInput.addEventListener('focusout', () => {
        addTranslateInput.value = 'Add translate';
    })

    let addWord = document.createElement('button');
    addWord.classList.add('addWord');
    addWord.innerHTML = 'ADD WORD'
    wordsWrapper.appendChild(addWord);

    let mainButtonSound = new Audio;
    mainButtonSound.src = './sounds/main-button.wav';

    addWord.addEventListener('click', () => {
        mainButtonSound.play();
    })

    //Vocabulary section
    const vocabulary = document.createElement('div');
    vocabulary.classList.add('vocabulary');
    wrapper.appendChild(vocabulary);
    let vocArr = [];
    let vocObj = {};
    let count = 1;

    addWord.addEventListener('click', () => {
        mainButtonSound.play();
        createVocabularyElement();
        count++;

    })
     
    let createVocabularyElement = function (word, translate, nmbr) {

        nmbr = count;

        let vocElement = document.createElement('div');
        vocElement.classList.add('vocElement');
        vocabulary.appendChild(vocElement);

        let wordEng = document.createElement('div');
        wordEng.innerText = 'WORD';
        wordEng.classList.add('wordEng');
        vocElement.appendChild(wordEng);

        let dash = document.createElement('div');
        dash.classList.add('dash');
        dash.innerText = '—';
        vocElement.appendChild(dash);

        let wordTranslate = document.createElement('div');
        wordTranslate.classList.add('wordTranslate');
        wordTranslate.innerText = 'TRANSLATE';
        vocElement.appendChild(wordTranslate);

        let wordNum = document.createElement('div');
        wordNum.classList.add('wordNum');
        vocElement.appendChild(wordNum);
        wordNum.innerText = nmbr;


        let del = document.createElement('button');
        del.classList.add('del');
        vocElement.appendChild(del);

        let delSound = new Audio;
        delSound.src = '../../sounds/del.wav'


        del.addEventListener('click', () => {
            delSound.play();
            vocElement.remove();
        })


        let rmvImg = document.createElement('img');
        rmvImg.classList.add('rmvImg');
        rmvImg.src = '../../remove.svg'
        del.appendChild(rmvImg);



    }



}

export default addWordsFunc;