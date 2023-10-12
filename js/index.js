const operatorPlus = document.getElementById('operatorPlus');
const operatorMinus = document.getElementById('operatorMinus');
const operatorUmnoz = document.getElementById('operatorUmnoz');
const operatorDelit = document.getElementById('operatorDelit');
const operatorPecent = document.getElementById('operatorPecent');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');


function onOperationButtonClick(eventOb){
    debugger
    var clickedElement = eventOb.currentTarget;
    var operation = clickedElement.innerHTML;
    makeeOperation(operation);
}

function makeeOperation(operationCode){
    var number1 = Number(num1.value);
    var number2 = Number(num2.value);
    if(operationCode === '+'){
        var res = number1 + number2;
    }else if(operationCode === '-'){
        var res = number1 - number2;
    }else if(operationCode === '*'){
        var res = number1 * number2;
    }else if(operationCode === '/'){
        var res = number1 / number2;
    }else if(operationCode === '%'){
        var res = number1 % number2;
    }
    result.value = res;
}



operatorPlus.addEventListener('click', onOperationButtonClick);
operatorMinus.addEventListener('click', onOperationButtonClick);
operatorUmnoz.addEventListener('click', onOperationButtonClick);
operatorDelit.addEventListener('click', onOperationButtonClick);
operatorPecent.addEventListener('click', onOperationButtonClick);