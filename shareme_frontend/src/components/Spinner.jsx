import React from 'react'
import {Circles} from 'react-loader-spinner'

const Spinner = ({message}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full my-5'>
        <Circles
            color='#00BFFF'
            height={60}
            width={210}
        />
        <p className='text-lg text-center px-2 m-5'>{message}</p>
    </div>
  )
}

export default Spinner