import React from 'react'

export default function Stepper({ activeStep, pages }) {
  const activeColor = (index) =>
    activeStep >= index ? 'bg-yellow-500' : 'bg-white'
  const activeTextColor = (index) =>
    activeStep >= index ? 'text-white' : 'text-black'
  const isFinalStep = (index) => index === pages.length - 1

  return (
    <div className="flex items-center">
      {pages.map((page, index) => (
        <React.Fragment key={index}>
          <div className={`rounded-full p-3 ${activeColor(index)}`}>
            <i
              className={`bx-sm ${activeTextColor(index)} bx ${page.stepIcon}`}
            ></i>
          </div>
          {isFinalStep(index) ? null : (
            <div className={`h-1 w-full ${activeColor(index + 1)}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
