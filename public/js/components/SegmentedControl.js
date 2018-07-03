import React, { Component } from 'react'

import '../../css/segmented.sass'

class SegmentedControl extends Component {

    constructor(props) {
        super(props)

        this.handleSelect = this.handleSelect.bind(this)

        this.state = {
            selected: this.props.default
        }
    }

    handleSelect(control) {
        this.setState({
            selected: control
        })

        this.props.onSelect(control)
    }

    render() {
        return (
            <div className="segmented-control">
                {
                    this.props.items.map((control) => {
                        let classes = ['']
                        if (control === this.state.selected) {
                            classes.push('selected')
                        }

                        let el = <div className={classes.join(' ')} key={control.value} onClick={() => this.handleSelect(control)}>{control.label}</div>
                        return el
                    })
                }
            </div>
        )        
    }
}

export default SegmentedControl