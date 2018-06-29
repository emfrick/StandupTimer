import React, { Component } from 'react'
import moment from 'moment'

// Update interval is one minute
const UPDATE_INTERVAL = 1000

class Timer extends Component {

    constructor(props) {
        super(props)

        let duration = moment.duration(props.minutes, 'minutes')

        let timer = setInterval(() => {
            // TODO - Send the update (`Time Remaining: ${duration.minutes()} minutes, ${duration.seconds()} seconds`)
            this.setState({
                remaining_time: `${duration.minutes()} minutes, ${duration.seconds()} seconds`
            })
            duration.subtract(moment.duration(UPDATE_INTERVAL, 'milliseconds'))

            if (duration.asMilliseconds() <= 0) {
                clearInterval(timer)
                // TODO - Send the timer complete notification
                this.setState({
                    remaining_time: "Timer Complete"
                })
            }
        }, UPDATE_INTERVAL)

        this.state = {
            remaining_time: `${duration.minutes()} minutes, ${duration.seconds()} seconds`
        }
    }

    render() {
        return (
            <h1>{this.state.remaining_time}</h1>
        )
    }
}

export default Timer