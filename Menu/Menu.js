/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a ***function component*** (vs class component) that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const header = document.querySelector('.header');

header.appendChild(createMenu(menuItems));

function createMenu(obj) {

  const menu = document.createElement('div');
  const menuList = document.createElement('ul');

  menu.appendChild(menuList);
  menu.classList.add('menu');
  menuItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    menuList.appendChild(li);
  })

  const menuBtn = document.querySelector('.menu-button');
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open')
  })

  return menu;

}

// Blevins Solution Code

/* This is the data we will be using, study it but don't change anything, yet. */

/*
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

// Step 1: Write a function that will create a menu component as seen below:

// <div class="menu">
//   <ul>
//     {each menu item as a list item}
//   </ul>
// </div>

// Pass the function an array as it's only argument.
function menuComponent(menuItems, menuButton) {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const ul = document.createElement('ul');

  menu.appendChild(ul);
  // Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>
  menuItems.forEach(menuItem => {
    const li = document.createElement('li');
    li.textContent = menuItem;
    ul.appendChild(li);
  });

  // Step 4: add a click handler to the menu button, when clicked it should
  // toggle the class 'menu--open' on the menu itself
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  });

  // Step 5: return the menu component.
  return menu;
}

/* 
  Step 6: add the menu component to the DOM.
*/

const button = document.querySelector('.menu-button');
const menu = menuComponent(menuItems, button);
const header = document.querySelector('.header');
header.appendChild(menu);
*/