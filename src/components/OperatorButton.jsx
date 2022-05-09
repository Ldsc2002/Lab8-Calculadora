import React from 'react'

function OperatorButton({ value, setButton }) {
    return (
        <button type="button" className="operator" onClick={() => setButton(value)}>{value}</button>
    )
}

export default OperatorButton
