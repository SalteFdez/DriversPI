import React from "react";
import "./Paginado.css";

export default function Paginado({ driversPerPage, drivers, paginado }) {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(drivers / driversPerPage); i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <div className="paginado-container">
            <ul className="paginado">
                {pageNumbers &&
                    pageNumbers.map((number) => (
                        <li
                            className={`number ${number === paginado ? 'active' : ''}`}
                            key={number}
                        >
                            <button onClick={() => paginado(number)}>{number}</button>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
