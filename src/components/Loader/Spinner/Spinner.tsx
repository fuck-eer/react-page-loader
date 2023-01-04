import React from 'react'
const Spinner = ({ text }: { text?: string }) => (
  <div className='pageLoader spinnerContainer'>
    <div className='spinnerBox'>
      <div className='spinner'></div>
      <p className='spinnerText'>{text ?? 'Loading...'}</p>
    </div>
  </div>
)

export default Spinner
