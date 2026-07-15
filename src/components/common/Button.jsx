const Button = (props) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 font-primary font-semibold px-6 py-4 rounded-full cursor-pointer hover:bg-primary/90 transition-all duration-300 ${props.black ? "bg-black text-white" : "bg-white text-black border border-text hover:border-black"}`}
    >
      {props.text}
      {props.icon && (
        <span>
          <props.icon />
        </span>
      )}
    </div>
  );
};

export default Button;
