function Button({ children, onClick, type = "button", disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        px-2 py-1
        text-md
        text-black
        border border-gray-300
        rounded-md
        bg-gray-100
        hover:bg-gray-200
        transition
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
    >
      {children}
    </button>
  );
}

export default Button;
