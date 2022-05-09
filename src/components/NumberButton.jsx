import React from 'react'

function NumberButton({ value, setButton }) {
    return (
        <button type="button" className="button" onClick={() => setButton(value)}>{value}</button>
    )
}

export default NumberButton
