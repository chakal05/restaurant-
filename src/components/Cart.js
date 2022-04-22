import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../features/cartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBasketShopping,
	faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Wrapper = styled.div`
	text-align: center;
`;

const Basket = styled.a`
	text-decoration: none;
	color: black;
`;

const List = styled.ul`
	background: #eaecf2;
	border-radius: 3px;
	padding-inline-start: 0;
	display: none;
	${Wrapper} :hover & {
		display: block;
	}
`;

const Container = styled.div`
	position: absolute;
	width: 400px;
	left: 55%;
	z-index: 100;
`;

const ListItem = styled.li`
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 100%;
`;

const Text = styled.p`
	margin-top: 2.5rem;
`;

const Cart = () => {
	const { products, total, removeFromCart } = useCart();

	return (
		<Wrapper>
			<div>
				<div>
					<Basket>
						<FontAwesomeIcon icon={faBasketShopping} />
						{products && `(${products.length})`}
					</Basket>
				</div>

				<Container>
					<List>
						{products.map((item) => {
							return (
								<ListItem key={item.id}>
									<img
										style={{ height: 80, width: 80 }}
										src={item.url}
										alt=''
									/>
									<Text>{item.title}</Text>
									<Text> {`${item.quantity} * ${item.price}`} </Text>
									<button
										onClick={() => removeFromCart(item)}
										style={{ height: '2rem', marginTop: '2rem' }}
									>
										<FontAwesomeIcon icon={faTrashCan} />
									</button>
								</ListItem>
							);
						})}
						{total !== 0 && (
							<>
								<hr />
								<div
									style={{
										background: 'black',
										color: 'white',
										padding: '.5rem',
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<p>{`Total price: ${total} $`}</p>

									<Link
										style={{
											textDecoration: 'none',
											color: 'white',
											padding: '1rem .5rem',
											background: 'black',
											border: '1px solid white',
											borderRadius: '3px',
										}}
										to='/checkout'
									>
										{' '}
										Proceed to Checkout{' '}
									</Link>
								</div>
							</>
						)}
						{total === 0 && (
						// If cart is empty, show default text
							<p style={{ padding: '.9rem', fontWeight:'bold' }}> Your shopping cart is empty </p>
						)}
					</List>
				</Container>
			</div>
		</Wrapper>
	);
};

export default Cart;
