import React, { Component } from 'react'
import classNames from 'classnames'

export interface Props {
    id?: number
    width: number | string
    height: number | string
    backgroundColor?: string
    styles?: React.CSSProperties
    classes?: string
}

export class Ad extends Component<Props, Object> {
    static defaultProps: Props = {
        height: `${180}%`,
        width: 180,
        backgroundColor: 'aqua'
    }
    static displayName = "Ad"
    render() {
        const { width, styles, height, backgroundColor, classes } = this.props

        const style: React.CSSProperties = {
            width,
            height,
            backgroundColor,
            ...styles
        }
        const styleMix = Object.assign({}, style, styles)
        return <div style={styleMix} className={classes}></div>
    }
}