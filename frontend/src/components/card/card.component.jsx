//import './card.styles.css';

import React from 'react'
import ReactCardFlip from 'react-card-flip'
// import {CardImg} from 'reactstrap'
import CardsService from "../cards-service/cards-service.component";

const cardsService = new CardsService();

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
        };
        this.handleClick = this.handleClick.bind(this);
        // cardsService.getCards().then(function (result) {
        //     console.log(result)
        //
        // })
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
    }

    componentDidMount() {
        let self = this;
        cardsService.getCards().then(function (result) {
            console.log(result.data);
        });
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <div onClick={this.handleClick} className='card-container'>
                        {/*<img src={this.state.props} alt="card"/>*/}
                        <h2> {this.result} </h2>
                        {/*<p> {c.price}</p>*/}
                </div>
                <div onClick={this.handleClick} className='card-container'>
                        {/*<p><strong>Phone:</strong> {} </p>*/}
                </div>
            </ReactCardFlip>
        );
    }
}

export default Card;