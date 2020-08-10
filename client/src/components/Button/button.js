import React from 'react';
import './style.css';

function Button(props) {
    if (props.href) {
        return (
            <a href={props.href} target="_blank"
                rel="noopener noreferrer">
                <button className='btn btn-dark btn-sm'>
                    {props.children}
                </button></a>
        )
    }
    else if (props.onClick) {
        return (
            <button
                className='btn btn-link btn-sm'
                onClick={props.onClick}
                data-id={props.id}
            >
                {props.children}
            </button>
        )
    }

}

export default Button;

