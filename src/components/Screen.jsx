import React from 'react'

function Screen({ value }) {
    let screenContent = 'ERROR'

    if (parseInt(value, 10) >= 0 && parseInt(value, 10) <= 999999999 ) {
        screenContent = value
    } 

    return (
        <input type="text" className="screen" value={screenContent} readOnly />
    )
}

export default Screen
