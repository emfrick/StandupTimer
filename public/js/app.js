import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'

import '../css/styles.sass'

import Header from './components/Header'
import TimerList from './components/TimerList'
import Footer from './components/Footer'
import Timer from './components/Timer'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.toggleModal = this.toggleModal.bind(this)
        this.startTimer = this.startTimer.bind(this)

        this.state = {
            list: [],
            showModal: false
        }
    }

    toggleModal() {
        this.setState({
            list: this.state.list,
            showModal: !this.state.showModal
        })
    }

    startTimer(time, units) {
        let timer = moment.duration(time, units)        
        this.state.list.push({
            title: `Timer ${this.state.list.length + 1}`,
            time: `${time} ${units}`
        })

        this.setState({
            list: this.state.list,
            showModal: this.state.showModal
        })

        this.toggleModal()
    }

    render() {
        return (
            <div>
                <Header title={"Standup Timer"} />
                <Timer
                    show={this.state.showModal}
                    onCancel={this.toggleModal}
                    onStart={(time, units) => this.startTimer(time, units)}
                />
                <TimerList list={this.state.list} />
                <Footer btnClickHandler={this.toggleModal} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)