// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let div = document.createElement('div');
    let date = document.createElement('span');
    let h1 = document.createElement('h1');
    let temp = document.createElement('span');

    div.classList.toggle("header");
    date.classList.toggle("date");
    temp.classList.toggle('temp');

    div.append(date, h1, temp);

    date.textContent = "MARCH 28, 2019";
    h1.textContent = "Lambda Times";
    temp.textContent = "98°";

    return div;
}

let parent = document.querySelector(".header-container");
parent.appendChild(Header());
