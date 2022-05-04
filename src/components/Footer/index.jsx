import logo from '../../images/logo.svg';
import facebook from '../../images/icon-facebook.svg';
import youtube from '../../images/icon-youtube.svg';
import instagram from '../../images/icon-instagram.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import { Button } from '../Button';

export const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="easybank logo"/>
      <div>
        <img src={facebook} alt="facebook icon" />
        <img src={youtube} alt="youtube icon" />
        <img src={twitter} alt="twitter icon" />
        <img src={instagram} alt="instagram icon" />
        <img src={pinterest} alt="pinterest icon" />
      </div>
      <ul>
        <li><a>About Us</a></li>
        <li><a>Contact</a></li>
        <li><a>Blog</a></li>
        <li><a>Careers</a></li>
        <li><a>Support</a></li>
        <li><a>Privacy Policy</a></li>
      </ul>
      <Button text='Request invite' type="button" />
    </footer>
  )
}