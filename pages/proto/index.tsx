import React, { Component } from 'react'
import { Layout, Button, Header, FrontPage } from '../../components'
import { LayoutOne } from '../../components'
import widthData from '../../lib/widthData'

const App = () => <LayoutOne title="Proto Page" />

export default widthData(App)