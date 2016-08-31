import React, { Component, PropTypes } from 'react'
import { filterName, filterId } from '../../utils/Filter'

class Text extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        let { onChange, filter } = this.props
        return (
            <li>
                <label className='cell label'><span>{filter.title}</span></label>
                <span className='cell'><input type='text'
                    className='input-text no-changes'
                    name={filterName(filter.name)}
                    onChange={onChange}
                    defaultvalue={filter.value !== null ? filter.value : ''}
                    id={filterId(filter.name)} /></span>
            </li>
        )
    }
}


Text.propTypes = {
    filter: PropTypes.object.isRequired
}

export default Text
