let allButtons = document.getElementsByTagName('button');

let copyButtons = [];
for (let i=0; i < allButtons.length; i++) {
    copyButtons.push(allButtons[i].classList[1]);
}

function colorChanger(clickedButton) {
    if (clickedButton.value === 'red') {
        buttonsRed();
    } else if (clickedButton.value === 'green') {
        buttonsGreen();
    } else if (clickedButton.value === 'blue') {
        buttonsBlue();
    } else if (clickedButton.value === 'random') {
        buttonsRandom();
    } else if (clickedButton.value === 'reset') {
        buttonsReset();
    }
}

function buttonsRed() {
    for (let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonsBlue() {
    for (let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-primary');
    }
}

function buttonsGreen() {
    for (let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success')
    }
}

function buttonsReset() {
    for (let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyButtons[i]);
    }
}

function buttonsRandom() {
    let randomChoices = ['btn-danger', 'btn-primary', 'btn-success', 'btn-warning']

    for (let i=0; i < allButtons.length; i++) {
        let randomColor = Math.floor(Math.random() * 4)
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(randomChoices[randomColor]);
    }
}