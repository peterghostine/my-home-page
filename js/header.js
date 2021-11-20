//Header contents
var header = document.querySelector("header");
header.innerHTML = `
<div class="logo">
  <img src="images/logo.png" alt="Ghostine Inspired Tech">

  <!-- Text-based logo. Used to build logo and then capture as image. 

    <h1 class="name-text">
      <div class="bracket">{</div>
      <div class="name">ghostine</div>
      <div class="bracket">}</div>
    </h1>

  <div class="tagline">
    <div class="letter dark-foreground">i</div>
    <div class="letter dark-foreground">n</div>
    <div class="letter dark-foreground">s</div>
    <div class="letter dark-foreground">p</div>
    <div class="letter dark-foreground">i</div>
    <div class="letter dark-foreground">r</div>
    <div class="letter dark-foreground">e</div>
    <div class="letter dark-foreground">d</div>
    <div class="letter">t</div>
    <div class="letter">e</div>
    <div class="letter">c</div>
    <div class="letter">h</div>
  </div>
  -->
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