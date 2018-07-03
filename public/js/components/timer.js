import React, { Component } from 'react'

class Timer extends Component {

    constructor(props) {
        super(props)

        this.setTime = this.setTime.bind(this)

        this.state = {
            placeholder: "e.g. 30m",
            time: ""
        }
    }

    setTime(evt) {
        this.setState({
            time: evt.target.value
        })
    }

    render() {
        if (this.props.show) {
            return (
                <div className="modal-cover">
                    <div className="timer-modal">
                        <h1>Timer Modal</h1>
                        <input type="text" placeholder={this.state.placeholder} value={this.state.time} onChange={this.setTime} />
                        <div>
                            <button className="btn-cancel" onClick={this.props.onCancel}>Cancel</button>
                            <button className="btn-start" onClick={() => this.props.onStart(this.state.time)}>Start</button>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }    
}

export default Timer