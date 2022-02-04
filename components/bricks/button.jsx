const Button = ({ children }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-full border border-transparent bg-violet-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-violet-700"
    >
      {children}
    </button>
  );
};

export default Button;
