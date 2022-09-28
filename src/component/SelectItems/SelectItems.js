import React from 'react';
import './SelectItems.css';

const SelectItems = (props) => {
    const {items} = props;
    console.log(items);

    let name = '';

    for(const item of items){
        name = item.strLeague;
    }

    return (
        <div className='selected-items-container'>
            <h3>Selected Leagues: {items.length}</h3>
            <p>Name: {name}</p>
        </div>
    );
};

export default SelectItems;