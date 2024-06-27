import { useStory } from '../hooks/useStory'
import Form from 'components/form/Form'
import StoryView from 'components/StoryView'

function App() {
  const { story, isLoading, handleSubmitForm, clearStory } = useStory()

  return (
    <div className="min-h-screen content-center bg-[linear-gradient(45deg,#371fb7,#b21be8,#f5aa0b)]">
      {story === '' ? (
        <>
          <h1 className="text-center text-4xl font-bold text-white md:text-6xl">
            StoryGenie{' '}
            <span>
              <i className=" bx bxs-magic-wand transition-transform duration-200 ease-in hover:rotate-12 hover:text-yellow-500"></i>
            </span>
          </h1>
          <Form onSubmit={handleSubmitForm} isLoading={isLoading} />
        </>
      ) : (
        <StoryView story={story} clearStory={clearStory} />
      )}
    </div>
  )
}

export default App
