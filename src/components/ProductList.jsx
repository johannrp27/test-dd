/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';

import useGetProducts from '../hooks/useGetProducts';

import ProductItem from './ProductItem';
import Skeleton from './Skeleton';
import EmptyCard from './EmptyCard';
import Slider from './Slider';

export default function ProductList({ addProduct }) {
  const {
    isLoading,
    products,
    addCard,
  } = useGetProducts();

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <>
      <Slider products={products} />
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <ProductItem
            product={product}
            key={product.id + index}
            addProduct={addProduct}
          />
        ))}
        <EmptyCard callback={addCard} />
      </section>
    </>
  );
}

ProductList.propTypes = {
  addProduct: PropTypes.func.isRequired,
};
