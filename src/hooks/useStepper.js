import { useState } from 'react'

export const useStepper = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => setActiveStep((cur) => cur + 1)

  const handlePrev = () => activeStep !== 0 && setActiveStep((cur) => cur - 1)

  return { activeStep, handleNext, handlePrev }
}
