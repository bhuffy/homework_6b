import React, { useContext } from 'react'
import Link from 'next/link'

import { CartContext } from '../context/CartContext'

export default function Header() {
    const [cart, setCart] = useContext(CartContext);
    return (
        <>
            <div className="grid bg-white">
                <header className="header">
                    <Link href="/">
                        <a>
                            <img className="logo" src="/images/logo-horizontal.svg" alt="logo" />
                        </a>
                    </Link>
                    <nav className="nav">
                        <Link href="/cats"><a className="nav__item">Cats</a></Link>
                        <Link href="/dogs"><a className="nav__item">Dogs</a></Link>
                        <Link href="/accessories"><a className="nav__item">Accessories</a></Link>
                        <Link href="/cart">
                            <a className="nav__item nav__cart">
                                <img  src="/images/cart.svg" alt="shopping cart" />
                                <span className="nav__count">{cart.reduce(function(prev, curr) { return prev + curr.quantity;}, 0)}</span>
                            </a>    
                        </Link>
                    </nav>
                </header>
            </div>
        </>
    )
}