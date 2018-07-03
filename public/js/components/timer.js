import React, { Component } from 'react'

import SegmentedControl from './SegmentedControl'

const options = [
    { label: 'Hrs', value: 'hours'},
    { label: 'Mins', value: 'minutes'},
    { label: 'Secs', value: 'seconds' }
]

class Timer extends Component {

    constructor(props) {
        super(props)

        this.setTime = this.setTime.bind(this)
        this.setUnits = this.setUnits.bind(this)

        this.state = {
            time: 15,
            units: options[1]
        }
    }

    setTime(evt) {
        this.setState({
            time: parseInt(evt.target.value),
            units: this.state.units
        })
    }

    setUnits(item) {
        this.setState({
            time: this.state.time,
            units: item
        })
    }

    render() {
        if (this.props.show) {
            return (
                <div className="modal-cover">
                    <div className="timer-modal">
                        <h1>Timer Modal</h1>
                        <input type="number" value={this.state.time} onChange={this.setTime} />
                        <SegmentedControl items={options} default={this.state.units} onSelect={(item) => this.setUnits(item)} />
                        <div>
                            <button className="btn-cancel" onClick={this.props.onCancel}>Cancel</button>
                            <button className="btn-start" onClick={() => this.props.onStart(this.state.time, this.state.units.value)}>Start</button>
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