import createStartContent from '../script.js'

let back = function () {
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

    backToPrevious.addEventListener('click', () => {
        delSound.play();
        wrapper.innerHTML = '';
        console.log(1)
        backToPrevious.remove();
        createStartContent();
    })

}

export default back;