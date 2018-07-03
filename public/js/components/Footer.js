import React from 'react'

export default function Footer(props) {
    return (
        <footer>
            <button onClick={props.btnClickHandler}>Start New Timer</button>
        </footer>
    )
}