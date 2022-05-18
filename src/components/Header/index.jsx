import { useEffect, useState } from 'react';
import { Button } from '../Button';
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
      <ul className='nav'>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
        <li><a>Blog</a></li>
        <li><a>Careers</a></li>
      </ul>
      <img className="menu" src={menu} alt="menu" onClick={() => setIsOpen(!isOpen)} />
      <Button classN={"button"} text={"Request invite"} />
    </header>
  )
}