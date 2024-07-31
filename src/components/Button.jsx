import React from 'react'

const Button = ({name,className}) => {
  return (
    <button className={`bg-red-700 rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl text-white px-[2%] py-[1%] ${className}`}>
        {name}
    </button>
  )
}

export default Button