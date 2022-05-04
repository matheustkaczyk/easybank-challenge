import logo from '../../images/logo.svg';
import menu from '../../images/icon-hamburger.svg';

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="easybank-logo" />
      <img className="menu" src={menu} alt="menu" />
    </header>
  )
}