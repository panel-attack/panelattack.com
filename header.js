// Shared header component for Panel Attack website
function loadHeader() {
  // A page in a subdirectory says how to get back to the site root with data-base, and which nav
  // item to light up with data-active, because its own filename is not one of them.
  const tag = document.querySelector('script[src$="header.js"]');
  const base = (tag && tag.dataset.base) || '';
  const declaredActive = tag && tag.dataset.active;

  let currentPage = declaredActive || window.location.pathname.split('/').pop();
  if (!currentPage) {
    currentPage = 'index.html';
  }

  const navItems = [
    { href: 'index.html', text: 'Home', pages: ['index.html'] },
    { href: 'about.html', text: 'About', pages: ['about.html'] },
    { href: 'communities.html', text: 'Community', pages: ['communities.html'] },
    { href: 'guide.html', text: 'Guide', pages: ['guide.html'] },
    { href: 'help.html', text: 'Help', pages: ['help.html'] },
    { href: 'credits.html', text: 'Credits', pages: ['credits.html'] }
  ];
  
  // A page outside the nav, like migration.html, lights nothing and offers every item in the dropdown
  const currentItem = navItems.find(item => item.pages.includes(currentPage));

  const navLinks = navItems.map(item => {
    const isActive = item === currentItem;
    return `<a href="${base}${item.href}"${isActive ? ' class="nav-active"' : ''}>${item.text}</a>`;
  }).join('');

  const dropdownLinks = navItems.filter(item => item !== currentItem).map(item => 
    `<a href="${base}${item.href}">${item.text}</a>`
  ).join('');

  const headerHTML = `
  <div class="header">
    <div class="topnav">
      <a class="logo" href="${base}index.html"><img height="32" src="${base}images/PanelAttackLogoWide.png" alt="Panel Attack"/></a>
      ${navLinks}
      <button class="nav-menu-icon" id="nav-menu-toggle">☰</button>
      <div class="nav-dropdown" id="nav-dropdown">
        ${dropdownLinks}
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  setTimeout(() => {
    setupMobileMenu();
    // A page that names its own nav item with data-active is not that page - it sits under it, so
    // the highlight says where you are while the link still has somewhere to go. Only a page that
    // really is the current one swallows its own click.
    if (!declaredActive) {
      setupActiveButtonClick();
    }
  }, 0);
}

function setupMobileMenu() {
  const menuToggle = document.getElementById('nav-menu-toggle');
  const dropdown = document.getElementById('nav-dropdown');

  menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle('show');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && !menuToggle.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });

  // Prevent dropdown clicks from closing the menu
  dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

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

document.addEventListener('DOMContentLoaded', loadHeader);