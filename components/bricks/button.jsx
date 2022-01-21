const Button = ({ children }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-violet-600 hover:bg-violet-700"
    >
      {children}
    </button>
  );
};

export default Button;
