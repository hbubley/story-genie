import Title from 'components/Title'
import SelectInput from 'components/form/inputs/SelectInput'

export default function SettingRow({ value, onChange }) {
  const settingOptions = [
    'Enchanted Forest',
    'Outer Space',
    'Under the Sea',
    'Mystical Mountains',
    'Magical Kingdom',
    'Pirate Island',
    'Secret Garden',
    'Ancient Egypt',
    'Dinosaur Valley',
    'Superhero City',
    'Fairy Village',
    'Haunted Castle',
    'Desert Oasis',
    'Snowy Wonderland'
  ]
  return (
    <>
      <div>
        <Title>Where do you like stories set?</Title>
        <SelectInput
          value={value}
          options={settingOptions}
          onChange={onChange}
          name={'setting'}
        />
      </div>
    </>
  )
}
