import React, { useState } from 'react'
import Modal from './Modal';

const Footer = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    }

    return (
        <div>
            <button className='h-10 w-28 border-2 border-white rounded-md text-white text-lg font-medium hover:bg-white hover:text-blue-500' onClick={toggle}>
                RULES
            </button>
            {
                modal ? <Modal toggle ={toggle} /> : null
            }
        </div>
    )
}

export default Footer
