import React from 'react';
import { createContext, useReducer, useContext } from 'react';
import cartReducer, { initialState } from './cartReducer';

// Create context
const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
	// Initiate the store and the actions
	const [state, dispatch] = useReducer(cartReducer, initialState);

	const addToCart = (product) => {
		// Check if product already in the store
		const currentProduct = state.products.find(
			(item) => item.id === product.id
		);

		// Create empty array
		let updatedCart = [];

		if (currentProduct === undefined) {
		// Copy the store and add the new product
			updatedCart = [...state.products, product];
		} else {
		// If item in store, modify the quantity of the product
			currentProduct.quantity = product.quantity;
			updatedCart = [...state.products];
		}

		// Update the total
		updatePrice(updatedCart);

		// Dispatch action to add product to the store
		dispatch({
			type: 'ADD_TO_CART',
			payload: {
				products: updatedCart,
			},
		});
	};


	// Remove product from the store
	const removeFromCart = (product) => {
		const updatedCart = state.products.filter(
			(currentProduct) => currentProduct.id !== product.id
		);

	// Update total
		updatePrice(updatedCart);

	// Dispatch action to remove product from the store
		dispatch({
			type: 'REMOVE_FROM_CART',
			payload: {
				products: updatedCart,
			},
		});
	};

	// Calculate total
	const updatePrice = (products) => {
		let total = 0;
		products.forEach((product) => (total += product.price * product.quantity));

		// Dispatch action to modify the total in the store
		dispatch({
			type: 'UPDATE_PRICE',
			payload: {
				total,
			},
		});
	};

	// Make the store available
	const value = {
		total: state.total,
		products: state.products,
		addToCart,
		removeFromCart,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Use the context
const useCart = () => {
	const context = useContext(CartContext);

	if (context === undefined) {
		throw new Error('useCart must be used within CartContext');
	}

	return context;
};

export default useCart;
