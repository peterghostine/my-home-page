//Header contents
let header = document.querySelector("header");
header.innerHTML = `
<div class="logo">
  <img src="images/logo-large.png" alt="Ghostine Technology Group">
</div>
<!-- Menu toggle (hidden until screen is too small to show default classic menu layout) -->
<div class="menu-toggle">
  <span class="fa fa-bars"></span>
</div>
<!-- Navigation menu -->
<nav>
  <ul role="presentation">
    <li>
      <a class="menu-wide" href="index.html">HOME</a>
    </li>
    <li>
      <a class="menu-wide" href="services.html">SERVICES</a>
    </li>
    <li>
      <a class="menu-wide" href="portfolio.html">PORTFOLIO</a>
    </li>
    <li>
      <a class="menu-wide" href="resources.html">RESOURCES</a>
    </li>
    <li>
      <a class="menu-wide" href="about.html">ABOUT</a>
    </li>
    <li>
      <a class="menu-wide" href="#reachout">CONTACT</a>
    </li>
  </ul>
</nav>`;