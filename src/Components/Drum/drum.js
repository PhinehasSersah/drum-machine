import React from "react";

export const Drum = ({ play, press, color}) => {

    return(
        <main id="background">
            <div id="drum-machine">
             <h2 className="drum-title">Lets create some beats together</h2>
             {/* row 1 */}
              <div>
                <button onKeyPress={press} onClick={play} className="drum-pad" id='Heater-1'><audio className="clip" id='Q' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q</button>
                <button onKeyPress={press} onClick={play} className="drum-pad" id="Heater-2"><audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>W</button>
                <button onKeyPress={press} onClick={play} className="drum-pad" id='Heater-3'><audio className="clip" id='E' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>E</button>
              </div>  

              {/* row 2 */}
            <div>
                <button onKeyPress={press} onClick={ play} className="drum-pad" id="Heater-4"><audio className="clip" id='A' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>A</button>
                <button onKeyPress={press} onClick={ play} className="drum-pad" id="Heater-6"><audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>S</button>
                <button onKeyPress={press} onClick={ play} className="drum-pad" id="Dsc_Oh"><audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>D</button>
            </div>

            {/* row 3 */}
            <div>
                <button onKeyPress={press} onClick={ play} className="drum-pad" id="Kick_n_Hat"><audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>Z</button>
                <button onKeyPress={press} onClick={ play} className="drum-pad" id="RP4_KICK_1"><audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>X</button>
                <button onKeyPress={press} onClick={ play} className="drum-pad" id="Chaiiiin"><audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>C</button>
            </div>
            </div>

            <div className="background">
                <button onClick={color}>Change Background</button>
            </div>

            <div className="display-drum">
                <h4>Current Drum</h4>
                <p id="display"></p>
            </div>
        </main>
    )
}
