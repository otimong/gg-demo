import React, { Component } from 'react'

interface Props {
    label?: string
    name?: string
    checked?: boolean
    value?: any
    onChange?: (e) => void
}

export class CheckBox extends Component<Props, {}> {

    static defaultProps: Props = {
        label: "Default Label"
    }

    toggle = (e) => {
        const click = this.props.onChange
        if (click) {
            click(e)
        }
    }
    render() {
        const { label, onChange, ...others } = this.props
        return (
            <div className="flex items-center pl-2 pr-2">
                <label className="block text-grey font-bold">
                    <input {...others} className="mr-2" type="checkbox" onChange={e => this.toggle(e.target.value)} />
                    <span className="text-sm">
                        {label}
                    </span>
                </label>
            </div>
        )
    }
}