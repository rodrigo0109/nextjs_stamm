import React from 'react'
import ActiveLink from './ActiveLink';

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
];

const Navbar = () => {
  return (
    <nav>
        {
            menuItems.map( l => (
                <ActiveLink key={l.href} href={l.href} text={l.text} />
            ))
        }
    </nav>
  )
}

export default Navbar