// import './menu.css'

document.addEventListener("DOMContentLoaded", main);

function main() {
  document.addEventListener("click", handleBgClick);

  const menuContainer = document.querySelector("#menu-container");
  const isMenuClosedAttrName = 'data-is-closed';
  
  const menuBtn = document.querySelector("#menu-btn");
  const menu = document.querySelector("#menu");

  menuBtn.addEventListener("click", toggleMenu);
  menuBtn.addEventListener("click", preventDefault);

  menu.addEventListener("click", preventDefault);

  function preventDefault(e) {
    e.preventDefault();
  }

  function toggleMenu(e) {
    const isMenuClosed = 
     menuContainer.getAttribute(isMenuClosedAttrName);
    if (isMenuClosed === 'true') {
      openMenu();
    } else {
      closeMenu();
    }
  }

  function openMenu() {
    menu.scrollTop = 0;
    menuContainer.setAttribute(isMenuClosedAttrName, 'false');    
  }

  function closeMenu() {
    menuContainer.setAttribute(isMenuClosedAttrName, 'true');    
  }

//   Click on background closes menu.
  function handleBgClick(e) {
    const wentEventNotThroughMenu = !e.path.includes(menu);
    const wentEventNotThroughMenuBtn = !e.path.includes(menuBtn);
    if (wentEventNotThroughMenu && wentEventNotThroughMenuBtn) {
      closeMenu();
    }
  }
}
