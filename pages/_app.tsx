import { AppProps } from 'next/app';

import CartProvider from '@store/Cart'

import 'semantic-ui-css/semantic.min.css'
import '../global.css'

function MyApp({ Component, pageProps }: AppProps) {
	// Providers - Context/Providers, Theme, data
	// Layout
	// aditional props
	return (
		<CartProvider>
			<Component {...pageProps} title={'Next Card'} />
		</CartProvider>
	);
}

export default MyApp;