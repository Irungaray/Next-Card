import React, { useEffect, useState} from 'react';

import ProductList from '@components/ProductList/ProductList'
import Layout from '@components/Layout/Layout';

const HomePage = () => {
	const [productList, setProductList] = useState<TProduct[]>([]);

	useEffect(() => {
		window
			.fetch('/api/card')
			.then((response) => response.json())
			.then(({ data, length}) => {
				setProductList(data);
			});
	}, []);

	console.log(productList);

	return (
		<Layout>
			<div>WHICH ONE IS GONNA BE YOUR <strong>NEXT VIDEOCARD?</strong></div>

			<ProductList products={productList} />
		</Layout>
	);
};

export default HomePage;
