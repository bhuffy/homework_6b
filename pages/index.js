import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
      <>
        <Head>
            <title key="title">Home | Muddy Paws Adventure Gear</title>
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
            <link key="favicon" rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </Head>
        <Header />
        {/* hero */}
        <section className="hero">
            <div className="hero__content">
                <h1 className="c-white mb-0">CAT HARNESS</h1>
                <p className="c-white mt-3">Adventure gear to help your pet climb any mountain.</p>
                <Link href="/cats">
                    <a className="btn btn--primary mt-4">Shop Cat Harness</a>
                </Link>
            </div>
        </section>
        {/* end hero */}

        {/* blurb */}
        <section className="span-12 mt-8">
            <h2 className="text-center">The best adventure gear for pets. Ever.</h2>
            {/* end blurb */}
        </section>

        {/* cats */}
        <section className="home-grid home-section">
            <div className="home-section__blurb home-section__blurb--1">
                <div>
                    <h3>Cats</h3>
                    <p>A hiker pal for your hiker pal. A suit that fits any cat.</p>
                    <Link href="/cats">
                        <a className="btn btn--secondary" href="/cats">Shop Cats</a>
                    </Link>
                </div>
            </div>
            <img className="home-section__img home-section__img--1" src="images/home-1.png" alt="cat in nature" />
        </section>
        {/* end cats */}

        {/* dogs */}
        <section className="home-grid home-section">
            <div className="home-section__blurb home-section__blurb--2">
                <div>
                    <h3>Dogs</h3>
                    <p>The right fit for any scenario. Check out our options.</p>
                    <Link href="/dogs">
                        <a className="btn btn--secondary" href="/dogs">Shop Dogs</a>
                    </Link>
                </div>
            </div>
            <img className="home-section__img home-section__img--2" src="images/home-2.png" alt="dog in nature" />
        </section>
        {/* end dogs */}

        {/* accessories */}
        <section className="home-grid home-section">
            <div className="home-section__blurb home-section__blurb--3">
                <div>
                    <h3>Accessories</h3>
                    <p>Storage units, packs, leashes, and more.</p>
                    <Link href="/accessories">
                        <a className="btn btn--secondary" href="/accessories">Shop Accessories</a>
                    </Link>
                </div>
            </div>
            <img className="home-section__img home-section__img--3" src="images/home-3.png" alt="pets wearing accessories" />
        </section>
        {/* end accessories */}
        <Footer />
    </>
  )
}
