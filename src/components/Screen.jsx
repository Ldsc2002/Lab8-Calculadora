import React from 'react'

function Screen({ value }) {
    let screenContent = 'ERROR'

    if (parseFloat(value, 10) >= 0 && parseFloat(value, 10) <= 999999999 && value.length < 10) {
        screenContent = value
    } 

    return (
        <input type="text" className="screen" value={screenContent} readOnly />
    )
}

export default Screen
