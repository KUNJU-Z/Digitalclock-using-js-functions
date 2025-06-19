const display=document.getElementById('display');

function append(input){
    display.value += input;
}

function clr(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(Error)
    {
        display.value = "error";
     }

    }
// function Error() { [native code] }