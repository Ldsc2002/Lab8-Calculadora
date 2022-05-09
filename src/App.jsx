import React from 'react'
import FunctionButton from './components/FunctionButton'
import NumberButton from './components/NumberButton'
import OperatorButton from './components/OperatorButton'
import Screen from './components/Screen'

function App() {
    return (
        <div>
            <div className="calculator">
                <Screen value="Testing" />

                <div className="button-container">
                    <OperatorButton value="/" />
                    <OperatorButton value="x" />
                    <OperatorButton value="+" />
                    <OperatorButton value="-" />

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

                    <FunctionButton value="AC" />
                    <FunctionButton value="=" />
                </div>
            </div>
        </div>
    )
}

export default App
