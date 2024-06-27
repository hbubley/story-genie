import Title from 'components/Title'
import TextInput from 'components/form/inputs/TextInput'

export default function AnimalRow({ value, onChange }) {
  return (
    <>
      <Title>What is your favorite animal?</Title>
      <TextInput
        type={'text'}
        name={'animal'}
        placeholder={'favorite animal'}
        value={value}
        onChange={onChange}
      />
    </>
  )
}
