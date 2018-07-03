import React from 'react'

export default function Timer(props) {

    if (props.show) {
        return (
            <div className="modal-cover">
                <div className="timer-modal">
                    <h1>Timer Modal</h1>
                    <input type="text" placeholder="e.g. 30m" />
                    <div>
                        <button className="btn-cancel">Cancel</button>
                        <button className="btn-start">Start</button>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}