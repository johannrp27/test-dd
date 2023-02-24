/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

import { useState } from 'react';
import { ReactComponent as AddLogo } from '../assets/add.svg';
import TitleEditor from './TitleEditor';

export default function ProductItem({
  product,
  addProduct,
}) {
  const [amount, setAmount] = useState(0);
  const [customTitle, setCustomTitle] = useState('');

  const handleAdd = () => {
    addProduct(product.id, +amount);
  };

  return (
    <div className="rounded-t-2xl shadow-md
      bg-white overflow-hidden flex flex-col group"
    >
      <img
        src={product.imgSrc}
        alt="Soap"
      />
      <div className="flex flex-col gap-8 p-6 flex-grow">
        <h4 className="font-bold text-xl text-center title-card">{customTitle || product.title}</h4>

        <div className="flex justify-between items-center gap-6">
          <p className="font-medium text-lg">{`$ ${product.price.toFixed(2)}`}</p>
          <div className="flex gap-2 items-center">
            <input
              className="rounded-sm p-1 text-center w-16 border-b-2
              text-slate-600 hover:outline-none
              focus:outline-none focus:border-[#4648A8]
              active:border-[#4648A8]"
              type="number"
              onWheel={({ target }) => target.blur()}
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
            />
          </div>
        </div>
        <p className="text-slate-500 flex-grow font-thin">{product.description}</p>

        <div className="flex flex-col items-center gap-5">
          <div>
            <button
              className="text-white bg-gradient-to-r from-[#485563] to-[#29323c]
              focus:ring-2 focus:outline-none focus:ring-[#8697aa]
              hover:bg-gradient-to-bl
              px-5 py-2 rounded-xl font-medium
              flex gap-3
              disabled:opacity-50"
              disabled={!amount || amount <= 0}
              type="button"
              onClick={handleAdd}
            >
              Add to cart
              <AddLogo />
            </button>
          </div>
          <div>
            <button
              type="button"
              className="border-b-2 border-b-amber-500 text-slate-600 font-medium
              hover:transition-all hover:border-b-slate-700 hover:ease-linear hover:duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="text-center py-2 h-auto bg-cyan-800 text-white font-bold group/edit group-hover/item:visible">
        <div className="hidden group-hover/edit:block group-hover/edit:text-black group-hover/edit:font-medium">
          <TitleEditor
            customTitle={customTitle}
            setCustomTitle={setCustomTitle}
          />
        </div>
        <div className="block group-hover/edit:hidden h-8 leading-8">
          Hover me
        </div>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
};
