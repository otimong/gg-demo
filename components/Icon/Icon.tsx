import * as React from 'react'
import * as classnames from 'classnames'

export interface IconProps {
    type: string
    size?: string
    classes?: string
    onClick?: () => void
}

export class Icon extends React.Component<IconProps, Object> {

    public static defaultProps: Partial<IconProps> = {
        size: 'lg'
    }
    render() {
        const { size, type, classes, ...others } = this.props
        const iconClassNames = classnames(
            {
                'fa': true,
                [`fa-${size}`]: true,
                [`fa-${type}`]: true

            },
            classes
        )
        return (
            <i {...others} className={iconClassNames} aria-hidden="true"></i>
        )
    }
}
