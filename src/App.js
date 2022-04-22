import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Products from './pages/Products';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import { CartProvider } from './features/cartContext';
import Header from './components/Header';
import Footer from './components/Footer'

const Container = styled.div`
max-width: 1280px;
margin: 0 auto;
`;


function App() {
	return (
		<CartProvider>
			<Container className='App'>

				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/' element={<Products />} />
						<Route path='products/:productId' element={<Product />} />

						<Route path='checkout' element={<Checkout />} />
					</Routes>
					<Footer/>
				</BrowserRouter>
			</Container>
		</CartProvider>
	);
}

export default App;
