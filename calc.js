const display = document.getElementById('display')

function appendToDisplay(input){
    display.value += input
}

function calculate(){
    try {
        display.value = eval(display.value)
    }
    
catch (error){
    display.value = "Error"
}   
if (display.value.length > 10) {
   display.value =  Number(display.value).toFixed(8)
}

}

function clearDisplay() {
    display.value = ''
}