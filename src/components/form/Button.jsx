export default function Button({ children, onClick, isDisabled }) {
  return (
    <button
      type="button"
      className="rounded-full bg-[linear-gradient(45deg,#371fb7,#b21be8,#f5aa0b)] p-3 text-white focus:outline-none focus:ring disabled:bg-[linear-gradient(45deg,#d3d3d3,#808080,#a9a9a9)] disabled:text-white md:p-5"
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}
