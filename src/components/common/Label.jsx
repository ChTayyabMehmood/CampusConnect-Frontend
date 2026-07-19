const Label = ({
  children,
  active = false,
  onClick,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-1.5  px-5 py-1.5 
        text-md font-medium rounded-full 
        border border-gray-200 
        cursor-pointer transition-all duration-200 
        hover:border-gray-400 hover:bg-gray-50
        ${
          active
            ? "bg-black text-white border-black hover:bg-neutral-800 hover:border-neutral-800"
            : "bg-white text-gray-700 hover:bg-gray-50"
        }
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Label;
