import React from 'react';
import { useState } from 'react';
import useCart from '../features/cartContext';
import { Link } from 'react-router-dom';

function ProductItem(props) {
	const [quantity, setQuantity] = useState(1);
	const { products, addToCart } = useCart();

	const handeClick = () => {
		let item = products.find((i) => i.id === props.product.id);

		if (item === undefined) {
			// Product not in the store
			addToCart({
				...props.product,
				quantity,
			});
		} else {
			// Product in store. We modify the quantity
			addToCart({
				...props.product,
				quantity: item.quantity + quantity,
			});
		}
	};
	return (
		<div
			key={props.product.id}
			style={{
				border: '1px solid gray',
				borderRadius: '5px',
				textAlign: 'center',
				padding: '.5rem',
				margin: '.5rem 0',
			}}
		>
			<img src={props.product.url} style={{ height: 150, width: 200 }} alt='' />
			<p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
				{' '}
				{props.product.title}{' '}
			</p>
			<p style={{ fontWeight: 'bold' }}> {props.product.price} $ </p>

			<input
				style={{ width: '80%', padding: '.4rem', margin: '.5rem 0' }}
				defaultValue={1}
				type='text'
				onChange={(e) => {
					setQuantity(Number(e.target.value));
				}}
			/>

			<button style={{ padding: '.4rem' }} onClick={handeClick}>
				{' '}
				Add to cart{' '}
			</button>

			<p> {props.product.storage > 0 && 'In stock'} </p>

			<Link style={{ margin: '1rem 0' }} to={`products/${props.product.id}`}>
				Read more
			</Link>
		</div>
	);
}

export default ProductItem;
