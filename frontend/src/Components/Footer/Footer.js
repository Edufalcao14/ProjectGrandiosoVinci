import GrandiosoVinciText from '../../img/Footer/GrandiosoVinciWhite.svg';
import ShopInFooter from '../../img/Footer/shopInFooter.svg'
import '../../stylesheets/_footer.scss';
import Navigate from '../Router/Navigate';

const Footer = () => {
  const footerWrapper = document.querySelector('#footerWrapper');
  const footer = ` 
   <footer class="footer-container">
      <div class="footer-content">
        <img src="${ShopInFooter}" alt="Grandioso Vinci" class="left-text">
        <img src="${GrandiosoVinciText}" alt="Grandioso Vinci" class="centered-image">
        <div class="right-text">
          <a id="legalPrivacyLink" class="legal-privacy" data-uri="/privacy">Legal & Privacy</a>
          <span class="cookies">Cookies</span>
        </div>
      </div>
   </footer>`;

   footerWrapper.innerHTML = footer;
};

document.addEventListener("DOMContentLoaded", () => {
  const legalPrivacyLink = document.getElementById("legalPrivacyLink");
  legalPrivacyLink.addEventListener("click", (e) => {
    e.preventDefault(); // Empêche le comportement de lien par défaut
    const uri = legalPrivacyLink.getAttribute("data-uri");
    Navigate(uri)
  });
});

export default Footer;
