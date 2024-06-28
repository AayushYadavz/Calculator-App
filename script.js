const display = document.getElementById('display')

function clearDisplay(){
    display.value = ''
}

function deleteLastCharacter(){
    display.value = (display.value).toString().slice(0, -1)
}

function appendToDisplay(val){
    display.value += val
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}