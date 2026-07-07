import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { cartService } from '../services/cartService';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load cart on startup or user change
  useEffect(() => {
    const loadCart = async () => {
      setLoading(true);
      if (user) {
        try {
          const dbCart = await cartService.getCart();
          setCartItems(dbCart.items || []);
          
          // Merge guest cart if any exists
          const guestCart = localStorage.getItem('guestCart');
          if (guestCart) {
            try {
              const parsedGuest = JSON.parse(guestCart);
              if (parsedGuest.length > 0) {
                const merged = await cartService.mergeCart(
                  parsedGuest.map(item => ({
                    productId: item.productId._id || item.productId,
                    quantity: item.quantity,
                    size: item.size,
                    color: item.color
                  }))
                );
                setCartItems(merged.items || []);
              }
            } catch (err) {
              console.error('Error merging guest cart on login:', err);
            }
            localStorage.removeItem('guestCart');
          }
        } catch (error) {
          console.error('Error loading user cart:', error);
        }
      } else {
        // Load from localStorage for guests
        const local = localStorage.getItem('guestCart');
        if (local) {
          try {
            setCartItems(JSON.parse(local));
          } catch (e) {
            setCartItems([]);
          }
        } else {
          setCartItems([]);
        }
      }
      setLoading(false);
    };

    loadCart();
  }, [user]);

  const addToCart = async (product, quantity, size, color = '') => {
    // Validate size stock
    const sizeOpt = product.sizes.find(s => s.size === size);
    if (!sizeOpt) {
      throw new Error(`Size ${size} is not available for this product`);
    }

    if (user) {
      const updated = await cartService.addToCart({
        productId: product._id,
        quantity,
        size,
        color
      });
      setCartItems(updated.items || []);
    } else {
      // Handle guest cart in-memory & localStorage
      const updatedItems = [...cartItems];
      const existingIdx = updatedItems.findIndex(
        item => (item.productId._id === product._id || item.productId === product._id) && item.size === size
      );

      const currentQty = existingIdx > -1 ? updatedItems[existingIdx].quantity : 0;
      const newQty = currentQty + quantity;

      if (sizeOpt.stock < newQty) {
        throw new Error(`Insufficient stock. Only ${sizeOpt.stock} items available in size ${size}`);
      }

      if (existingIdx > -1) {
        updatedItems[existingIdx].quantity = newQty;
      } else {
        updatedItems.push({
          productId: product, // Store entire product object for guest cart rendering
          quantity,
          size,
          color
        });
      }

      setCartItems(updatedItems);
      localStorage.setItem('guestCart', JSON.stringify(updatedItems));
    }
  };

  const updateQuantity = async (productId, size, quantity) => {
    if (quantity < 1) return;

    if (user) {
      const updated = await cartService.updateQuantity({
        productId,
        size,
        quantity
      });
      setCartItems(updated.items || []);
    } else {
      const updatedItems = [...cartItems];
      const itemIdx = updatedItems.findIndex(
        item => (item.productId._id === productId || item.productId === productId) && item.size === size
      );

      if (itemIdx > -1) {
        const product = updatedItems[itemIdx].productId;
        const sizeOpt = product.sizes.find(s => s.size === size);
        
        if (sizeOpt && sizeOpt.stock < quantity) {
          throw new Error(`Insufficient stock. Only ${sizeOpt.stock} items available in size ${size}`);
        }

        updatedItems[itemIdx].quantity = quantity;
        setCartItems(updatedItems);
        localStorage.setItem('guestCart', JSON.stringify(updatedItems));
      }
    }
  };

  const removeFromCart = async (productId, size) => {
    if (user) {
      const updated = await cartService.removeFromCart({
        productId,
        size
      });
      setCartItems(updated.items || []);
    } else {
      const updatedItems = cartItems.filter(
        item => !((item.productId._id === productId || item.productId === productId) && item.size === size)
      );
      setCartItems(updatedItems);
      localStorage.setItem('guestCart', JSON.stringify(updatedItems));
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = item.productId;
      if (!product) return total;
      const price = product.discountPrice || product.price;
      return total + price * item.quantity;
    }, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
    if (!user) {
      localStorage.removeItem('guestCart');
    }
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      loading,
      addToCart,
      updateQuantity,
      removeFromCart,
      getCartTotal,
      getCartCount,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
