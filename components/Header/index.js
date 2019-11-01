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

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());

function Header() {

//define new elements
const pageHeader = document.createElement('div');
const headerDate = document.createElement('span');
const headerTitle = document.createElement('h1');
const headerTemp = document.createElement('span');

//setup structure of elements
pageHeader.appendChild(headerDate);
pageHeader.appendChild(headerTitle);
pageHeader.appendChild(headerTemp);

//set class names
pageHeader.classList.add('header');
headerDate.classList.add('date');
headerTemp.classList.add('temp');

//set text content
headerDate.textContent='March 28, 2019';
headerTitle.textContent='Lambda Times';
headerTemp.textContent='98°'

return pageHeader;
}