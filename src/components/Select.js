export default function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select...",
  required = false,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-barber-gray-light font-semibold text-sm">
          {label}
          {required && <span className="text-barber-gold ml-1">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className={`px-4 py-3 bg-barber-black-lighter border border-barber-gray rounded text-barber-gray-light focus:outline-none focus:border-barber-gold transition ${className}`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
