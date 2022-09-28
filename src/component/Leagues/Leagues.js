import React, { useEffect, useState } from 'react';
import League from '../League/League';
import SelectItems from '../SelectItems/SelectItems';
import './Leagues.css';

const Leagues = () => {
    const [leagues, setLeagues] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/2/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    }, [])

    const handleItemsOnClick = (item) =>{
        const newItem = [...items, item];
        setItems(newItem);
    }

    return (
        <div className='leagues-container'>
            <h2>Total {leagues.length} leagues information available here!!!</h2>
            <div className='leagues-items'>
                <div className='leagues-list'>
                {
                    leagues.map(league => <League
                        key={league.idLeague}
                        league={league}
                        handleItemsOnClick={handleItemsOnClick}
                    ></League>)
                }
                </div>  

                <div className='select-items-container'>
                    <SelectItems items={items}></SelectItems>
                </div>
            </div>
        </div>
    );
};

export default Leagues;