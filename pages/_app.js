import '../styles/01-reset.css'
import '../styles/02-variables.css'
import '../styles/03-typography.css'
import '../styles/04-utilities.css'
import '../styles/05-styles.css'

import CartProvider from '../context/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp
