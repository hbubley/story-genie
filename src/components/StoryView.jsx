import Button from 'components/form/Button'
import Title from 'components/Title'

export default function StoryView({ story, clearStory }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-0 mt-6 min-h-full space-y-4 rounded-lg bg-white p-4 shadow-lg sm:p-6 lg:p-8">
        <Title>{story.title}</Title>
        <p>{story.partOne}</p>
        <p>{story.partTwo}</p>
        <p>{story.partThree}</p>
        <Button onClick={clearStory}>Make another story</Button>
      </div>
    </div>
  )
}
