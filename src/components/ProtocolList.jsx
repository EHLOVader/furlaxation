import React from 'react';
import { Link } from 'react-router-dom';

export default class ProtocolList extends React.Component{

    render() {
        return (
            <>
                <h1>Furlaxation</h1>
                <p>Welcome! Furlaxation is a web app to help you train your furry friend through the use of
                relaxation protocols.
                The relaxation protocol, based on <a href="https://web.archive.org/web/20240408134659/https://www.karenoverall.com/wp-content/uploads/2020/06/Protocol-for-relaxation_Overall.pdf" target="_blank">Karen L. Overall's research</a></p>
                <h2>Protocols</h2>
                <ul className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                    {this.props.protocols.map((protocol, index) => (
                        <li key={index}
                            className="protocol-button">
                            <Link to={`/protocol/${index}`} className="text-gray-950" title={protocol.name}>
                                {protocol.id}
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}