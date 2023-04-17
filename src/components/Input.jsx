import React from 'react'

const Input = (props) => {
    return (
        <div className='app-input-component'>
            <input type={props.type} name={props.name} className={props.class} placeholder={props.placeholder} />
        </div>
    )
}

export default Input