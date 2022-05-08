import React from 'react'
import { render } from '@testing-library/react'
// import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App'

it('Renders', () => {
    render(<App />)
})

// it('renders a count button', () => {
//     render(<App />)

//     const element = screen.getByText(/count\ is\:/)
//     expect(element).toBeInTheDocument()
// })

// it('increases count when button is clicked', async () => {
//     render(<App />)

//     const element = screen.getByText(/count\ is\:\s+0/)
//     expect(element).toBeInTheDocument()

//     await userEvent.click(element)
//     expect(screen.getByText(/count\ is\:\s+1/)).toBeInTheDocument()

//     await userEvent.click(element)
//     expect(screen.getByText(/count\ is\:\s+2/)).toBeInTheDocument()
// })

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
