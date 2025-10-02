export default function FileInput({ onChange, disabled }) {
  return (
    <div className="field">
      <input
        type="file"
        className="input-file"
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}
