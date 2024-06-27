export default function SelectInput({ options, value, name, onChange }) {
  return (
    <select
      value={value}
      className={`w-full rounded-md border-b-2 border-legends-yellow bg-yellow-100 p-2 font-semibold ${
        value === '' ? 'text-gray-400' : 'text-legends-purple'
      } shadow-inner outline-none focus:bg-gray-200`}
      onChange={(e) => onChange(e.target.value, name)}
    >
      <option value="" hidden>
        make a selection
      </option>
      {options.map((opt, index) => (
        <option key={`${opt} + ${index}`} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  )
}
