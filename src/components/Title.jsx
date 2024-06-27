export default function Title({ children }) {
  return (
    <h1 className="min-h-20 content-center bg-[linear-gradient(45deg,#371fb7,#b21be8,#f5aa0b)] bg-clip-text text-center text-xl font-bold capitalize text-transparent md:text-3xl">
      {children}
    </h1>
  )
}
