import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../features/cartContext';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Table = styled.table`
	width: 100%;
	text-align: center;
	margin: 2rem 0;
`;

const Checkout = () => {
	const { products, total, addToCart, removeFromCart } = useCart();

	return (
		<>
			<div>
				<div>
					<h2> Products </h2>
					<hr style={{ border: '3px solid', marginTop: '-1rem' }} />
				</div>
				{total !== 0 && (
					<div>
						<Table>
							<tbody>
								{products.map((product) => (
									<tr key={product.id}>
										<td>
											<img
												src={product.url}
												alt=''
												style={{ height: 50, weight: 50 }}
											/>
										</td>
										<td style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
											{product.title}
										</td>
										<td>
											<button
												onClick={() => {
													if (product.quantity > 1) {
														addToCart({
															...product,
															quantity: product.quantity - 1,
														});
													}
												}}
											>
												-
											</button>
											<button
												onClick={() => {
													addToCart({
														...product,
														quantity: product.quantity + 1,
													});
												}}
											>
												+
											</button>
										</td>
										<td>
											{product.quantity} * {product.price}
										</td>
										<td>
											<button onClick={() => removeFromCart(product)}>
												<FontAwesomeIcon icon={faTrashCan} />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
						<div>
							<hr />
							<h3 style={{ textAlign: 'right', paddingRight: '3rem' }}>
								Total : {total} $
							</h3>
						</div>
					</div>
				)}
				{total === 0 && (
					<div>
						<h2>Your cart is empty</h2>
						<Link to='/'> Go back to products </Link>
					</div>
				)}
			</div>
		</>
	);
};

export default Checkout;
