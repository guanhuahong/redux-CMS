import React, { Component } from 'react'
import Text from '../components/Filter/Text'

class Filter extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        let { filters } = this.props
        return (
            <div className='filter-container'>
                <ul className='filter'> {
                    filters.map( filter => (
                        <Text key={filter.name} filter={filter} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Filter                    
