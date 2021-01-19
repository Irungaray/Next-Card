import React, { useEffect, useState} from 'react';

import ProductList from '@components/ProductList/ProductList'

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
		<div>
			<div>NEXT JS VIDEOCARDS</div>

			<ProductList products={productList} />
		</div>
	);
};

export default HomePage;
