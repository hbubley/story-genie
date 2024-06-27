import Title from 'components/Title'
import SelectInput from 'components/form/inputs/SelectInput'

export default function GenreRow({ value, onChange }) {
  const genreOptions = [
    'Mystery',
    'Fantasy',
    'Comedy',
    'Adventure',
    'Science Fiction',
    'Historical Fiction',
    'Fairy Tale',
    'Superhero',
    'Pirate Story',
    'Animal Story',
    'Friendship Story',
    'Magic and Sorcery',
    'Detective Story',
    'Myth and Legend',
    'Time-Travel'
  ]

  return (
    <>
      <Title>What is your favorite type of story?</Title>
      <SelectInput
        value={value}
        options={genreOptions}
        onChange={onChange}
        name={'genre'}
      />
    </>
  )
}
