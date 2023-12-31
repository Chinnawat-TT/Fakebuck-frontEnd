export default function ActionButton({ children, onClick,active }) {
  return (
    <button
      onClick={onClick}
      className={` py-1 text-sm font-semibold w-full rounded-md ${active ? 'text-blue-500' : 'text-gray-500'} hover:bg-gray-200`}
    >
      {children}
    </button>
  );
}
