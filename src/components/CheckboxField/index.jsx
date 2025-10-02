export default function CheckboxField({ label, checked, onChange }) {
  return (
    <div className="check-field">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
}
