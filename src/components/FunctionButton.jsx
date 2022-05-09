import React from 'react'

function FunctionButton({ value, setButton }) {
    let componentClass = ''

    if (value === 'AC') componentClass = 'all-clear'
    else if (value === '=') componentClass = 'equal-sign'

    return (
        <button type="button" className={componentClass} onClick={() => setButton(value)}>{value}</button>
    )
}

export default FunctionButton
