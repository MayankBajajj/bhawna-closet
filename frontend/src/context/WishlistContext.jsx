import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { wishlistService } from '../services/wishlistService';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { user } = useAuth();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWishlist = async () => {
      setLoading(true);
      if (user) {
        try {
          const dbWish = await wishlistService.getWishlist();
          setWishlistItems(dbWish.products || []);
        } catch (error) {
          console.error('Error fetching database wishlist:', error);
        }
      } else {
        const local = localStorage.getItem('guestWishlist');
        if (local) {
          try {
            setWishlistItems(JSON.parse(local));
          } catch (e) {
            setWishlistItems([]);
          }
        } else {
          setWishlistItems([]);
        }
      }
      setLoading(false);
    };

    loadWishlist();
  }, [user]);

  const toggleWishlist = async (product) => {
    if (user) {
      try {
        const updated = await wishlistService.toggleWishlist(product._id);
        setWishlistItems(updated.products || []);
      } catch (err) {
        console.error('Error updating DB wishlist:', err);
      }
    } else {
      const updatedWish = [...wishlistItems];
      const idx = updatedWish.findIndex(item => item._id === product._id);

      if (idx > -1) {
        updatedWish.splice(idx, 1);
      } else {
        updatedWish.push(product);
      }

      setWishlistItems(updatedWish);
      localStorage.setItem('guestWishlist', JSON.stringify(updatedWish));
    }
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item._id === productId);
  };

  return (
    <WishlistContext.Provider value={{
      wishlistItems,
      loading,
      toggleWishlist,
      isInWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
