import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import './League.css';

const League = (props) => {
    const {league, handleItemsOnClick} = props;
    const {strLeague, strSport, strLeagueAlternate} = league;
    return (
        <div className='leagues-details'>
            <div className='league-items'>
                <h3>Name: {strLeague}</h3>        
                <p>Sports Type: {strSport}</p>        
                <p>League Type: {strLeagueAlternate}</p>        
            </div>
            <button onClick={() => handleItemsOnClick(league)} className='btn-select'>
                Select
                <FontAwesomeIcon className='icon' icon={faCheckDouble}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default League;