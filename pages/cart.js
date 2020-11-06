import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';

import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'
import CategoryHeader from '../components/CategoryHeader'
import CartItems from '../components/CartItems'
import CartItem from '../components/CartItem'


export default function Cart() {

    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

    // Add this item to cart
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => item.id != id);
        setCart(newCart);
    }

    return (
        <>
            <Head>
                <title key="title">Cart | Muddy Paws Adventure Gear</title>
                <meta key="theme-color" name="theme-color" content="#ffffff" />
                <meta
                    key="description"
                    name="description"
                    content="Adventure gear to help your pet climb any mountain."
                />
                <meta
                    key="keywords"
                    name="keywords"
                    content="Dogs,Cats,Paws,Adventure,Gear,Harnesses"
                />
                <meta key="author" name="author" content="Bennett Huffman" />
                <meta
                    key="viewport"
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link key="favion" rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <CategoryHeader title="cart" />
            <main className="mt-8 mb-10 grid">
                <CartItems>
                    <h2>Cart Items ({cart.length})</h2>
                    {
                        cart.map((item, index) =>
                            <CartItem 
                                key={item.id}
                                src={item.src}
                                alt={item.alt}
                                name={item.name}
                                price={item.price}
                                size={item.size}
                                color={item.color}
                                quantity={item.quantity}
                                onRemove={removeFromCart}
                            />
                        )
                    }
                </CartItems>
                <div className="cart__summary">
                    <h2>Summary</h2>
                    <div className="cart__line mb-4">
                        <span className="bold">Subtotal</span>
                        <span>${totalPrice}.00</span>
                    </div>
                    <div className="cart__line mb-4">
                        <span className="bold">Estimated Shipping</span>
                        <span>FREE</span>
                    </div>
                    <div className="cart__line mb-4">
                        <span className="bold">Estimated Tax</span>
                        <span>–</span>
                    </div>
                    
                    {/* Promo code */}
                    <div className="cart__line my-4">
                        <label>
                            <span className="bold">Promo Code?</span>
                            <input
                                className="input"
                                placeholder="Enter code here"
                                type="text"
                            />
                        </label>
                    </div>
                    <hr />
                    <div className="cart__line my-4">
                        <span className="bold">Estimated Tax</span>
                        <span>${totalPrice}.00</span>
                    </div>
                    <a className="btn btn--secondary">CHECKOUT</a>
                </div>
            </main>
            <Footer />
        </>
    )
}
