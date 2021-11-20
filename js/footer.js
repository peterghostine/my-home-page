//Header contents
var footer = document.querySelector("footer");
footer.innerHTML = `
<!-- ABOUT SECTION -->
<div id="about" class="footer-section">
  <h2 class="footer-section-title">ABOUT</h2>
  <p>My name is Peter Ghostine. I'm an avid technologist with a broad software development and IT experience
    spanning three decades.</p>
  <div class="btn">
    <a href="about.html">About me &raquo;</a>
  </div>
  <div class="contact-info">
    <div class="phone">
      <a href="tel:7036295470" target=_blank>
        <i class="fas fa-phone" aria-hidden="true"></i>
        <span>703-629-5470</span>
      </a>
    </div>
    <div class="email">
      <a href="mailto:peterghostine@gmail.com" target=_blank>
        <i class="fas fa-envelope" aria-hidden="true"></i>
        <span>peterghostine@gmail.com</span>
      </a>
    </div>
  </div>
  <div class="socials">
    <a href="https://www.facebook.com/peterghostine/" target=_blank>
      <i class="fab fa-facebook" aria-hidden="true"></i>
    </a>
    <a href="https://twitter.com/PeterGhostine" target=_blank>
      <i class="fab fa-twitter" aria-hidden="true"></i>
    </a>
    <a href="https://www.linkedin.com/in/peterghostine/" target=_blank>
      <i class="fab fa-linkedin" aria-hidden="true"></i>
    </a>
  </div>
</div>
<!-- LINKS SECTION -->
<nav id="links" class="footer-section">
  <h2 class="footer-section-title">QUICK LINKS</h2>
  <ul role="presentation">
    <li>
      <a class="menu-wide" href="index.html">Home</a>
    </li>
    <li>
      <a href="services.html">Services</a>
    </li>
    <li>
      <a href="portfolio.html">Portfolio</a>
    </li>
    <li>
      <a class="menu-wide" href="./resources.html">Resources</a>
    </li>
    <li>
      <a href="./privacy.html">Privacy Policy</a>
    </li>
    <li>
      <a href="./terms.html">Terms and Conditions</a>
    </li>
  </ul>
</nav>
<!-- CONTACT SECTION -->
<div id="reachout" class="footer-section">
  <h2 class="footer-section-title">REACH OUT!</h2>
  <form id="contact-form" action="https://formspree.io/f/xeqvbrqv" method="POST">
    <input type="email" name="_replyto" placeholder="Your email address...">
    <textarea name="message" placeholder="Your message..."></textarea>
    <button type="submit" id="submit-btn">
      <span class="fas fa-envelope"></span>
      <span>SEND</span>
    </button>
  </form>
  <div id="status"></div>
</div>
<div class="footer-section copyright">
  <p>Copyright &copy 2021, Ghostine Technology Group, LLC. ALL RIGHTS RESERVED.</p>
</div>`;