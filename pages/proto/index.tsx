import React, { Component } from 'react'
import { Layout, Button, Header, Ad } from '../../components'
import { LayoutOne } from '../../components'
import withData from '../../lib/widthData'


class App extends Component {
    render() {
        return (
            <div>
                <LayoutOne title="Proto Page" />
            </div>
        )
    }
}

export default withData(App)