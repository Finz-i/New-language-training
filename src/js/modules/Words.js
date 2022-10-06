let addWordsFunc = function () {

    let mainButtonSound = new Audio;
    mainButtonSound.src = './sounds/main-button.wav';

    let delSound = new Audio;
    delSound.src = '../../sounds/del.wav';

    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('wrap');

    const backToPrevious = document.createElement('button');
    backToPrevious.classList.add('backToPrevious');
    wrapper.appendChild(backToPrevious);
    
    let backImg = document.createElement('img');
    backImg.classList.add('backImg');
    backToPrevious.appendChild(backImg);
    backImg.src = '../../remove.svg';

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

    

    addWord.addEventListener('click', () => {
        mainButtonSound.play();
        createVocabularyElement();
        addWordInput.value = 'Add english word';
        addTranslateInput.value = 'Add translate'
        amountOfWords.innerText = arr.length + '';
    })

    //Vocabulary section
    const vocabulary = document.createElement('div');
    vocabulary.classList.add('vocabulary');
    wrapper.appendChild(vocabulary);
    let arr = [];
    amountOfWords.innerText = arr.length;

    backToPrevious.addEventListener('click', () => {
        delSound.play();
        wordsWrapper.remove();
        vocabulary.remove();
        amountOfWords.remove();
        backToPrevious.remove();
        createStartContent();
    })

    let createVocabularyElement = function () {

        let vocElement = document.createElement('div');
        vocElement.classList.add('vocElement');
        vocabulary.appendChild(vocElement);
        vocabulary.dataset.id = arr.length;

        //Words content
        let wordEng = document.createElement('div');
        if(addWordInput.value != 'Add english word'){
            wordEng.innerText = addWordInput.value;
        } else wordEng.innerText = 'WORD';

        wordEng.classList.add('wordEng');
        vocElement.appendChild(wordEng);

        let dash = document.createElement('div');
        dash.classList.add('dash');
        dash.innerText = '—';
        vocElement.appendChild(dash);

        let wordTranslate = document.createElement('div');
        if (addTranslateInput.value != 'Add translate') {
            wordTranslate.innerText = addTranslateInput.value;
        } else wordTranslate.innerText = 'TRANSLATE';
        wordTranslate.classList.add('wordTranslate');
        vocElement.appendChild(wordTranslate);

        //Delete
        let del = document.createElement('button');
        del.classList.add('del');
        vocElement.appendChild(del);

        let rmvImg = document.createElement('img');
        rmvImg.classList.add('rmvImg');
        rmvImg.src = '../../remove.svg'
        del.appendChild(rmvImg);
        arr.push(vocElement);

        //Delete item action
        del.addEventListener('click', () => {
            delSound.play();
            vocElement.remove();
            arr.splice(arr[vocabulary.dataset.id], 1)
            amountOfWords.innerText = arr.length + '';
        })

        
    }

    let createStartContent = function () {
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.add('wrap');
        wrapper.style.display = 'flex';

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
    }
}
export default addWordsFunc;