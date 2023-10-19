var calc = {
    operationButtons: document.getElementsByClassName('operator'),
    num1: document.getElementById('num1'),
    num2: document.getElementById('num2'),
    result: document.getElementById('result'),

    calcStart: function (){
        var that = this;
        function makeOperation (operationCode) {
            var number1 = Number(that.num1.value);
            var number2 = Number(that.num2.value);
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
    
        function onOperationButtonClick (eventObj) {
            var clickedElement = eventObj.currentTarget;
            var operationn = clickedElement.innerHTML;
            makeOperation(operationn);
        }
    
        for(var i = 0; i < that.operationButtons.length; i++){
            var button = that.operationButtons[i];
            button.addEventListener('click', onOperationButtonClick)
        }
    }

    


}