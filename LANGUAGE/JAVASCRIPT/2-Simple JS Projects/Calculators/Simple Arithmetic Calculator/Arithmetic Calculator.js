const result = document.getElementById("result");
const num1 = document.getElementById("first");
const num2 = document.getElementById("second");


const add = document.getElementById("add");
add.addEventListener("click",
    function () {
        result.value = eval(parseInt(num1.value) + parseInt(num2.value));
    }
);
const sub = document.getElementById("sub");
sub.addEventListener("click",
    function () {
        result.value = eval(parseInt(num1.value) - parseInt(num2.value));
    }
);
const multi = document.getElementById("multi");
multi.addEventListener("click",
    function () {
        result.value = eval(parseInt(num1.value) * parseInt(num2.value));
    }
);
const div = document.getElementById("div");
div.addEventListener("click",
    function () {
        result.value = eval(parseInt(num1.value) / parseInt(num2.value));
    }
);
/*
or
function addi(){
    result.value=eval(parseInt(num1.value) + parseInt(num2.value));
}
*/
