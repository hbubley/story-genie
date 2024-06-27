export default function Button({ children, onClick, isDisabled }) {
  return (
    <button
      type="button"
      className="disabled:bg-disabled-gradient rounded-full bg-legends-gradient p-3 text-white focus:outline-none focus:ring disabled:text-white md:p-5"
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}
