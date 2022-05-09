import React from 'react'

function Screen({ value }) {
    return (
        <input type="text" className="screen" value={value} readOnly />
    )
}

export default Screen
