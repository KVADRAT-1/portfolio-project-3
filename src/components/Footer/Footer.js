import './Footer.css'
import icon from '../../images/Footer/logo.svg'
import facebook from '../../images/Footer/Footer__socialNetworks/facebook.svg'
import Twitter from '../../images/Footer/Footer__socialNetworks/Twitter.svg'
import pinterest from '../../images/Footer/Footer__socialNetworks/pinterest.svg'
import instagram from '../../images/Footer/Footer__socialNetworks/instagram.svg'

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__box">
        <img className="Footer__logo" src={icon} alt="icon" />
        <ul className="Footer__list">
          <li className="Footer__item title">Features</li>
          <li className="Footer__item">
            <a
              className="Footer__link"
              href="https://www.google.com/"
              target="blank"
            >
              Link Shortening
            </a>
          </li>
          <li className="Footer__item">
            <a
              className="Footer__link"
              href="https://www.google.com/"
              target="blank"
            >
              Branded Links
            </a>
          </li>
          <li className="Footer__item">
            <a
              className="Footer__link"
              href="https://www.google.com/"
              target="blank"
            >
              Analytics
            </a>
          </li>
        </ul>
        <ul className="Footer__list">
          <li className="Footer__item title">Resources</li>
          <li className="Footer__item">
            <a
              className="Footer__link"
              href="https://www.google.com/"
              target="blank"
            >
              Blog
            </a>
          </li>
          <li className="Footer__item">
            <a
              className="Footer__link"
              href="https://www.google.com/"
              target="blank"
            >
              Developers
            </a>
          </li>
          <li className="Footer__item">
            <a
              className="Footer__link"
              href="https://www.google.com/"
              target="blank"
            >
              Support
            </a>
          </li>
        </ul>
        <ul className="Footer__list">
          <li className="Footer__item title">Company</li>
          <li className="Footer__item">
            <a
              className="Footer__link"
              href="https://www.google.com/"
              target="blank"
            >
              About
            </a>
          </li>
          <li className="Footer__item">
            <a
              className="Footer__link"
              href="https://www.google.com/"
              target="blank"
            >
              Our Team
            </a>
          </li>
          <li className="Footer__item">
            <a
              className="Footer__link"
              href="https://www.google.com/"
              target="blank"
            >
              Careers
            </a>
          </li>
          <li className="Footer__item">
            <a
              className="Footer__link"
              href="https://www.google.com/"
              target="blank"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="Footer__socialNetworks">
          <img
            className="Footer__socialNetwork"
            src={facebook}
            alt="facebook"
          />
          <img className="Footer__socialNetwork" src={Twitter} alt="Twitter" />
          <img
            className="Footer__socialNetwork"
            src={pinterest}
            alt="pinterest"
          />
          <img
            className="Footer__socialNetwork"
            src={instagram}
            alt="instagram"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
