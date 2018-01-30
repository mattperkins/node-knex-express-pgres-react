import React from 'react'
import ReactDOM from 'react-dom'

import TopNav from './TopNav'
import ItemsBody from './ItemsBody'

class App extends React.Component {

    render() {
        return (
            <div>
                <TopNav />
                <div className="wrapper">
                    <ItemsBody />
                </div>
            </div>
        )
    }
}


const render = document.getElementById('app')
ReactDOM.render(<App />, render)