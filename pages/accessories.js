import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import CategoryHeader from '../components/CategoryHeader'
import CategorySidebar from '../components/CategorySidebar'
import CategoryProducts from '../components/CategoryProducts'
import CategoryProduct from '../components/CategoryProduct'

export default function Accessories() {
    const products = [
        {
            id: 1,
            src: 'images/accessory-1.png',
            alt: "water storage pack",
            name: "Water Storage Pack",
            price: 125,
            slug: "/product/water-storage-pack",
            colors: ['strawberry', 'blackberry', 'crazyberry', 'fire-orange', 'lightberry', 'teal'],
        },
        {
            id: 2,
            src: 'images/accessory-2.png',
            alt: "food storage pack",
            name: "Food Storage Pack",
            price: 125,
            slug: "/product/food-storage-pack",
            colors: ['strawberry', 'blackberry', 'crazyberry', 'fire-orange', 'lightberry', 'teal'],
        }
    ];

    return (
        <>
        <Head>
            <title key="title">Accessories | Muddy Paws Adventure Gear</title>
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
        <CategoryHeader title="accessories" />
        <main className="category grid">
            <Breadcrumb>Home / Accessories</Breadcrumb>
            <CategorySidebar />
            <CategoryProducts>
            {
                products.map((product) =>
                    <CategoryProduct
                        key={product.id}
                        src={product.src}
                        alt={product.alt}
                        name={product.name}
                        price={product.price}
                        slug={product.slug}
                        colors={product.colors}
                    />
                )
            }
            </CategoryProducts>
        </main>
        <Footer />
        </>
    )
}