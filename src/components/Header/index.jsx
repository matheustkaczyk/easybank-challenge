import { useEffect, useState } from 'react';
import logo from '../../images/logo.svg';
import menu from '../../images/icon-hamburger.svg';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const menu = document.querySelector('#menu');
    return () => {
      isOpen ? menu.classList.add('nav-open') : menu.classList.remove('nav-open');
    }
  }, [isOpen]);

  return (
    <header>
      <img src={logo} alt="easybank-logo" />
      <img className="menu" src={menu} alt="menu" onClick={() => setIsOpen(!isOpen)} />
    </header>
  )
}