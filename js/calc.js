var cacl = {
    operationButtons: document.getElementsByClassName('operator'),
    num1: document.getElementById('num1'),
    num2: document.getElementById('num2'),
    result: document.getElementById('result'),

    makeOperation: function (operationCode) {
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
    },

    onOperationButtonClick: function (eventObj){
        var clickedElement = eventObj.currentTarget;
        var operationn = clickedElement.innerHTML;
        makeOperation(operationn);
    }, 

    for(var i = 0; i < operationButtons.length; i++){
        var button = operationButtons[i];
        button.addEventListener('click', onOperationButtonClick)
    },

    
}