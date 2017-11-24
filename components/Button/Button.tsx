import * as React from 'react';
import { Icon } from '../Icon'
import * as classNames from 'classnames';


export interface ButtonProps {
    icon?: string

    iconPosition?: 'left' | 'right'
	/**
	 * Add more style classes to the component
	 */
    propClasses?: Array<string>
	/**
	 * If provided, will turn the button into a link 
	 */
    href?: string
	/**
	 * Font scale. A bigger scale means small text. 6 is smaller than 1 
	 */
    fontScale?: number
	/**
	 * An object with css in-line styles 
	 */
    style?: React.CSSProperties

	/**
	 * When you click on the button
	 */
    onClick?: () => void

    size?: 'small' | 'medium' | 'large'

    type?: 'primary' | 'secondary'
}

export class Button extends React.Component<ButtonProps, Object> {

    static defaultProps: ButtonProps = {
        size: 'medium',
        type: 'primary'
    }

    render() {
        const { propClasses, href, type, style, fontScale = 6, children, onClick, icon, iconPosition, size, ...others } = this.props;
        const buttonClasses = classNames(
            'p-2',
            'rounded',
            {
                'py-1': size === 'small',
                'py-2': size === 'medium',
                'py-4': size === 'large',
                'bg-blue': type === 'primary',
                'text-white': type === 'primary',
                'bg-yellow': type === 'secondary'
            },
            propClasses
        );
        const iconClasses = classNames(
            'ph2',
            {
                'fr': iconPosition === 'right',
                'fl': iconPosition === 'left'
            })

        const buttonContent = typeof children === 'string' ? children.toString() : 'Button Text';

        let button = (<button {...others} className={buttonClasses} onClick={onClick}>
            {icon && <Icon type={icon} classes={iconClasses} />}
            {buttonContent}
        </button>);

        return href
            ?
            <a {...others} className={buttonClasses} href={href}>{buttonContent}</a>
            :
            button;
    }
}