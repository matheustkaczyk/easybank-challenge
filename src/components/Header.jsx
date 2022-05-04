import logo from '../images/logo.svg';
import menu from '../images/icon-hamburguer.svg';

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="easybank-logo" />
      <img src={menu} alt="menu" />
    </header>
  )
}