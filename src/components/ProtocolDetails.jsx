import React from 'react';
import { useKeepAwake } from 'react-keep-awake';
import { useParams } from 'react-router-dom';

const ProtocolDetails = ({ protocols }) => {
    useKeepAwake();
    const { protocolId } = useParams();
    const protocol = protocols[protocolId];

    // Keep state on current step
    const [currentStep, setStep] = React.useState(0)

    const handleYes = () => {
        if(currentStep === protocol.steps.length - 1) {
            return;
        }
        setStep(currentStep + 1)

    }

    const handleNo = () => {
        if(currentStep === 0) {
            return;
        }
        setStep(currentStep - 1)
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
    
    return (
        <div>
            <h3>Steps</h3>
            <ul className="flex flex-col" >
                {protocol.steps.map((step, index) => (
                    <li tabIndex="-1" key={index} data-time={step.time} onClick={() => setStep(index)}
                        className={(index==currentStep ? 'active ' : '') + " m-2 p-3 rounded-lg bg-white border-2 border-gray-900 text-gray-950"}>
                       {step.descr}
                    </li>
                ))}
            </ul>
            <div className="controls flex flex-row justify-between sticky bottom-0 bg-[#242424]">
                <button className="bg-blue-500 hover:bg-green-700 text-white font-bold m-2 p-4 w-1/2 rounded" onClick={handleYes}>Yes</button>
                <button className="bg-blue-500 hover:bg-red-700 text-white font-bold m-2 p-4 w-1/2 rounded" onClick={handleNo}>No</button>
            </div>
        </div>
    );
}

export default ProtocolDetails;