//select where answers should be displayed
let result = document.getElementById("display");

//function performing calculations 
function calculate(number) {
    result.value += number;
}
//answers 
function answer() {
    if (result.value == "") {
        result.value = "";
    } else {
        try {
            result.value = eval(result.value)
        }
        catch (err) {
            result.value = "Invalid Input 🤪🤪🤪";
            return false;
        }
    }

}
//clear the inputs
function clr() {
    result.value = "";
}

//deliting inputs one by one
function del() {
    result.value = result.value.slice(0, -1);
}