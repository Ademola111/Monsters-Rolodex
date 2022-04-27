import React from 'react';

import { Card } from '../card.components/card';

import './card-list.style.css';

export const Cardlist = props => {
return (<div className='Card-list'>
    {props.monsters.map(monster => (<Card key={monster.id} monster={monster} />))}
    </div>)
}