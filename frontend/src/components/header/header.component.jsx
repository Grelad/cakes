import './header.styles.scss'

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import React from 'react';

const Header = () => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/gallery'>
                ГАЛЕРЕЯ
            </Link>
            <Link className='option' to='/contacts'>
                КОНТАКТЫ
            </Link>
        </div>
    </div>
)

export default Header;