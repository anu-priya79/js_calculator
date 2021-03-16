const screen = document.querySelector("input");
const buttons = document.querySelectorAll("button");
let screenValue = "";
for(button of buttons){
button.addEventListener('click', (e) => {
    let dataButton = e.target.innerText;
    if(dataButton == 'X'){
        dataButton = '*';
        screenValue += dataButton;
        screen.value += dataButton;
    }
    else if(dataButton == '÷'){
        dataButton = '/';
        screenValue += dataButton;
        screen.value += dataButton;
    }
    else if(dataButton == 'AC'){
        screenValue = "";
        screen.value = screenValue;    
    }else if(dataButton == '='){
        screen.value = eval(screenValue); 
    }else{
        screenValue += dataButton;
        screen.value = screenValue;
    }
    })
}