/* eslint-disable tailwindcss/no-custom-classname */
import { useEffect, useState } from 'react'
import AgeRow from 'components/form/rows/AgeRow.jsx'
import AnimalRow from 'components/form/rows/AnimalRow'
import GenreRow from 'components/form/rows/GenreRow'
import NameRow from 'components/form/rows/NameRow'
import SettingRow from 'components/form/rows/SettingRow'
import Stepper from 'components/form/Stepper'
import Button from 'components/form/Button'
import { useStepper } from 'hooks/useStepper'

export default function Form({ onSubmit, isLoading }) {
  const emptyForm = {
    name: '',
    age: '',
    animal: '',
    genre: '',
    setting: ''
  }
  const { activeStep, handleNext, handlePrev } = useStepper()
  const [form, setForm] = useState(emptyForm)
  const [submitButtonText, setSubmitButtonText] = useState('Create Story')

  useEffect(() => {
    if (isLoading) {
      setSubmitButtonText('Submitting...')
    }
  }, [isLoading])

  const handleFormChange = (value, name) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }))
  }

  const handleSubmitForm = async () => {
    try {
      await onSubmit(form)
      setForm(emptyForm)
    } catch (error) {
      console.error(error)
      setSubmitButtonText('Please submit again')
    }
  }

  const pages = [
    {
      name: 'name',
      stepIcon: 'bxs-face',
      renderPage: () => (
        <NameRow value={form.name} onChange={handleFormChange} />
      )
    },
    {
      name: 'age',
      stepIcon: 'bx-time-five',
      renderPage: () => <AgeRow value={form.age} onChange={handleFormChange} />
    },
    {
      name: 'animal',
      stepIcon: 'bxs-dog',
      renderPage: () => (
        <AnimalRow value={form.animal} onChange={handleFormChange} />
      )
    },
    {
      name: 'setting',
      stepIcon: 'bxs-castle',
      renderPage: () => (
        <SettingRow value={form.setting} onChange={handleFormChange} />
      )
    },
    {
      name: 'genre',
      stepIcon: 'bxs-film',
      renderPage: () => (
        <GenreRow value={form.genre} onChange={handleFormChange} />
      )
    }
  ]

  const isNextDisabled =
    form[pages[activeStep].name] === '' || activeStep === pages.length - 1
      ? true
      : false

  const isPrevDisabled = activeStep === 0 ? true : false

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <Stepper pages={pages} activeStep={activeStep} />
        <form className="mb-0 mt-6 min-h-full space-y-4 rounded-lg bg-white p-4 shadow-lg sm:p-6 lg:p-8">
          <div className="min-h-32">{pages[activeStep].renderPage()}</div>
          <div className="flex justify-between">
            <Button onClick={handlePrev} isDisabled={isPrevDisabled}>
              <i className="bx bxs-chevron-left"></i>
            </Button>
            {activeStep !== pages.length - 1 ? (
              <Button onClick={handleNext} isDisabled={isNextDisabled}>
                <i className="bx bxs-chevron-right"></i>
              </Button>
            ) : (
              <Button
                onClick={() => handleSubmitForm()}
                isDisabled={isLoading || form[pages[activeStep].name] === ''}
              >
                {submitButtonText}
              </Button>
            )}
          </div>
        </form>
      </div>
    </>
  )
}
