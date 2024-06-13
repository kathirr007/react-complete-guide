export function Button({ children, ...props }: { [key: string]: any }) {
  return (
    // eslint-disable-next-line react-dom/no-missing-button-type
    <button {...props} className="px-4 py-2 text-xs md:text-base rounded-md font-semibold bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
      {children}
    </button>
  );
}
