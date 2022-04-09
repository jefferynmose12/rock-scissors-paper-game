import React from 'react'
import Rule from '../images/image-rules.svg'
import close from '../images/icon-close.svg'

const Modal = ({toggle}) => {
    return (
        <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center backdrop-filter backdrop-blur-sm backdrop-brightness-50 z-50'>
            <div className='mx-2 p-5 bg-white rounded pt-2 w-full md:w-1/4 flex flex-col justify-center gap-10'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl text-gray-400 font-bold '>RULES</h1>
                    <img className='cursor-pointer ml-auto' src={close} onClick={toggle} alt='close' />
                </div>
                <div className='flex justify-center'>
                    <img src={Rule} alt='rule' />
                </div>
            </div>      
        </div>

    )
}

export default Modal
