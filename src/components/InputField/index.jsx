export default function InputField({
  label,
  value,
  onChange,
  disabled = false,
  type = "text",
}) {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        type={type}
        className="input"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}
