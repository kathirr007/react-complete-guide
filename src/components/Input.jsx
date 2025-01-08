export function Input({ label, id, error, ...props }) {
  return (
    <div className={`control ${props.inputWrapperClass}`}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className="control-error">
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
