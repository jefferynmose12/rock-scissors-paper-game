import React from 'react'

const Header = ({score}) => {
    return (
        <div className='w-full md:w-4/5 py-2 px-2 md:px-4 border-2 border-header-outline rounded-lg flex justify-between'>
            <div className='text-2xl font-bold text-white'>
                <h1>ROCK</h1>
                <h1 className='-my-3'>PAPER</h1>
                <h1>SCISSORS</h1>
            </div>
            <div className='py-1 w-24 bg-white rounded text-center'>
                <p className='text-score-text'>score</p>
                <h3 className='-mt-2 text-5xl text-dark-text'>{score}</h3>
            </div>
        </div>
    )
}

export default Header
