import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { filterDriversByTeam, orderDrivers, setAllDrivers, setPage, filterDriversByOrigin } from '../../redux/actions.js';
import Paginado from '../Paginado/Paginado.jsx';
import "./Home.css";
import { Link } from 'react-router-dom';

export default function Home() {
    const dispatch = useDispatch();
    const drivers = useSelector((state) => state.drivers);

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ driversPerPage, setDriversPerPage ] = useState(9);
    const indexOfLastDriver = currentPage * driversPerPage;
    const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
    const currentDrivers = drivers.slice(indexOfFirstDriver, indexOfLastDriver);

    const paginado = (pageNumber) => {
      setCurrentPage(pageNumber)
    }
    
    const handleFilter = event => {
      dispatch(filterDriversByTeam(event.target.value));
      dispatch(setPage(1));
    };

    const handleOrder = event => {
      dispatch(orderDrivers(event.target.value));
      dispatch(setPage(1));
    };

    const handleOrigin = event => {
      dispatch(filterDriversByOrigin(event.target.value));
      dispatch(setPage(1));
    };

    useEffect(() => {
      const fetchDrivers = async () => {
        try {

          const responseDB = await axios.get('http://localhost:3001/drivers', {
            headers: {
              'Cache-Control': 'no-cache',
            },
          });

          dispatch(setAllDrivers(responseDB.data));

        } catch (error) {
          console.log(error.message);
          alert("Error al cargar los pilotos.")
        }
      };
    
      fetchDrivers();
      }, []);
      
    return (
        <div className='home' id='home'>
            <select name="filter" onChange={handleFilter}>
              <option value="All">Todas las escuderias</option>
              <option value="McLaren">McLaren</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Prost">Prost</option>
              <option value="Sauber">Sauber</option>
              <option value="Jordan">Jordan</option>
              <option value="Renault">Renault</option>
              <option value="Williams">Williams</option>
              <option value="Minardi">Minardi</option>
              <option value="Ferrari">Ferrari</option>
              <option value="Alpine">Alpine</option>
              <option value="Lotus">Lotus</option>
              <option value="Caterham">Caterham</option>
              <option value="Toro Rosso">Toro Rosso</option>
              <option value="Alfa Romeo">Alfa Romeo</option>
              <option value="BMW">BMW</option>
              <option value="Toyota">Toyota</option>
              <option value="Virgin">Virgin</option>
              <option value="Marussia">Marussia</option>
              <option value="BAR">BAR</option>
              <option value="Super Aguri">Super Aguri</option>
              <option value="Red Bull">Red Bull</option>
              <option value="Spyker">Spyker</option>
              <option value="Porsche">Porsche</option>
              <option value="Force India">Force India</option>
            </select>
            <select name="createdInDb" onChange={handleOrigin}>
              <option value="all">Todos</option>
              <option value="DB">Base de Datos</option>
              <option value="API">API</option>
            </select>
            <select name="order" onChange={handleOrder}>
              <option value="aNombre">Ascendente alfabetico</option>
              <option value="dNombre">Descendente alfabetico</option>
              <option value="dNacimiento">Edad ascendente</option>
              <option value="aNacimiento">Edad descendente</option>
            </select>
            <Paginado
              driversPerPage = { driversPerPage }
              drivers = { drivers.length }
              paginado = { paginado }
            />
            <Cards drivers={currentDrivers}/>
            
        </div>
    );
}
