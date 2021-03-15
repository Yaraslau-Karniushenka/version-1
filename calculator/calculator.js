let numberBtn = document.querySelectorAll('.number');
let operatorBtn = document.querySelectorAll('.manipulation');
let dotBtn = document.querySelectorAll('.dot');
let evalBtn = document.querySelectorAll('.manipulation')
let clearBtn = document.querySelectorAll('.clear')

for (let i = 0; i < numberBtn.length; i++) {
    let number = numberBtn[i];
    number.addEventListener('click', function (evant) {
        numberKeys(evant.target.textContent) 
    })
};
for (let i = 0; i < operatorBtn.length; i++) {
    let operator = operatorBtn[i];
    operator.addEventListener('click',function (evant) {
        operatorKeys(evant.target.textContent)
    }) 
};
for (let i = 0; i < dotBtn.length; i++) {
    let dot = dotBtn[i];
    dot.addEventListener('click',function (evant) {
        dotFunc(evant.target.textContent)  
    }) 
   
};

for (let i = 0; i < clearBtn.length; i++) {
    let remove = clearBtn[i];
    remove.addEventListener('click', function(evant){
    clear(evant.target.textContent)
    })  
};

let display = document.querySelector('.screen');

document.oninput = function() {
    var Display = display;
    Display.value = Display.value.replace (/[^\+\d]/g, '');
}



var CurrentMemory = '0';
var NewMemory = false ;

function numberKeys(numbers) {
    if (NewMemory) {
        display.value = numbers;
        NewMemory = false ;
    } else {
        if ( display.value === '0') {
            display.value = numbers;
        } else {
            display.value += numbers;
        };
    };
};

function operatorKeys(operators) {
    
     localMemory = display.value;

  if (NewMemory && ExpectedMemory !== '=') {
      display.value = CurrentMemory;
  } else {
    NewMemory = true;
    if (ExpectedMemory === '+') {
        CurrentMemory += parseFloat(localMemory);
    } 
    else if (ExpectedMemory === '-') {
        CurrentMemory -= parseFloat(localMemory);
    }
    else if (ExpectedMemory === '/' ) {
        CurrentMemory /= parseFloat(localMemory);
    }
    else if (ExpectedMemory === '*') {
        CurrentMemory *= parseFloat(localMemory);
    }
else {
    CurrentMemory = parseFloat(localMemory);
};
display.value = CurrentMemory;
 ExpectedMemory = operators;
}};

function dotFunc (dots) {
    if (display.value === '0') {
        display.value = dots;
    } else {
        display.value += dots;
    }
};
function clear() {
   if (display.value !== '0') {
       display.value = '0';
       NewMemory = true;
       CurrentMemory = '0';
       ExpectedMemory = ''; 
   }  
 };


  


