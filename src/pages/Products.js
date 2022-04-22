import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductItem from '../components/ProductItem';

function Products() {
	let [cars, setCars] = useState([]);

	// Fetch data from Api
	let getCars = async () => {
		try {
			let cars = await fetch('https://codexplained.se/cars.php');
			let res = await cars.json();
			setCars(res);
		} catch (error) {
			throw new Error(error);
		}
	};

	// Fetch data before loading the page
	useEffect(() => {
		getCars();
	}, []);

	return (
		<motion.div
		initial={{x: 500}}
			animate={{ x: 0}}
			transition={{
				delay: 2,
				x: { type: 'spring', stiffness: 100 },
				default: { duration: 3 },
			}}
		>
			<ul
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-evenly',
				}}
			>
				{cars.map((item) => {
					return <ProductItem key={item.id} product={item} />;
				})}
			</ul>
		</motion.div>
	);
}

export default Products;
