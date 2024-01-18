import React, { useState, useEffect } from 'react';
import './CartModal.css';
import { FaShoppingCart } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: "Acme Circles T-Shirt",
    price: "$20.00 USD",
    imageUrl: "/images/t-shirt-1.avif",
    link: "https://demo.vercel.store/product/acme-geometric-circles-tshirt"
  },
  {
    id: 2,
    name: "Acme Drawstring Bag",
    price: "$12.00 USD",
    imageUrl: "/images/bag-1-dark.avif",
    link: "https://demo.vercel.store/product/acme-drawstring-bag"
  },
  {
    id: 3,
    name: "Acme Cup",
    price: "$15.00 USD",
    imageUrl: "/images/cup-black.avif",
    link: "https://demo.vercel.store/product/acme-cup"
  },
];

const CartModal = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  const findCartItem = (productId) => {
    return cartItems.find((item) => item.id === productId);
  };

  const addToCart = (productId) => {
    const existingCartItem = findCartItem(productId);
    if (existingCartItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      const productToAdd = products.find((product) => product.id === productId);
      if (productToAdd) {
        setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
      }
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
  };

  const taxes = 0.00;
  const shipping = "Calculated at checkout";

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('cart-modal-open');
    } else {
      document.body.classList.remove('cart-modal-open');
    }
  }, [isOpen]);

  const handleOutsideClick = (event) => {
    if (isOpen && !event.target.closest('.cart-modal')) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className={`cart-modal ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>
          <FaShoppingCart className="cart-icon" /> My Cart
        </h2>
        <button className="close-button" onClick={onClose}>
          <img src="/images/x-icon.png" alt="Close" />
        </button>
      </div>
      <div className="cart-items">
        {products.map((product) => {
          const cartItem = findCartItem(product.id);
          return (
            <div key={product.id} className="cart-item">
              <div className="item-info">
                <div className="item-image">
                  <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="item-details">
                  <p className="item-name">{product.name}</p>
                  <p className="item-price">{product.price}</p>
                  <div className="item-quantity">
                    <button onClick={() => removeFromCart(product.id)}>-</button>
                    <span>{cartItem ? cartItem.quantity : 0}</span>
                    <button onClick={() => addToCart(product.id)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-summary">
        <div className="summary-item">
          <span>Taxes</span>
          <span>${taxes.toFixed(2)} USD</span>
        </div>
        <div className="summary-item">
          <span>Shipping</span>
          <span>{shipping}</span>
        </div>
        <div className="summary-total">
          <span>Total</span>
          <span>${calculateTotal()} USD</span>
        </div>
      </div>
      <button className="checkout-button" onClick={() => {}}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartModal;
