import React from 'react';

function Benefits(props) {
    return (
        <div className="col-12 col-md-3 p-3 border rounded border-primary">
            <h4 className="m-1 p-1">{props.titulo}</h4>
            <ul className="list-unstyled custom-justify mt-3">
                {props.beneficios.map((beneficio, index) => (
                    <li className="mb-1" key={index}>
                        <i className="fas fa-check-circle me-2 text-primary"></i>{beneficio}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Benefits;
