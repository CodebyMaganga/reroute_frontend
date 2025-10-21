
const Badge = ({ children, className }) => {
  return (
    <span className={`absolute top-0 right-0 h-4 w-4 min-w-0 p-1 flex items-center justify-center text-xs bg-red-500 text-white rounded-full border-2 border-white shadow-sm ${className}`}>
      {children}
    </span>
  );
};

export default Badge;