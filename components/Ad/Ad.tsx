import  * as React from 'react'

export interface Props {
    id?: number
    width: number | string
    height: number | string
    backgroundColor?: string
    styles?: React.CSSProperties
}

export class Ad extends React.Component<Props, Object> {
    static defaultProps: Props = {
        height: `${180}%`,
        width: 180,
        backgroundColor: 'aqua'
    }
    render() {
        const { width, styles, height, backgroundColor } = this.props
        const style: React.CSSProperties = {
            width,
            height,
            backgroundColor,
            ...styles
        }
        const styleMix = Object.assign({}, style, styles)
        return <div style={styleMix}></div>
    }
}