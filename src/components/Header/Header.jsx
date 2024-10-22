import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { SlBasket } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

   
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                <div className="logo">
                    "<svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                         < path d="M63.0559 28.8815L54.2119 28.8947L27.8012 53.7922H10.0354V36.4593L34.2348 13.8486L17.993 13.8992L0 30.6625V64.1511H34.0283L63.0418 36.5687L63.0559 28.8815Z" fill="white"/>
                         <path d="M43.9716 13.8486L14.9581 41.4318L14.9448 49.1182L23.7879 49.1049L50.1986 24.2075H67.9644V41.5404L43.7651 64.1511L60.0069 64.1013L77.9999 47.338V13.8486H43.9716Z" fill="white"/>
                          </svg>
                    </div>  
                    <button className='menu' onClick={toggleMobileMenu}>
                        <GiHamburgerMenu />
                    </button>
                    {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <ul className="space-y-4">
                        <li><Link to="/" onClick={toggleMobileMenu}>Кошки</Link></li>
                        <li><Link to="/favorite" onClick={toggleMobileMenu}>О кошках</Link></li>
                        <li><Link to="/admin" onClick={toggleMobileMenu}>Админ</Link></li>
                        <li><Link className='basket' to={'/basket'} onClick={toggleMobileMenu}><SlBasket /></Link></li>
                    </ul>
                </div>
            )}


                    <nav>
                                         
                        <Link to="/">Кошки</Link>
                        <Link to="/favorite">О кошках</Link>
                        <Link to="/admin">Админ</Link>
                        <Link className='basket' to={'/basket'}><SlBasket /></Link>
                       
                    </nav>
    
                  
                   

                </div>
                <div className="number">
                       <a href="wa.me/996552102179"><h3 className='numberH3'>+996 552-10-21-79 <br /> Звони скорее!</h3></a> 
                    </div>
            </div>
        </div>
    );
};

export default Header;