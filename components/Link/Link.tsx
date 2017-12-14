import React from 'react'

interface Props {
    route?: string
    params?: {}
    prefetch?: boolean
    as?: any
    classes?: Array<string>
}
const Route = require('../../routes/routes')
const { Link } = Route

export const GLink: React.SFC<Props> = (props) => {
    const { params, prefetch, route, classes, as, children, ...rest } = props
    const classString = classes.join(' ')
    return (
        <Link route={route} prefetch={prefetch} as={as} params={params} >
            <a {...rest} className={classString}>
                {children}
            </a>
        </Link>
    )
}

GLink.defaultProps = {
    prefetch: true,
    route: "#"
}