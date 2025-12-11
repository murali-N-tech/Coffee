// Generic Button component 
const Button = ({ children, onClick, variant = 'primary', type = 'button', className = '', disabled = false }) => {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-coffee-600 text-white hover:bg-coffee-700",
    secondary: "bg-gold text-coffee-900 hover:bg-yellow-500",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline: "border-2 border-coffee-600 text-coffee-600 hover:bg-coffee-50"
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;