import Title from 'components/Title'
import SelectInput from 'components/form/inputs/SelectInput'
import { GenreOptions } from 'utils/constants'

export default function GenreRow({ value, onChange }) {
  return (
    <>
      <Title>What is your favorite type of story?</Title>
      <SelectInput
        value={value}
        options={GenreOptions}
        onChange={onChange}
        name={'genre'}
      />
    </>
  )
}
