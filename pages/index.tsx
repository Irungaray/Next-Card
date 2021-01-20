import React, { useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import ProductList from '@components/ProductList/ProductList'
import Layout from '@components/Layout/Layout';

export const getServerSideProps = async () => {
	const response = await fetch('https://next-card.vercel.app/api/card')
	const { data: productList }: TAPIResponse = await response.json()

	return {
		props: {
			productList,
		}
	}
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
	console.log(productList)

	return (
		<Layout>
			<div>WHICH ONE IS GONNA BE YOUR <strong>NEXT VIDEOCARD?</strong></div>

			<ProductList products={productList} />
		</Layout>
	);
};

export default HomePage;
