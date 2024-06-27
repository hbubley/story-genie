import Title from 'components/Title'
import SelectInput from 'components/form/inputs/SelectInput'
import { SettingOptions } from 'utils/constants'

export default function SettingRow({ value, onChange }) {
  return (
    <>
      <Title>Where do you like stories set?</Title>
      <SelectInput
        value={value}
        options={SettingOptions}
        onChange={onChange}
        name={'setting'}
      />
    </>
  )
}
