import React, { useState } from 'react'
import FunctionButton from './components/FunctionButton'
import NumberButton from './components/NumberButton'
import OperatorButton from './components/OperatorButton'
import Screen from './components/Screen'

function App() {
    const [dataDisplay, setDisplay] = useState(0)
    const [operation, setOperation] = useState('')
    const [prevNumber, setPrevNumber] = useState(0)
    const [numData, setNumData] = useState([])

    const setData = (value) => {
        let newData = []

        if (numData.length < 9) {
            newData = numData
            newData.push(value)
            setNumData([...newData])
            setDisplay(numData.join(''))
        }
    }

    const operationHandler = (value) => {
        setPrevNumber(dataDisplay)
        setNumData([...[]])
        setDisplay(0)
        setOperation(value)
    }

    const functionHandler = (value) => {
        let result = 0
        if (value === '=') {
            if (operation === '+') result = parseFloat(prevNumber, 10) + parseFloat(dataDisplay, 10)
            else if (operation === '-') result = parseFloat(prevNumber, 10) - parseFloat(dataDisplay, 10)
            else if (operation === 'x') result = parseFloat(prevNumber, 10) * parseFloat(dataDisplay, 10)
            else if (operation === '/') result = parseFloat(prevNumber, 10) / parseFloat(dataDisplay, 10)
            setDisplay(result)
        } else if (value === 'AC') {
            setDisplay(0)
            setNumData([...[]])
            setOperation('')
            setPrevNumber(0)
        }
    }

    return (
        <div>
            <div className="calculator">
                <Screen value={dataDisplay} />

                <div className="button-container">
                    <OperatorButton value="/" setButton={operationHandler} />
                    <OperatorButton value="x" setButton={operationHandler} />
                    <OperatorButton value="+" setButton={operationHandler} />
                    <OperatorButton value="-" setButton={operationHandler} />

                    <NumberButton value="7" setButton={setData} />
                    <NumberButton value="8" setButton={setData} />
                    <NumberButton value="9" setButton={setData} />

                    <NumberButton value="4" setButton={setData} />
                    <NumberButton value="5" setButton={setData} />
                    <NumberButton value="6" setButton={setData} />

                    <NumberButton value="1" setButton={setData} />
                    <NumberButton value="2" setButton={setData} />
                    <NumberButton value="3" setButton={setData} />

                    <NumberButton value="0" setButton={setData} />
                    <NumberButton value="." setButton={setData} />

                    <FunctionButton value="AC" setButton={functionHandler} />
                    <FunctionButton value="=" setButton={functionHandler} />
                </div>
            </div>
        </div>
    )
}

export default App
