import React from 'react'

export const Button = ({...props}) => {
  const classes = `w-fit px-3 py-1.5 border-2 border-[#1f8f6d] rounded-lg text-white hover:bg-[#1f8f6d] hover:text-white disabled:bg-[#1db379] disabled:text-white disabled:border-0 ${props.className}`
  return (
    <button
      {...props}
      className={classes}
    >
      {props.children}
    </button>
  )
}
