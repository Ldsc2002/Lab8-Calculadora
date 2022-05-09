import React from 'react'
import NumberButton from './components/NumberButton'
import Screen from './components/Screen'

function App() {
    return (
        <div>
            <div className="calculator">
                <Screen value="Testing" />

                <div className="button-container">
                    <button type="button" className="operator">/</button>
                    <button type="button" className="operator">+</button>
                    <button type="button" className="operator">-</button>
                    <button type="button" className="operator">x</button>

                    <NumberButton value="7" />
                    <NumberButton value="8" />
                    <NumberButton value="9" />

                    <NumberButton value="4" />
                    <NumberButton value="5" />
                    <NumberButton value="6" />

                    <NumberButton value="1" />
                    <NumberButton value="2" />
                    <NumberButton value="3" />

                    <NumberButton value="0" />
                    <NumberButton value="." />

                    <button type="button" className="all-clear">AC</button>
                    <button type="button" className="equal-sign">=</button>
                </div>
            </div>
        </div>
    )
}

export default App
