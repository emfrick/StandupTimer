import React, { Component } from 'react'

class TimerList extends Component {

    render() {
        return (
            <ul>
                {
                    this.props.list.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className="checkbox">&#x2714;</div>
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <p>{item.blurb}</p>
                                </div>
                                <div className="time">{item.time}</div>
                            </li>
                        )
                    })
                }                
            </ul>
        )
    }
}

export default TimerList