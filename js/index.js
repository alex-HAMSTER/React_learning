var operationButtons = document.getElementsByClassName('operator');

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');


function makeOperation(operationCode) {
    var number1 = Number(num1.value);
    var number2 = Number(num2.value);
    var res;
    
    if (operationCode === '+'){
        res = number1 + number2;
    } else if(operationCode === '-'){
        res = number1 - number2;
    } else if(operationCode === '*'){
        res = number1 * number2;
    } else if(operationCode === '/'){
        res = number1 / number2;
    } else if(operationCode === '%'){
        res = number1 % number2;
    }

    result.value = res;
}

function onOperationButtonClick(eventObj){
    var clickedElement = eventObj.currentTarget;
    var operationn = clickedElement.innerHTML;
    makeOperation(operationn);
}


for(var i = 0; i < operationButtons.length; i++){
    var button = operationButtons[i];
    button.addEventListener('click', onOperationButtonClick)
}



slider.arrow();
slider.btnDotList();
