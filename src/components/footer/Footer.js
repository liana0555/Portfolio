import "./style.css";

import instagram from "./../../img/icons/instagram.svg";

import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://instagram.com/love0123005">
                <img src={instagram} alt="Link" />
              </a>
            </li>

            <li className="social__item">
              <a href="https://github.com/liana0555">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/liana-mikhailova-748b4929a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024_Portfolio_Liana</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
