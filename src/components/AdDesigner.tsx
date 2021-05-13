import './AdDesigner.css';

import { useState } from 'react';

function AdDesigner() {

    const [ flavor, setFlavor ] = useState( '' );
    function iceCreamChoice( flavor: string ) {
        setFlavor( 'Chocolate' );
        setFlavor( 'Vanilla' );
        setFlavor( 'Strawberry' );
    }

    function fontSize() {

    }

    function colorTheme() {

    }

    return (
        <div className="AdDesigner">
            <h2>Ad Designer</h2>
            <div className="voteFor">
                <p>Vote For</p>
                <h2>Strawberry</h2>
            </div>
            <p>What to Support</p>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button value="Chocolate" className="btn btn-primary">Chocolate</button>
                <button value="Vanilla" className="btn btn-primary">Vanilla</button>
                <button value="Strawberry" className="btn btn-primary">Strawberry</button>
            </div>
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