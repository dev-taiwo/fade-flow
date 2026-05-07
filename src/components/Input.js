export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
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
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`px-4 py-3 bg-barber-black-lighter border border-barber-gray rounded text-barber-gray-light placeholder-barber-gray focus:outline-none focus:border-barber-gold transition ${className}`}
        {...props}
      />
    </div>
  );
}
