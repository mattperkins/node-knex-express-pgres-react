import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import TopNav from './TopNav'
import ItemsBody from './ItemsBody'
import SingleItem from './SingleItem';
import CreateTodo from './CreateTodo'

class App extends React.Component {

    render() {
        return (
        <BrowserRouter>
            <div>
            <TopNav />
                <div className="wrapper">
                    <Switch>
                        <Route path="/new" component={CreateTodo} />
                        <Route path="/:id" component={SingleItem} />
                        <Route path="/" exact component={ItemsBody} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
        )
    }
}


const render = document.getElementById('app')
ReactDOM.render(<App />, render)