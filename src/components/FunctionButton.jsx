import React from 'react'

function FunctionButton({ value }) {
    let componentClass = ''

    if (value === 'AC') componentClass = 'all-clear'
    else if (value === '=') componentClass = 'equal-sign'

    return (
        <button type="button" className={componentClass}>{value}</button>
    )
}

export default FunctionButton
