import React from 'react';
import { Link } from 'react-router-dom';

export default class ProtocolList extends React.Component{

    const path = '/furlaxation';

    render() {
        return (
            <>
                <h1>Protocols</h1>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {this.props.protocols.map((protocol, index) => (
                        <li key={index}
                            className="rounded overflow-hidden shadow-lg p-6 bg-white border border-gray-300">
                            <Link to={`${path}/protocol/${index}`} className="text-blue-500 hover:text-blue-800">
                                {protocol.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}