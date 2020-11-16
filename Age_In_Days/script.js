function ageInDays() {
    var birthYear = prompt('what year were you born in?');
    var calcAge = (2020 - birthYear) * 365;
    var createH1 = document.createElement('h1');
    var textResult = document.createTextNode('You are ' + calcAge + ' days old!');
    createH1.setAttribute('id', 'ageInDays');
    createH1.appendChild(textResult);
    document.getElementById('flex-box-result').appendChild(createH1);
}

function resetButton() {
    document.getElementById('ageInDays').remove();
}