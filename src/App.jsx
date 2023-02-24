import useCartSelection from './hooks/useCartSelection';

import Header from './components/Header';
import ProductList from './components/ProductList';
import './styles/App.css';

function App() {
  const {
    addProduct,
    totalProducts,
  } = useCartSelection();

  return (
    <div>
      <Header total={totalProducts} />
      <main className="container mr-auto px-2 md:px-8 py-6">
        <div className="my-6 px-6 md:px-0">
          <ProductList
            addProduct={addProduct}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
