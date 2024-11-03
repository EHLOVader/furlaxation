import React from 'react';
import { useKeepAwake } from 'react-keep-awake';
import {Link, useParams} from 'react-router-dom';

import {activate} from '../components/nosleep';

const ProtocolDetails = ({ protocols }) => {
    useKeepAwake();
    activate();
    const { protocolId } = useParams();
    const protocol = protocols[protocolId];

    // Keep state on current step
    const [currentStep, setStep] = React.useState(-1)

    const [performance, setPerformance] = React.useState({ 'passes': 0, 'fails': 0 });

    const handleYes = () => {
        setStep(currentStep + 1)
        performance.passes++;
        setPerformance(performance);

    }

    const handleNo = () => {
        if(currentStep === 0) {
            return;
        }
        setStep(currentStep - 1)
        performance.fails++;
        setPerformance(performance);
    }

    React.useEffect(() => {
        return () => {
            const active = document.querySelector('.active')
            if (active) {
                active.focus();
                active.scrollIntoView({ behavior: 'smooth' })
            }
        };
    }, [currentStep]);

    if(currentStep === protocol.steps.length) {
        return (
            <div>
                <h2>Congratulations!</h2>
                <h1>Protocol Complete</h1>
                <p>Total tasks: {protocol.steps.length}</p>
                <p>Passes: {performance.passes}</p>
                <p>Fails: {performance.fails}</p>

                <div className="controls flex flex-row justify-between sticky bottom-0 bg-[#242424]">
                    <a
                      className="bg-yellow-500 hover:bg-blue-700 text-white font-bold m-2 p-4 w-full rounded"
                      onClick={() => window.location.reload()}
                    >
                      Rerun Protocol {protocolId}
                    </a>
                    <Link
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 p-4 w-full rounded"
                      to = {`/protocol/${parseInt(protocolId) + 1}`}
                    >
                      Continue to Protocol {parseInt(protocolId) + 1}
                    </Link>
                </div>
            </div>
        );
    }else{
        return (
            <div>
                <h3>Steps</h3>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 p-4 w-full rounded"
                        onClick={() => setStep(0)}
                >Start</button>
                <ul className="flex flex-col">
                    {protocol.steps.map((step, index) => (
                        <li tabIndex="-1" key={index} data-time={step.time} onClick={() => setStep(index)}
                            className={(index == currentStep ? 'active ' : '') + " m-2 p-3 rounded-lg bg-white border-2 border-gray-900 text-gray-950"}>
                            {step.descr}
                        </li>
                    ))}
                </ul>
                <div className="controls flex flex-row justify-between sticky bottom-0 bg-[#242424]">
                    <button className="bg-blue-500 hover:bg-green-700 text-white font-bold m-2 p-4 w-1/2 rounded"
                            onClick={handleYes}>Yes
                    </button>
                    <button className="bg-blue-500 hover:bg-red-700 text-white font-bold m-2 p-4 w-1/2 rounded"
                            onClick={handleNo}>No
                    </button>
                </div>
            </div>
        );
    }
}

export default ProtocolDetails;