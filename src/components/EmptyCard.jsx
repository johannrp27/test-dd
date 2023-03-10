import PropTypes from 'prop-types';

export default function EmptyCard({ callback }) {
  return (
    <button
      className="flex flex-col justify-center items-center
      border-dashed border-4 p-6 empty-card group"
      type="button"
      onClick={callback}
    >
      <span className="text-slate-200 text-2xl">Add</span>
      <div className="transition-all duration-500 group-hover:rotate-90 ease-in">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#E2E8F0"
          className="w-40 h-40"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

    </button>
  );
}
EmptyCard.propTypes = {
  callback: PropTypes.func.isRequired,
};
