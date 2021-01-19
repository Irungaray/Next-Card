import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import ProductSummary from '@components/ProductSummary/ProductSummary';

import Layout from '@components/Layout/Layout'

const ProductPage = () => {
	const { query } = useRouter();
	const [product, setProduct] = useState<TProduct | null>(null)

	useEffect(() => {
		if (query.id) {
			window
				.fetch(`/api/card/${query.id}`)
				.then((response) => response.json())
				.then((data: TProduct) => {
					setProduct(data)
				})
		}
	}, [query.id])

	return (
		<Layout>
			{ product == null ? <h1>...</h1> : <ProductSummary product={product} /> }
		</Layout>
	);
};

export default ProductPage;