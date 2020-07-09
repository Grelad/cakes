//import './card-list.styles.css';
import React from 'react';
import Card from '../card/card.component'


const CardsList = props => (
  <div className="cards-list">
      {props.description}
        <Card key={props.id} card={ props }/>
  </div>
);

export default CardsList;