import Title from 'components/Title'
import TextInput from 'components/form/inputs/TextInput'

export default function NameRow({ value, onChange }) {
  return (
    <>
      <Title>What is your name?</Title>
      <TextInput
        type={'text'}
        name={'name'}
        placeholder={'first name'}
        value={value}
        onChange={onChange}
      />
    </>
  )
}
