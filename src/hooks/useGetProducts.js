/* eslint-disable consistent-return */
import { useCallback, useEffect, useState } from 'react';
import productsAPI from '../mocks/products.json';

export default function useGetProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addCard = useCallback(() => {
    // Picks one random item from products and duplicate it
    const randomProduct = products[Math.floor(Math.random() * (products.length))];
    setProducts([...products, randomProduct]);
  }, [products]);

  useEffect(() => {
    try {
      setIsLoading(true);
      setTimeout(() => {
        const data = productsAPI;
        setProducts(data);
        setIsLoading(false);
      }, 3000);
    } catch (e) {
      return e;
    }
  }, []);

  return {
    products,
    isLoading,
    addCard,
  };
}
