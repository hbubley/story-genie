import Title from 'components/Title'
import SelectInput from 'components/form/inputs/SelectInput'

export default function AgeRow({ value, onChange }) {
  const ageOptions = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <>
      <Title>How old are you?</Title>
      <SelectInput
        value={value}
        options={ageOptions}
        onChange={onChange}
        name={'age'}
      />
    </>
  )
}
