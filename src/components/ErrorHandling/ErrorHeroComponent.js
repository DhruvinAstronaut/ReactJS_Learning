import React from 'react'

export default function ErrorHeroComponent({Username}) {
    if(Username === 'naviman'){
         throw new Error("Not a hero")
    }
  return (
    <div>
      <h1>{Username}</h1>
    </div>
  )
}
