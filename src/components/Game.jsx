import React, { useEffect, useState } from 'react'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'
import { Link } from 'react-router-dom'

function Game ({ myChoice, score, setScore }){

    const [house, setHouse] = useState();
    const [playerWin, setPlayerWin] = useState("");
    const [counter, setCounter] = useState(3);

    const newHousePick =()=> {
        const choice=[paper, scissors, rock];
        setHouse(choice[Math.floor(Math.random()*3)]);
    };

    useEffect(() => {
        newHousePick();
    }, []);

    const Result = () => {
        if (myChoice === rock && house === scissors) {
            setPlayerWin("win");
            setScore(score+1);
            console.log('win')
        } else if (myChoice === rock && house === paper) {
            setPlayerWin("lose");
            setScore(score-1);
            console.log('win')
        } else if (myChoice === scissors && house === paper) {
            setPlayerWin("win");
            setScore(score+1);
            console.log('win')
        } else if (myChoice === scissors && house === rock) {
            setPlayerWin("lose");
            setScore(score-1);
            console.log('win')
        } else if (myChoice === paper && house === rock) {
            setPlayerWin("win");
            setScore(score+1);
            console.log('win')
        } else if (myChoice === paper && house === scissors) {
            setPlayerWin("lose");
            setScore(score-1);
            console.log('win')
        } else {
            setPlayerWin("draw");
        }
    };

    useEffect(() => {
        const timer =
        counter > 0 
        ? setInterval(() =>{
            setCounter(counter - 1);
        }, 1000)
        : Result();

        return () => {
            clearInterval(timer);
        }
    }, [counter, house])

    return (
        <>
        {myChoice &&
            (<>
                <div className='my-14 flex flex-row gap-5 md:gap-14'>

                    {/* your choice */}
                    <div className='flex flex-col-reverse md:flex-col gap-7 md:gap-10 items-center'>
                        <h5 className='text-white text-base'>YOU PICKED</h5>
                        <div className=
                        {'h-40 w-40 flex justify-center items-center rounded-full border-[16px] shadow-xl bg-white' + (myChoice === paper ? ' border-blue-400 ' : '') + (myChoice === scissors ? ' border-yellow-400 ' : '') + (myChoice === rock ? ' border-red-500 ' : '')}>
                            <img src={myChoice} alt='mychoice'/>   
                        </div>
                    </div>

                    {/* status and play again */}
                    <div className='hidden md:flex mt-10 flex-col gap-2 justify-center items-center'>
                        {playerWin === 'win' && <h1 className='text-3xl font-medium text-white'>YOU WIN</h1>}
                        {playerWin === 'lose' && <h1 className='text-3xl font-medium text-white'>YOU LOSE</h1>}
                        {playerWin === 'draw' && <h1 className='text-3xl font-medium text-white'>DRAW</h1>}
                        <Link to='/' className={'bg-white text-red-400 text-xs flex items-center justify-center font-medium h-8 w-36 rounded' + (playerWin === 'win' ? ' text-blue-600 ' : '')} onClick={()=> setHouse()}>
                            PLAY AGAIN
                        </Link>
                    </div>

                    {/* house choice */}
                    <div className='flex flex-col-reverse md:flex-col gap-7 md:gap-10 items-center'>
                        <h5 className='text-white text-base'>THE HOUSE PICKED</h5>
                        {counter === 0 ? (
                        <div className=
                        {'h-40 w-40 flex justify-center items-center rounded-full border-[16px] shadow-xl bg-white' + (house === paper ? ' border-blue-400 ' : '') + (house === scissors ? ' border-yellow-400 ' : '') + (house === rock ? ' border-red-500 ' : '')}>
                            <img src={house} alt='housechoice' /> 
                        </div>
                        ) : (
                            <div className='mt-1 flex justify-center items-center bg-gray-800 bg-opacity-20 rounded-full text-white text-3xl w-32 h-32'>{counter}</div>
                        )}
                    </div>
                </div>
                
                {/* mobile screen status and play again */}
                <div className='mt-4 mb-10 md:hidden flex flex-col gap-3 justify-center items-center'>
                    {playerWin === 'win' && <h1 className='text-3xl font-medium text-white'>YOU WIN</h1>}
                    {playerWin === 'lose' && <h1 className='text-3xl font-medium text-white'>YOU LOSE</h1>}
                    {playerWin === 'draw' && <h1 className='text-3xl font-medium text-white'>DRAW</h1>}
                    <Link to='/' className={'bg-white text-red-500 text-xs flex items-center justify-center font-medium h-8 w-36 rounded' + (playerWin === 'win' ? ' text-blue-400 ' : '') } onClick={()=> setHouse()}>
                        PLAY AGAIN
                    </Link>
                </div>
            </>
            )
        }
        </>
    )
}

export default Game
