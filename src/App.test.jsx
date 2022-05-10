import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App'

it('Carga UI', () => {
    render(<App />)
})

it('Botón añade número a la pantalla', async () => {
    render(<App />)

    const element = screen.getByText('1')
    expect(element).toBeInTheDocument()

    await userEvent.click(element)
    expect(screen.getByDisplayValue('1')).toBeInTheDocument()

    await userEvent.click(element)
    expect(screen.getByDisplayValue('11')).toBeInTheDocument()
})

it('5 + 5 = 10 y despliega correctamente', async () => {
    render(<App />)

    const num5 = screen.getByText('5')
    expect(num5).toBeInTheDocument()

    const sumButton = screen.getByText('+')
    expect(sumButton).toBeInTheDocument()

    const equalsButton = screen.getByText('=')
    expect(equalsButton).toBeInTheDocument()

    await userEvent.click(num5)
    expect(screen.getByDisplayValue('5')).toBeInTheDocument()

    await userEvent.click(sumButton)
    expect(screen.getByDisplayValue('0')).toBeInTheDocument()

    await userEvent.click(num5)
    expect(screen.getByDisplayValue('5')).toBeInTheDocument()

    await userEvent.click(equalsButton)
    expect(screen.getByDisplayValue('10')).toBeInTheDocument()
})

// it('increases the squared label when button is clicked', async () => {
//     render(<App />)

//     const button = screen.getByText(/count\ is\:\s+0/)
//     expect(button).toBeInTheDocument()

//     await userEvent.click(button)
//     expect(screen.getByText(/S(q|k)u(a)+red?\:\s+1/)).toBeInTheDocument()

//     await userEvent.click(button)
//     expect(screen.getByText(/S(q|k)u(a)+red?\:\s+4/)).toBeInTheDocument()
// })

// it('renders an input', async () => {
//     render(<App />)

//     const input = await screen.findByPlaceholderText(/Enter your name:/)
//     expect(input).toBeInTheDocument()
// })

// it('receives only numbers', async () => {
//     render(<App />)

//     const input = await screen.findByPlaceholderText(/Enter your name:/)
//     expect(input).toBeInTheDocument()

//     await userEvent.type(input, 'Dennis', {
//         delay: 20,
//     })

//     expect(screen.getByDisplayValue('ERROR')).toBeInTheDocument()
// })
