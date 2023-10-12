const operatorPlus = document.getElementById('operatorPlus');
const operatorMinus = document.getElementById('operatorMinus');
const operatorUmnoz = document.getElementById('operatorUmnoz');
const operatorDelit = document.getElementById('operatorDelit');
const operatorPecent = document.getElementById('operatorPecent');

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');


const result = document.getElementById('result');

operatorPlus.addEventListener('click', ()=> {
    result.value = Number(num1.value) + Number(num2.value);
})
operatorMinus.addEventListener('click', ()=> {
    result.value = Number(num1.value) - Number(num2.value);
})
operatorUmnoz.addEventListener('click', ()=> {
    result.value = Number(num1.value) * Number(num2.value);
})
operatorDelit.addEventListener('click', ()=> {
    result.value = Number(num1.value) / Number(num2.value);
})
operatorPecent.addEventListener('click', ()=> {
    result.value = Number(num1.value) % Number(num2.value);
})