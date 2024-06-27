export default function TextInput({
  type,
  name,
  placeholder,
  value,
  onChange
}) {
  const preventAccidentalSubmission = (e) => {
    e.key === 'Enter' && e.preventDefault()
  }
  return (
    <input
      className="w-full rounded-md border-b-2 border-legends-yellow bg-yellow-100 p-2 font-semibold text-legends-purple shadow-inner outline-none focus:bg-gray-200"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onKeyDown={preventAccidentalSubmission}
      onChange={(e) => onChange(e.target.value, e.target.name)}
    />
  )
}
