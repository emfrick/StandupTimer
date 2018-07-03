import React from 'react'
import ReactDOM from 'react-dom'

import '../css/styles.sass'

import Header from './components/Header'
import TimerList from './components/TimerList'
import Footer from './components/Footer'
import Timer from './components/Timer'

const dummyData = [
    { title: "Timer 1", blurb: "Let's Go", time: "60 mins" },
    { title: "Timer 2", blurb: "Keep Going", time: "30 mins" },
    { title: "Timer 3", blurb: "You can do it", time: "45 mins" },
    { title: "Timer 4", blurb: "Blurb", time: "30 mins" },
    { title: "Timer 5", blurb: "Something here", time: "15 mins" },
    { title: "Timer 6", blurb: "Another one", time: "25 mins" },
    { title: "Timer 7", blurb: "Ok Again", time: "45 mins" }
]

class App extends React.Component {

    constructor(props) {
        super(props)

        this.btnClickHandler = this.btnClickHandler.bind(this)

        this.state = {
            showModal: false
        }
    }

    btnClickHandler() {
        this.setState({
            showModal: true
        })
    }

    render() {
        return (
            <div>
                <Header title="Standup Timer" />
                <Timer show={this.state.showModal} />
                <TimerList list={dummyData} />
                <Footer btnClickHandler={this.btnClickHandler} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)