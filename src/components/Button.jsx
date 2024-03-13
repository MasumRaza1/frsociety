const Button = ({ children, bg, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-1 rounded-full text-white border-coral-red ${
        bg ? bg : "bg-coral-red"
      } ${fullWidth && "w-full"}`}
    >
      {children}
    </button>
  );
};

export default Button;
