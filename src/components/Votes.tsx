import './Votes.css';

import { useState } from 'react';

function Votes() {
    return (
        <div className="Votes">
            <h1>Vote Here</h1>
            <p>
                <button value="Chocolate">Chocolate</button>
                <button value="Vanilla">Vanilla</button>
                <button value="Strawberry">Strawberry</button>
            </p>
            <h2>Chocolate</h2>
            <div className="Chocolate"></div>
            <h2>Vanilla</h2>
            <div className="Vanilla"></div>
            <h2>Strawberry</h2>
            <div className="Strawberry"></div>
        </div> );
}
export default Votes;