import PropTypes from "prop-types";

function FormField({ title, type = "text", id, onChangeFunc }) {
  return (
    <>
      <label className="flex flex-col pt-4">
        {title}
        <input
          type={type}
          name={id}
          id={id}
          className="appearance-none hover:bg-gray-200  w-full p-[0.5em] sm:p-[0.2em] pl-1 rounded-lg border border-secondary_1 invalid:border-red-600 mt-2"
          onChange={onChangeFunc}
          minLength="5"
          required
        />
      </label>
    </>
  );
}

FormField.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  onChangeFunc: PropTypes.func,
};

export { FormField };
