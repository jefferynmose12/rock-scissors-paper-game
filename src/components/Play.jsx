import React from 'react'
import triangle from '../images/bg-triangle.svg'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'
import { Link } from 'react-router-dom'

const Play = ({ setMyChoice }) => {

    return (
        <div className='my-5 flex flex-col items-center relative'>
            {/* background image */}
            <img src={triangle} className='absolute -z-1 bottom-40' alt='triangle'/> 

            {/* choices to make from */}
            <Link to='/game' className='h-32 w-32 flex items-center justify-center rounded-full border-[14px] border-blue-400 shadow-lg bg-white -translate-x-20 translate-y-7 hover:scale-95' onClick={() => setMyChoice(paper)}>
                <img src={paper} alt='paper'/>    
            </Link>
            <Link to='/game' className='h-32 w-32 flex items-center justify-center rounded-full border-[14px] border-yellow-400 shadow-lg bg-white translate-x-20 -translate-y-24 hover:scale-95' onClick={() => setMyChoice(scissors)}>
                <img src={scissors} alt='scissors' />
            </Link>
            <Link to='/game' className='h-32 w-32 flex items-center justify-center rounded-full border-[14px] border-red-500 shadow-lg bg-white -translate-y-20 hover:scale-95' onClick={() => setMyChoice(rock)}>
                <img src={rock} alt='rock' /> 
            </Link>
        </div>
    )
}

export default Play;
