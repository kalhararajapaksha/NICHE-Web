/*import * as React from 'react'
//import { Link } from 'gatsby'
import { Link } from 'react-scroll';
import {container,navLinks, navLinkItem, navLinkText} from '../layout.module.css'



const Layout = () => {
    return (
        <section className={container}> 
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="hero" smooth duration={100} className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="about" smooth duration={100} className={navLinkText}>About</Link></li>
                    <li className={navLinkItem}><Link to="contact" smooth duration={100} className={navLinkText}>Contact</Link></li>
                    <li className={navLinkItem}><Link to="projects" smooth duration={100} className={navLinkText}>Project</Link></li>
                </ul>
            </nav>
        </section>

    )
}

export default Layout



import * as React from 'react'
import { Link } from 'gatsby'
import Header from './Header/Header';
import {container, heading, navLinks, navLinkItem, navLinkText} from './layout.module.css'


const Layout = ({ pageTitle, pageHeading ,children}) => {
    return (
        <main className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                    <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageHeading}</h1>
            {children}
        </main>

    )
}

export default Layout






*/