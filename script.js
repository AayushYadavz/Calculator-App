const display = document.getElementById('display')

// To clear input feild
function clearDisplay(){
    display.value = ''
}

// To delete last character from input feild
function deleteLastCharacter(){
    display.value = (display.value).toString().slice(0, -1)
}

// To add button digits and operators in input feild
function appendToDisplay(val){
    display.value += val
}

// For calculating on clicking "=" button
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}