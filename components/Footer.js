import React from 'react';
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer className="bg-off-black py-7">
                <div className="grid">
                    <div className="span-12 grid">
                        <nav className="span-3">
                            <p className="footer__title">Shop</p>
                            <ul className="footer__nav">
                                <li className="footer__item"><Link href="cats"><a className="nav__item">Cats</a></Link></li>
                                <li className="footer__item"><Link href="dogs"><a className="nav__item">Dogs</a></Link></li>
                                <li className="footer__item"><Link href="accessories"><a className="nav__item">Accessories</a></Link></li>
                            </ul>
                        </nav>
                        <nav className="span-3">
                            <p className="footer__title">Information</p>
                            <ul className="footer__nav">
                                <li className="footer__item"><Link href="#"><a className="nav__item">Contact</a></Link></li>
                                <li className="footer__item"><Link href="#"><a className="nav__item">Bulk Order</a></Link></li>
                            </ul>
                        </nav>
                        <nav className="span-3">
                            <p className="footer__title">Terms</p>
                            <ul className="footer__nav">
                                <li className="footer__item"><Link href="#"><a className="nav__item" href="#">Privacy Policy</a></Link></li>
                                <li className="footer__item"><Link href="#"><a className="nav__item" href="#">Terms of Service</a></Link></li>
                            </ul>
                        </nav>
                        <nav className="span-3">
                            <p className="footer__title">Contact</p>
                            <a className="nav__item" href="https://www.google.com/maps/place/University+Center,+5032+Forbes+Ave,+Pittsburgh,+PA+15213/" target="_blank">
                                <p className="footer__item">5032 Forbes Ave.<br />Pittsburgh, PA 15213</p>
                            </a>
                        </nav>
                    </div>
                    
                    <div className="span-12 text-center">
                        <img className="footer__logo mt-7 mb-4" src="images/logo.svg" alt="paw logo" />
                        <small className="display-block c-white">&copy; Muddy Paws Adventure Gear</small>
                    </div>
                </div>
            </footer>
        </>
    )
}