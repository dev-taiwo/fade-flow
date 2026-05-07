export default function Button({ children, variant = "primary", className = "", ...props }) {
  const baseClasses = "px-6 py-2 rounded font-semibold transition duration-200";
  
  const variants = {
    primary: "bg-barber-gold text-barber-black hover:bg-barber-gold-dark",
    secondary: "bg-barber-black-lighter text-barber-gold border border-barber-gold hover:bg-barber-black",
    ghost: "text-barber-gold hover:text-barber-gold-dark",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
