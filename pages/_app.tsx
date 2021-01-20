import { AppProps } from 'next/app';

import 'semantic-ui-css/semantic.min.css'
import '../global.css'

import CartProvider from '@store/Cart'

// export function reportWebVitals(metric: any) {
// 	analytics - calibre
// 	console.log(metric)
// 	serverAnalytics.log(metric)
// }

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