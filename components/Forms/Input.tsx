import React, { Component } from 'react'
import { Button } from '../Button'
import classNames from 'classnames'

export interface Props {
    autoFocus?: boolean
    id?: string
    label?: string
    placeholder?: string
    type?: 'text' | 'number' | 'email' | 'search'
    size?: 'small' | 'medium' | 'large'
    width?: string
    propClasses?: string
    [x: string]: any
}

interface Inputstate {
    clicked?: boolean
}

export class Input extends Component<Props, Inputstate> {

    constructor(props) {
        super(props)
        this.state = {
            clicked: true
        }
    }

    static defaultProps: Props = {
        placeholder: 'Default Place Holder',
        width: '30',
        type: 'text',
        autoFocus: false,
        size: 'medium'
    }
    public input: (HTMLInputElement | HTMLTextAreaElement)

    componentDidMount() {
        if (this.props.autoFocus) {
            this.input.autofocus;
        }
    }

    render() {
        console.log(this.state)

        const { label, id, size, propClasses, placeholder, width, type, ...others } = this.props

        const inputClasses = classNames(
            'f5', 'input-reset', 'bn', 'fl', 'black-80', 'bg-light-gray', 'lh-solid', 'br2-ns', 'br--left-ns',
            {
                [`w-${width}`]: true,

                'pa1': size === 'small',
                'pa2': size === 'medium',
                'pa3': size === 'large'
                ,
            },
            propClasses
        )

        const searchClasses = ['f5', 'button-reset', 'fl', 'tc', 'bn', 'bg-animate', 'white', 'pointer', 'w-100', 'w-25-m', 'w-10-l', 'br2-ns', 'br--right-ns']

        return (<div>
            {label && <label htmlFor={id}>{label} </label>}
            <div className="cf">
                <input {...others} className={inputClasses} ref={input => { this.input = input! }} onChange={() => this.setState({ clicked: !this.state.clicked })} placeholder={placeholder} type={type} />
                {type === 'search' && <Button propClasses={searchClasses}>Søg</Button>}
            </div>
        </div>)
    }
}