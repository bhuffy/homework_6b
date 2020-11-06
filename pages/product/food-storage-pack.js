import React, { useState, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/Header'
import ProductHeader from '../../components/ProductHeader'
import ProductCarousel from '../../components/ProductCarousel'
import Checkmark from '../../components/Checkmark'

import {CartContext} from '../../context/CartContext'

export default function FoodStoragePack() {
    const SIZES = ['tiny', 'small', 'medium', 'large'];
    const ITEM = {
        id: 1,
        src: 'images/accessory-1.png',
        alt: "food storage pack",
        name: "Food Storage Pack",
        price: 25,
        slug: "/product/food-storage-pack",
        colors: ['strawberry', 'blackberry', 'crazyberry', 'fire-orange'],
        sizes: ['tiny', 'small', 'medium', 'large'],
    };
    
    // define product page state
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState(ITEM.colors[0]);
    const [size, setSize] = useState(ITEM.sizes[0]);

    // get cart context
    const [cart, setCart] = useContext(CartContext);
    
    // list color options
    const colorOptions = ITEM.colors.map((c) =>
        <button key={c} onClick={() => setColor(c)} className={`color-box color-box--${c}`}>
            {(color == c) && <Checkmark />}
        </button>
    );

    // list size options
    const sizeOptions = SIZES.map((s) =>
        <button key={s} onClick={() => setSize(s)} href="#" className={(size == s) ? "mr-2 product-select product-select--active" : "mr-2 product-select"}>{s}</button>
    );

    // handle quantity input change
    const handleQuantityInput = (e) => {
        if (e.target.value > 0) {
            setQuantity(e.target.value);
        }
    }

    // Add this item to cart
    const addToCart = () => {
        const cartItem = {
            ...ITEM,
            quantity, 
            color,
            size,
        };
        setCart([...cart, cartItem]);
        setQuantity(1);
    }

  return (
    <>
      <Head>
        <title key="title">Food Storage Pack | Muddy Paws Adventure Gear</title>
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
    <section className="product">
        <div className="grid">
            <ProductHeader title={ITEM.name} />
            <ProductCarousel
                images={[ITEM.src]}
                size={size}
                color={color}
            />
            
            <div className="span-4 flex-justify-start">
                <div>
                    { sizeOptions }
                    <Link href="#">
                        <a className=" c-neutral-600">
                            <p className="mt-2">What's my pet size?</p>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="span-4 flex-justify-center flex-column-center">
                <div className="flex-horizontal-center mb-4">
                    <button className="quantity-btn" onClick={() => {if (quantity + 1 > 0) {setQuantity(quantity + 1)}}} >+</button>
                    <input className="quantity-input mx-2" type="number" min="1" value={quantity} onChange={handleQuantityInput} />
                    <button className="quantity-btn" onClick={() => {if (quantity - 1 > 0) {setQuantity(quantity - 1)}}} >-</button>
                </div>
                <button onClick={addToCart} className="btn btn--primary">Add To Cart +</button>
            </div>

            <div className="span-4 flex-justify-end">
                { colorOptions }
            </div>
        </div>
    </section>
    </>
  )
}