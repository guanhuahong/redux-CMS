import React, { Component } from 'react'
import Filter from './Filter'

let filters = [{
        name: 'create_time',
        title: '创建时间',
        value: '2016/8/31',
        inputType: 'Text',
    }, {
        name: 'last_mod_time',
        title: '修改时间',
        value: null,
        inputType: 'Text',
    }, {
        name: 'sys_platform',
        title: '产品线',
        value: 6,
        inputType: 'Text',
    }, {
        name: 'id',
        title: '比赛ID',
        value: null,
        inputType: 'Text',
    }, {
        name: 'name',
        title: '比赛名称',
        value: null,
        inputType: 'Text',
    }, {
        name: 'sort',
        title: '排序',
        value: null,
        inputType: 'Text',
    }, {
        name: 'platform',
        title: '平台',
        value: null,
        inputType: 'Text',
    }]

class App extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Filter filters={filters} />
            </div>
        )
    }
}

export default App
