import './card.styles.scss';

import React from 'react'
import ReactCardFlip from 'react-card-flip'
import {CardImg} from 'reactstrap'

class Card extends React.Component {
    state = {
        isFlipped: false,
    };

    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <div onClick={this.handleClick} className='card-container'>
                    <img src={this.props.card.image} className='card-image' alt="card"/>
                    <div className='card-info'>
                        <h2> {this.props.card.name} </h2>
                        <p><strong>Цена:</strong>{this.props.card.price}₴ </p>
                    </div>
                </div>
                <div onClick={this.handleClick} className='card-container'>
                    <p><strong>Описание:</strong>{this.props.card.description}</p>
                </div>
            </ReactCardFlip>
        );
    }
}

export default Card;