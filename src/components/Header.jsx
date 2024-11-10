import React from 'react';
import {useParams} from "react-router-dom";

const Header = ({ protocols, step }) => {

    const { protocolId } = useParams();

    const handlePrev = () => {
        location.href = `/protocol/${parseInt(protocolId) - 1}`
    }

    const handleNext = () => {
        location.href = `/protocol/${parseInt(protocolId) + 1}`
    }

    const handleReset = () => {
        window.location.reload();
    }


    return (

        <header>
            <h1><a href="/">Furlaxation</a></h1>

            <div className="controls">
                <button className="btn btn-secondary" disabled={protocolId == 0} onClick={handlePrev}>Prev</button>
                <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
                <button className="btn btn-secondary" disabled={(protocols.length-1) == protocolId} onClick={handleNext}>Next</button>
            </div>

        </header>
    );
}

export default Header