

const Button = ({ text, black, onClick, disabled, iconLeft, iconRight }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm
      transition-all duration-200 w-full
      ${black
        ? "bg-gray-900 text-white hover:bg-gray-800 active:scale-[0.98]"
        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 active:scale-[0.98]"
      }
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    `}
  >
    {iconLeft && <span className="text-lg">{iconLeft}</span>}
    {text}
    {iconRight && <span className="text-lg">{iconRight}</span>}
  </button>
);


export default Button;