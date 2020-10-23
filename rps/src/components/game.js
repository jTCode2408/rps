///game functionality here
///base logic something along lines of user pick 1 of 3...cpu does random pick--- rock beats scissor, lose to paper ---paper beat rock, lost to scissor ---scissor beat paper, lost to rock ----add point, store points in local storage

import React, {useState, useRef} from 'react';

const Game = ()=>{

 const [rock, setRock] = useState();
 const [papaer, setPaper] = useState();
 const [scissor, setScissor] = useState();
 const [score, setScore] = useState();
 const [winner, setWinner]= useState();
 


    return (
        <div className = "game-cont">
            Game logic




        </div>
    )
}

export default Game;