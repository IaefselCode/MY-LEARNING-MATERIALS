//Iserting Elements
const element = document.createElement("p");
const textNode = document.createTextNode("Hellow World!!!");

element.appendChild(textNode);
document.getElementById("Mbwizo").appendChild(element);

//Testing the Remove Element
const list = document.getElementById("list");
const lists = document.getElementById("lists");
function remove() {
    //select the first child
    const firstchild = list.firstElementChild;
    const firstchilds = lists.firstElementChild;
    //removing the first child
    firstchild.remove();
    firstchilds.remove();
}
//to remove from the last element you just select the "lastElementChild"

//Inserting Elements
const james = document.getElementById("david");
function add() {
    const li = document.createElement("li");
    const textNode = document.createTextNode("Arusha Techincal College is added to the list");
    david.appendChild(textNode);

    list.prepend(li);
}
//Tocreate darktheme
function dark() {
    document.getElementById("dark").style.backgroundColor = "black";
    document.getElementById("dark").style.color = "white";
}

function white() {
    document.getElementById("dark").style.backgroundColor = "white";
    document.getElementById("dark").style.color = "black";
}
//Testing show hide div
const showhide = document.getElementById("hideshow");
function showbtn() {
    showhide.style.display = "block";
    //wait a little bit before setting opacity to 1
    setTimeout(() => {
        showhide.style.opacity = "1";
    }, 10);
}
function hidebtn() {
    showhide.style.opacity = "0";
    setTimeout(() => {
        showhide.style.display = "none";
    }, 500);
}

//Learning To Create a Sliding Effect with JavaScript
function slideup() {
    const elem = document.getElementById("demo");
    elem.style.maxHeight = "0px";
}
function slidedown() {
    const elem = document.getElementById("demo");
    elem.style.maxHeight = "180px";
}

//JAVASCRIPT EVENT LISTENER
//Syntax
//element.addEventListener(eventType, ListenerFunction)

//Click Event
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
    alert("This is a Click Event Listener");
});

//Load Event
const image = document.getElementById("Image");

image.addEventListener("load", function () {
    alert("The Shadrack Bale's Image has been Loaded");
});

//Change Event
const change = document.getElementsByTagName("input")[0];
change.addEventListener("change", function () {
    document.getElementById("changep").innerHTML = change.value;
});



//  JS and BOM
//Window can access var and functions declared in the global scope
var txt = "Hellow world";
function sayHello() {
    //accesing the var txt
    document.write(window.txt);
}
//claa sayHello() using window
window.sayHello();

//Window Height and Width
const height = window.innerHeight;
const width = window.innerWidth;

document.getElementById("Dimension").innerHTML = "Height: " + height + "<br>" + "Width: " + width;

//JS BOM Screen
document.getElementById("demoka").innerHTML = screen.width;
document.getElementById("demoka1").innerHTML = screen.availWidth;
document.getElementById("demoka2").innerHTML = screen.height;
document.getElementById("demoka3").innerHTML = screen.availHeight;
//orientation also uses type propertv
document.getElementById("demoka4").innerHTML = screen.orientation.type;
document.getElementById("demoka5").innerHTML = screen.pixelDepth;
document.getElementById("demoka6").innerHTML = screen.colorDepth;


//JS BOM Location

document.getElementById("loc1").innerHTML = location.href;
document.getElementById("loc2").innerHTML = location.protocol;
document.getElementById("loc3").innerHTML = location.hostname;
document.getElementById("loc4").innerHTML = location.pathname;

//JS BOM History
const hist1 = history.length;
document.getElementById("hist1").innerHTML = hist1;


//JS BOM Navigator
document.getElementById("nav1").innerHTML = navigator.platform;
document.getElementById("nav2").innerHTML = navigator.language;
document.getElementById("nav3").innerHTML = navigator.appName;
document.getElementById("nav4").innerHTML = navigator.appCodeName;
document.getElementById("nav5").innerHTML = navigator.appVersion;
document.getElementById("nav6").innerHTML = navigator.userAgent;
document.getElementById("nav7").innerHTML = navigator.onLine;


//JS BOM Cookies
//To Create a Cookie
// document.cookie = "FirstName=David";

//Multiple Cookies
// document.cookie = "FirstName=David; LastName=Modestus";

//Adding an Expiery Day So as the Cookie does not Get Deleted When the Browser is Closed
document.cookie = "FirstName=David; ,LastName=Modestus; expires=Mon, 21 Apr 2026 12:00:00 UTC"
document.cookie = "2Name=Modestus; expires=Mon, 21 Apr 2026 12:00:00 UTC"
document.cookie = "3Name=Modestus; expires=Mon, 21 Apr 2026 12:00:00 UTC"
document.cookie = "4Name=Modestus; expires=Mon, 21 Apr 2026 12:00:00 UTC"
document.cookie = "5Name=Modestus; expires=Mon, 21 Apr 2026 12:00:00 UTC"
document.cookie = "6Name=Modestus; expires=Mon, 21 Apr 2026 12:00:00 UTC"

// OTHER EASIER WAY
// document.cookie = "mycookie=; max-age=0; path=/"
// add ; path=/ so cookie applies site-wide


//Getting Cookie Value
const cookies = document.cookie;
document.getElementById("cookies").innerHTML = cookies;

// OR
console.log(document.cookie);

//Changing Cookie Value
// document.cookie = "FirstName=Shadrack";

//Deleting a cookie
// document.cookie = "LastName=; max-age=0";

//JS AJAX




//STORAGE
//BROWSER LOCALSTORAGE
//Accessing local storage you use the "localStorage" together with some few methods eg
// 1.getItem - getsitem from local storage
// 2.setItem - stets item to local storage 
// 3.removeItem - removes item from local storage
// 4.clear - clears all the items in local storage
//5.key - gets the name of the nth key in a storage
//6.length - gets the number of items in local storage

//Setting item to local storage using setItem() and it 
localStorage.setItem("FirstName", "David");
localStorage.setItem("LastName", "Modestus");

//Getting item from local storage using getItem()
console.log(localStorage.getItem("FirstName"));
console.log(localStorage.getItem("LastName"));

//Removing item from local storage using removeItem()
function removeit() {
    localStorage.removeItem("LastName");
}

//Clearing all the items in local storage using clear()
//localStorage.clear();

//Getting the name of the nth key in a storage using key()
console.log(localStorage.key(0));

//Getting the number of items in local storage using length
console.log(localStorage.length);


//SESSION STORAGE
//The session storage is similar to local storage but the only difference is that the data in session storage gets deleted when the browser is closed
//The methods used in session storage are similar to those used in local storage

//Setting item to session storage using setItem() and it 
sessionStorage.setItem("FirstName", "David");
sessionStorage.setItem("LastName", "Modestus");

//Getting item from session storage using getItem()
console.log(sessionStorage.getItem("FirstName"));
console.log(sessionStorage.getItem("LastName"));

//Removing item from session storage using removeItem()
function removeit() {
    sessionStorage.removeItem("LastName");
}

//Clearing all the items in session storage using clear()
//sessionStorage.clear();

//Getting the name of the nth key in a storage using key()
console.log(sessionStorage.key(0));

//Getting the number of items in session storage using length
console.log(sessionStorage.length);

//End of STORAGE



