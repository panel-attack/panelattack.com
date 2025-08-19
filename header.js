// Shared header component for Panel Attack website
function loadHeader() {
  const headerHTML = `
  <div class="header">
    <div class="topnav" id="myTopnav">
      <a class="logo" href="index.html"><img height="32" src="images/PanelAttackLogoWide.png" alt="Panel Attack"/></a>
      <a href="about.html">About</a>
      <a href="communities.html">Community</a>
      <a href="help.html">Help</a>
      <a href="credits.html">Credits</a>
      <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
    </div>
  </div>`;

  // Insert header at the beginning of the body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

// Mobile menu toggle function
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
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