import './cards-list.styles.scss';
import React from 'react';
import Card from '../card/card.component'
import HTTP from "../cards-service/cards-service.component";


class CardsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }

    componentDidMount() {
        HTTP.getCards().then(result => this.setState({cards: result.data}))
    }


    render() {
        console.log(this.state.cards)
        return (
            <div className="card-list">
                {this.state.cards.map(card => (
                    <Card key={card.id} card={card}/>
                ))}
            </div>
        )
    }
}

export default CardsList;