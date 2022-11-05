import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import SearchBar from '../pages/SearchBar';

const Nav = ({ cartItems, setSearchItem, isPop}) => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [counter, setCounter] = useState(0);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    useEffect(() => {
        setCounter(cartItems.length);
    }, [cartItems])
    window.addEventListener('resize', showButton);
    const handleTop = ()=>{
        window.scrollTo(0,0);
    }
    return (
        <div>
            <nav className='navbar'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
                        <h4>OH MY STYLE!</h4>
                    </Link>
                <div className='navbar-container'>
                    
                    <Link
                                to='/products'
                                className='nav-links'
                                id='searchBarMobile'
                                onClick={closeMobileMenu}
                            >
                                <SearchBar setSearchItem={setSearchItem}/>
                                </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        
                        <li className='nav-item' onClick={handleTop}>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' onClick={handleTop}>
                            <Link
                                to='/products'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li className='nav-item' id='shopping-cart' onClick={handleTop}>
                            <Link
                                to='/shopping-cart'
                                className='nav-links shop'
                                onClick={closeMobileMenu}
                            >
                                <i className="fas fa-shopping-cart">
                                    <div className={`shopping-cart-counter ${isPop? 'pop' : ''}`}>{counter}</div>
                                </i>
                            </Link>
                        </li>

                        <li className='nav-item' onClick={handleTop}>
                            <Link
                                to='/register'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                <i className="fas fa-user"></i>
                            </Link>
                        </li>
                        
                    </ul>
                    {button}
                </div>
            </nav>
        </div>
    );
}

export default Nav;