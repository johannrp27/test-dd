import {
  useEffect,
  useState,
} from 'react';

export default function useCartSelection() {
  const [productsInCart, setProductsInCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setTotalProducts(productsInCart.length);
  }, [productsInCart]);

  const addProduct = (id, amount) => {
    setProductsInCart((prev) => [...prev, ...new Array(amount).fill(id)]);
  };

  return {
    productsInCart,
    addProduct,
    totalProducts,
  };
}
