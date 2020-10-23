///score, game, rules here
import React from 'react';
import Rules from './rules';

const Dash = ()=>{

    return (
        <div className = "dash-cont">
            <h2>Dashboard</h2>
           <div className = "dash-top">
               <div className = "title">
                   <h3>Rock</h3>
                   <h3>Paper</h3>
                   <h3>Scissors</h3>


               </div>
               <div className = "score">
                   <h4>Score</h4>
               </div>
               </div> 
        <div className = "dash-game-cont">
            Game goes here

        </div>
              <div className = "dash-rules">
                  Rules
                  <Rules/>
                  </div> 

        </div> //dash cont end
    )
}


export default Dash;