import React from "react";
 import './header.css';

 
export const Header = () => {
    return(
        <header className="header">
            <h1>Phine's Drum Booth</h1>
             <nav>
                 <ul>
                     <a rel='noreferrer' href="https://github.com/Phine1" target='_blank'><li>GitHub</li></a>
                     <a  rel='noreferrer' href="https://phinehas.netlify.app/" target='_blank'><li> Portfolio</li></a>
                    <a  rel='noreferrer' href="https://twitter.com/Phine_Essel" target='_blank'> <li>Twitter</li></a>
                 </ul>
             </nav>

        </header>
    )
}