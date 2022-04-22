import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useCart from '../features/cartContext';

function Product() {
	let [car, setCar] = useState({});

	// Get passed parameters
	let params = useParams();

	// Get page name
	const location = useLocation();
	const page = location.pathname;

	const [quantity, setQuantity] = useState(1);
	const { products, addToCart } = useCart();


	const handeClick = () => {
		let item = products.find((i) => i.id === car.id);


		if (item === undefined) {

		// Product not in the store
			addToCart({
				...car,
				quantity,
			});
		} else {

		// Product in store. We modify the quantity
			addToCart({
				...car,
				quantity: item.quantity + quantity,
			});
		}
	};

	// Fetch car using passed id parameter

	let getCar = async () => {
		try {
			let car = await fetch(
				`https://codexplained.se/cars.php?id=${params.productId}`
			);

			let res = await car.json();
			setCar(res);
		} catch (error) {
			console.log(error);
		}
	};

	// Fetch car before loading the page
	useEffect(() => {
		getCar();
	}, []);

	return (
		<div style={{ padding: '1rem 0' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					border: '1px solid',
					borderRadius: '10px',
					padding: '0 1rem',
				}}
			>
				<p> {page} </p>
				<Link to='/' style={{ marginTop: '1rem' }}>
					{' '}
					Back{' '}
				</Link>
			</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					padding: '1rem',
					marginTop: '5rem',
				}}
			>
				<div>
					<motion.img
						animate={{ x: 100 }}
						transition={{
							delay: 1,
							x: { type: 'spring', stiffness: 100 },
							default: { duration: 2 },
						}}
						src={car.url}
						style={{ height: 400, width: 400 }}
						alt=''
					/>
				</div>
				<motion.div
					initial={{ x: 100 }}
					animate={{ x: 0 }}
					transition={{
						delay: 1,
						x: { type: 'spring', stiffness: 100 },
						default: { duration: 2 },
					}}
				>
					<p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}> {car.title}</p>
					<p style={{ fontWeight: 'bold' }}> {car.price} $ </p>
					<div>
						<input
							style={{ width: '80%', padding: '.4rem', margin: '.5rem 0' }}
							type='text'
							defaultValue={1}
							onChange={(e) => {
								setQuantity(Number(e.target.value));
							}}
						/>
					</div>
					<button style={{ padding: '.4rem' }} onClick={handeClick}>
						{' '}
						Add to cart{' '}
					</button>
					<p> In stock : {car.storage} pc </p>
					<p> {car.description} </p>
				</motion.div>
			</div>
		</div>
	);
}

export default Product;
