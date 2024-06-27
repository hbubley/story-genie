import Title from 'components/Title'
import SelectInput from 'components/form/inputs/SelectInput'
import { AgeOptions } from 'utils/constants'

export default function AgeRow({ value, onChange }) {
  return (
    <>
      <Title>How old are you?</Title>
      <SelectInput
        value={value}
        options={AgeOptions}
        onChange={onChange}
        name={'age'}
      />
    </>
  )
}
