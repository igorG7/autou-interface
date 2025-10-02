export default function TextAreaField({
  label,
  value,
  onChange,
  disabled = false,
}) {
  return (
    <div className="field">
      <label>{label}</label>
      <textarea
        className="textarea"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}
