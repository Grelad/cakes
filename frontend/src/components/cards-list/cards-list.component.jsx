import React from 'react';

import  CardsService  from '../cards-service/cards-service.component';
import { CardImg } from 'reactstrap'

const  cardsService  =  new  CardsService();

class  CardsList  extends  React.Component {

    constructor(props) {
        super(props);
        this.state  = {
            cards: [],
            nextPageURL:  ''
        };
        this.nextPage  =  this.nextPage.bind(this);
        this.handleDelete  =  this.handleDelete.bind(this);
    }

    componentDidMount() {
        var  self  =  this;
        cardsService.getCards().then(function (result) {
            console.log(result);
            self.setState({ cards:  result.data, nextPageURL:  result.nextlink})
        });
    }
    handleDelete(e,pk){
        var self  =  this;
        cardsService.deleteCard({pk :  pk}).then(()=>{
            var newArr  =  self.state.cards.filter(function(obj) {
                return  obj.pk  !==  pk;
            });

            self.setState({customers:  newArr})
        });
    }

    nextPage(){
        var  self  =  this;
        console.log(this.state.nextPageURL);
        cardsService.getCardsByURL(this.state.nextPageURL).then((result) => {
            self.setState({ cards:  result.data, nextPageURL:  result.nextlink})
        });
    }
    render() {

        return (
            <div  className="cards-list">
                <table  className="table">
                <thead  key="thead">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {this.state.cards.map( c  =>
                    <tr  key={c.pk}>
                    <td>{c.pk}  </td>
                    <td>{c.name}</td>
                    <td>{c.description}</td>
                    <td><CardImg top width='100%' src={c.image}/></td>
                    <td>{c.price}</td>
                    <td>
                    <button  onClick={(e)=>  this.handleDelete(e,c.pk) }> Delete</button>
                    <a  href={"/card/" + c.pk}> Update</a>
                    </td>
                </tr>)}
                </tbody>
                </table>
                <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
            </div>
        );
    }
}

export  default  CardsList;