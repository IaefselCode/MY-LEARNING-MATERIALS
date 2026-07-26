
const cars = "range";
//Testing Switch
switch (cars) {
    case "rambo":
        document.write("It is he coolest down car" + "<br>" + "<br>");
        break;
    case "range":
        document.write("It is the most coolest up car" + "<br>" + "<br>");
        break;
    default:
        alert("There is no car Selected");
}



//Sorting Number
const uppero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
uppero.sort(
    function (a, b) {
        return b - a;
    }
);
document.write(uppero + "<Br>" + "<Br>");


//Selecting the first value
const highest = uppero[0];
document.write(highest + "<br>" + "<Br>");

//Round up
const num1 = Math.ceil(21.90);
document.write(num1 + "<Br>" + "<Br>");

//Math random
const random = Math.random();
document.write(random + "<Br>" + "<Br>");

//testing if else
const age = 18;
if (age >= 18) {
    document.write("Age is old Enough to Enter");
}
else {
    document.write("Your Age is too Young to Enter");

}
//Testing random number generator
function getRandomint(min, max) {
    document.getElementById("demo").innerHTML = Math.floor(Math.random() * (max - min - 1)) + min + "<br>" + "<br>";
}

//Testing foreach
const foreached = ["Number", "User", "User", "User", "User", "User", "User", "User", "User"];
foreached.forEach(function (index, value) {
    document.write("<br>" + value + ":" + index + "<br>");
});

//Testing for Loop
const looped = ["For Looped one"];

for (let i = 0; i < 100; i++) {
    document.write(looped + "<br>");
}

//Testing for of loop
const loopeder = "For of Looped one";
for (value of loopeder) {
    document.write(loopeder + "<br>");
}

//Testing while loop





//Testing Javascript Event Listener
const btner = document.getElementById("demos");
btner.addEventListener("click", function () {
    const name = window.prompt("What is Your Name");
    const time = setTimeout(() => {
        alert("So your Name is  " + name);
    }, 1500);
});


function thefunc() {
    "use strict";
    var text = "The strict";
    alert(text);
}




//timeout test
const myTimeout = setTimeout(
    function () {
        alert("Hellow The Fucking World!!!");
    }, 3000
);
clearTimeout(myTimeout);





try {
    myfunction();
} catch (err) {
    document.write(err);
}


//JS Dates Test
const date = new Date("2019-03-21T00:00+06:00");
date.setDate(14);
document.write(date + "<br>" + "<br>");

/*
//Testing *this* in Arrow Function
const button = document.getElementById("button");
const changeStyle =()=>{
    this.style.background = "Blue";
    this.style.color = "white";
};
 
button.onclick = function(){
    changeStyle();
}
*/

const button = document.getElementById("button");
button.onclick = function () {
    const changeStyle = () => {
        this.style.background = "Blue";
        this.style.color = "white";
    };
    changeStyle();
}


//Testing Some Form Validation
function validateform() {
    var firstname = document.getElementById("firstname").value;
        alert("Your Name Is" + firstname);
        alert("Successful Submitted");
    } 



//Testing how to replace element using innerHTML
const list=document.getElementById("list");
function replace(){
    list.innerHTML="<Li>They are already replaced</li>"+"<Li>They are already replaced</li>"+"<Li>They are already replaced</li>";
}
/*
const element=document.createElement("p");
const textNode=document.createTextNode("Here ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooi AM");

element.appendChild(textNode);
document.getElementById("Mbwizo").appendChild(element);

parentNode.prepend()
parentNode.append()
*/