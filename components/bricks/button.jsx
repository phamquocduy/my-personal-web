const Button = ({ children }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {children}
    </button>
  );
};

export default Button;
