import PropTypes from 'prop-types';

export default function TitleEditor({ customTitle, setCustomTitle }) {
  return (
    <div className="flex w-100 px-3 font-normal">
      <input
        type="text"
        className="focus:outline-none text-center
          px-3 py-1 flex-grow rounded-lg"
        placeholder="Rename product"
        value={customTitle}
        onChange={({ target }) => setCustomTitle(target.value)}
      />
    </div>
  );
}

TitleEditor.propTypes = {
  customTitle: PropTypes.string.isRequired,
  setCustomTitle: PropTypes.func.isRequired,
};
