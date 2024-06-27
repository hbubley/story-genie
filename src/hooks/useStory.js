import { useState } from 'react'
import client from '../api/chat-gpt'
import { Authors } from 'utils/constants'

export const useStory = () => {
  const [story, setStory] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function getRandomAuthor(authors) {
    const randomIndex = Math.floor(Math.random() * authors.length)

    return authors[randomIndex]
  }

  const createRequestObject = ({ name, animal, age, genre, setting }) => {
    const randomAuthor = getRandomAuthor(Authors)
    const prompt = `In the voice of ${randomAuthor}, create a 3-part children's story based on the following inputs: \nChild's Name: ${name}, \nFavorite Animal: ${animal}, \nPreferred Adventure Setting: ${setting}, \nPreferred Type of Story: ${genre}. \nEnsure the story is dynamic, age-appropriate for a ${age} year old, and differentiated based on the inputs. Give the response as a valid and parsable JSON object with the format: \n{\n"title": "story title",\n"partOne": "first part of the story",\n"partTwo": "second part of the story",\n"partThree": "third part of the story"\n}.`

    return {
      model: 'gpt-3.5-turbo-16k',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    }
  }

  const requestStory = async (data) => {
    const response = await client.post('', data)
    return JSON.parse(response.data.choices[0].message.content)
  }

  const handleSubmitForm = async (form) => {
    setIsLoading(true)
    const requestObject = createRequestObject(form)

    try {
      const story = await requestStory(requestObject)
      const isStoryFormatCorrect =
        story &&
        story.title &&
        story.partOne &&
        story.partTwo &&
        story.partThree

      if (isStoryFormatCorrect) {
        setStory(story)
      } else {
        throw new Error('Incomplete story data')
      }
    } catch (error) {
      console.error('Error generating story:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const clearStory = () => {
    setStory('')
  }

  return { story, isLoading, handleSubmitForm, clearStory }
}
