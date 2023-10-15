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



const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

const sliderImg = document.getElementById('slider_img');

/* btnNext.addEventListener('click', ()=> {
    sliderImg.src = 'img/slider_2.png'
}) */


var imgSrc=['img/slider_1.png',
            'img/slider_2.png',
            'img/slider_3.png',
            'img/slider_4.png'];

var counter = 0;

btnNext.addEventListener('click',()=>{
    counter++;
    if(counter < imgSrc.length){
        sliderImg.src = imgSrc[counter]
    }else{
        counter = 0;
        sliderImg.src = imgSrc[counter]
    }
    
    console.log(counter);
    imgSrc[counter]
})




