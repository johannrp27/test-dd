import PropTypes from 'prop-types';

export default function Header({ total }) {
  return (
    <nav className="p-6 shadow-lg sticky top-0 bg-white text-center flex items-end z-10">
      <h3 className="font-semibold text-3xl flex-grow uppercase">Dango Soap</h3>
      <div className="flex relative mr-6 cursor-pointer">
        <div>
          {/* This svg can be replaced with icon library, e.g. Font Awesome - Bt5 Icons */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
        <span
          className="absolute rounded-full h-5 bg-amber-500 text-center text-sm bottom-3 left-5 px-2 leading-5"
        >
          {total}
        </span>
      </div>
    </nav>
  );
}
Header.defaultProps = {
  total: 0,
};

Header.propTypes = {
  total: PropTypes.number,
};