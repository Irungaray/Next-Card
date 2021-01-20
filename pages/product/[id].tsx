// Dynamic Page
import React from 'react';
import { GetStaticProps } from 'next'

import ProductSummary from '@components/ProductSummary/ProductSummary';
import Layout from '@components/Layout/Layout'

export const getStaticPaths = async () => {
	const response = await fetch('https://next-card.vercel.app/api/card')
	const { data: productList }: TAPIResponse = await response.json()

	const paths = productList.map((cards) => ({
		params: {
			id: cards.id
		}
	}))

	return {
		paths: paths,
		// incremental static generation
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const id = params?.id as string

	const response = await fetch(
		`https://next-card.vercel.app/api/card/${id}`
	)

	const product: TProduct = await response.json()

	return {
		props: {
			product,
		}
	}
}

const ProductPage = ({ product }: { product: TProduct}) => {
	return (
		<Layout>
			{ product == null ? <h1>...</h1> : <ProductSummary product={product} /> }
		</Layout>
	);
};

export default ProductPage;