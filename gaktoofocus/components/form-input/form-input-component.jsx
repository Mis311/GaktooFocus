const FormInput = ({ label, ...otherProps }) => {
  return (
    label && (
      <div>
        <label htmlFor="">{label}</label>
        <input {...otherProps} />
      </div>
    )
  );
};

export default FormInput;
