import './AdDesigner.css';

import { useState } from 'react';

function AdDesigner() {

    function iceCreamChoice() {

    }
    return (
        <div className="AdDesigner">
            <h2>Ad Designer</h2>
            <div className="voteFor">
                <p>Vote For</p>
                <h2>Strawberry</h2>
            </div>
            <p>What to Support</p>
            <p>
                <button value="Chocolate">Chocolate</button>
                <button value="Vanilla">Vanilla</button>
                <button value="Strawberry">Strawberry</button>
            </p>
            <p>Color Theme</p>
            <p>
                <button value="Light">Light</button>
                <button value="Dark">Dark</button>
            </p>
            <p>Font Size</p>
            <p>
                <button value="Down">Down</button>
                <p></p>
                <button value="Up">Up</button>
            </p>
        </div> );
}
export default AdDesigner;