import React from 'react'
import './InputFields.scss'

const InputFields = () => {
  return (
    <form className='input'>
      <input type="text" className='inputBox' placeholder='Enter the task' />
      <button className='submitBtn' type="submit">Go</button>
    </form>
  )
}

export default InputFields