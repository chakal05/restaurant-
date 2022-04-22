import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Cart from '../components/Cart';
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 1rem;
`;

const Products = styled.div`
	text-align: center;
`;

function Header() {
	return (
		<div>
			<Wrapper>
				<Products>
					<Link
						style={{
							textDecoration: 'none',
							color: 'black',
						}}
						to={'/'}
					>
						{' '}
						Products{' '}
					</Link>
				</Products>
				<div>
					<Cart />
				</div>
			</Wrapper>
			<hr style={{ marginTop: '-.2rem' }} />
		</div>
	);
}

export default Header;
