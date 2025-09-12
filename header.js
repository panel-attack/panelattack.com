// Shared header component for Panel Attack website
function loadHeader() {
  // Get current page name with debugging
  let currentPage = window.location.pathname.split('/').pop();
  if (!currentPage || currentPage === '') {
    currentPage = 'index.html';
  }
  
  // Define navigation items
  const navItems = [
    { href: 'index.html', text: 'Home', pages: ['index.html', '', '/'] },
    { href: 'about.html', text: 'About', pages: ['about.html'] },
    { href: 'communities.html', text: 'Community', pages: ['communities.html'] },
    { href: 'guide.html', text: 'Guide', pages: ['guide.html'] },
    { href: 'help.html', text: 'Help', pages: ['help.html'] },
    { href: 'credits.html', text: 'Credits', pages: ['credits.html'] }
  ];
  
  // Find current page item
  const currentItem = navItems.find(item => item.pages.includes(currentPage)) || navItems[0];
  
  // Build navigation links
  const navLinks = navItems.map(item => {
    const isActive = item === currentItem;
    return `<a href="${item.href}"${isActive ? ' class="nav-active"' : ''}>${item.text}</a>`;
  }).join('');
  
  // Build dropdown links (excluding current page)
  const dropdownLinks = navItems.filter(item => item !== currentItem).map(item => 
    `<a href="${item.href}">${item.text}</a>`
  ).join('');
  
  console.log('Current page:', currentPage);
  console.log('Current item:', currentItem);
  console.log('Dropdown links HTML:', dropdownLinks);

  const headerHTML = `
  <div class="header">
    <div class="topnav" id="myTopnav">
      <a class="logo" href="index.html"><img height="32" src="images/PanelAttackLogoWide.png" alt="Panel Attack"/></a>
      ${navLinks}
      <button class="nav-menu-icon" id="nav-menu-toggle">☰</button>
      <div class="nav-dropdown" id="nav-dropdown">
        ${dropdownLinks}
      </div>
      <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
    </div>
  </div>`;

  // Insert header at the beginning of the body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  
  // Setup mobile menu functionality after DOM insertion
  setTimeout(() => {
    setupMobileMenu();
    setupActiveButtonClick();
  }, 0);
}

// Setup mobile menu functionality
function setupMobileMenu() {
  const menuToggle = document.getElementById('nav-menu-toggle');
  const dropdown = document.getElementById('nav-dropdown');
  
  
  if (menuToggle && dropdown) {
    // Remove any existing event listeners
    menuToggle.replaceWith(menuToggle.cloneNode(true));
    const newMenuToggle = document.getElementById('nav-menu-toggle');
    
    // Handle hamburger menu toggle
    newMenuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && !newMenuToggle.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });
    
    // Prevent dropdown clicks from closing the menu
    dropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  } else {
  }
}

// Legacy mobile menu toggle function (kept for backward compatibility)
function myFunction() {
  const menuToggle = document.getElementById('nav-menu-toggle');
  const dropdown = document.getElementById('nav-dropdown');
  
  if (menuToggle && dropdown) {
    dropdown.classList.toggle('show');
  } else {
    // Fallback to old responsive behavior
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}

// Setup active button click functionality for mobile
function setupActiveButtonClick() {
  const activeNavItem = document.querySelector('.nav-active');
  const dropdown = document.getElementById('nav-dropdown');
  
  if (activeNavItem && dropdown) {
    activeNavItem.addEventListener('click', (e) => {
      // Only trigger dropdown on mobile (when hamburger is visible)
      const hamburger = document.getElementById('nav-menu-toggle');
      if (hamburger && window.getComputedStyle(hamburger).display !== 'none') {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('show');
      } else {
        // In desktop view, prevent the active nav item from doing anything
        e.preventDefault();
      }
    });
  }
}

// Character scroll function for about page
function scrollToCharacter(characterId) {
  const element = document.getElementById(characterId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', loadHeader);