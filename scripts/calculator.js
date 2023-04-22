$(function () {
    console.log('1. randomnumber' + getRandomInt(11));
    console.log('2. randomnumber' + getRandomInt(11));

    let randomnumber1 = getRandomInt(11);
    let randomnumber2 = getRandomInt(11);

    document.getElementById('FirstTextInput1').value = randomnumber1;
    document.getElementById('FirstTextInput2').value = randomnumber2;


    $("#calc-button").click(function () {
        calculate();
    });
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function calculate() {
    let nr1Value = document.getElementById('FirstTextInput1').value;

    let nr2Value = document.getElementById('FirstTextInput2').value;

    let numberA = 'FirstTextInput1';
    let numberB = 'FirstTextInput2';
    let operation = '+';
    let total = eval(numberA + operation + numberB);
}