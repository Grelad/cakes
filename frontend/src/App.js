import CardsList from './components/cards-list/cards-list.component'
import CardsCreateUpdate from './components/card-create-update/card-create-update.component'
import './App.css';

import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import React from 'react';


class App extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    {/*<Route exact path='/' component={Homepage}/>*/}
                    <div className="content">
                        <Route path="/" exact component={CardsList}/>
                        <Route path="/card/:pk" component={CardsCreateUpdate}/>
                        <Route path="/card/" exact component={CardsCreateUpdate}/>
                    </div>
                </Switch>
            </div>
        );
    }
}


export default App;