/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-param-reassign */
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

export default function Slider({ products }) {
  const [fontSize, setFontSize] = useState(18);

  useEffect(() => {
    const titles = document.querySelectorAll('.title-card');
    titles.forEach((node) => {
      node.style.fontSize = `${fontSize}px`;
      node.style.lineHeight = `${fontSize * 1.5}px`;
    });
  }, [fontSize, products]);

  return (
    <div className="mb-8">
      <h3 className="text-xl">Font size</h3>
      <div className="flex gap-4">
        <input
          type="range"
          min="10"
          value={fontSize}
          onChange={({ target }) => {
            setFontSize(target.value);
          }}
          max="50"
        />
        <p>
          {fontSize}
          px
        </p>
      </div>
    </div>
  );
}

Slider.propTypes = {
  products: PropTypes.array.isRequired,
};
