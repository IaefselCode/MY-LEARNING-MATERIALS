// //Original JS code
// const year = document.getElementById('Year')
// const thisYear = new Date().getFullYear()
// year.setAttribute('datetime', thisYear)
// year.textContent = thisYear

// //1st variation
// let year: HTMLElement | null;
// year = document.getElementById("Year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute("datetime", thisYear);
//   year.textContent = thisYear;
// }

//2nd variation
const year = document.getElementById("Year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
