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

it('El usuario solo puede ingresar 9 números', async () => {
    render(<App />)

    const element = screen.getByText('1')
    expect(element).toBeInTheDocument()

    await userEvent.click(element)
    expect(screen.getByDisplayValue('1')).toBeInTheDocument()

    await userEvent.click(element)
    expect(screen.getByDisplayValue('11')).toBeInTheDocument()

    await userEvent.click(element)
    expect(screen.getByDisplayValue('111')).toBeInTheDocument()
    
    await userEvent.click(element)
    expect(screen.getByDisplayValue('1111')).toBeInTheDocument()
    
    await userEvent.click(element)
    expect(screen.getByDisplayValue('11111')).toBeInTheDocument()
    
    await userEvent.click(element)
    expect(screen.getByDisplayValue('111111')).toBeInTheDocument()
    
    await userEvent.click(element)
    expect(screen.getByDisplayValue('1111111')).toBeInTheDocument()
    
    await userEvent.click(element)
    expect(screen.getByDisplayValue('11111111')).toBeInTheDocument()

    await userEvent.click(element)
    expect(screen.getByDisplayValue('111111111')).toBeInTheDocument()

    await userEvent.click(element)
    expect(screen.getByDisplayValue('111111111')).toBeInTheDocument()

    await userEvent.click(element)
    expect(screen.getByDisplayValue('111111111')).toBeInTheDocument()
})

it('Resultado negativo muestra ERROR', async () => {
    render(<App />)

    const num5 = screen.getByText('5')
    expect(num5).toBeInTheDocument()

    const num6 = screen.getByText('6')
    expect(num6).toBeInTheDocument()

    const substractButton = screen.getByText('-')
    expect(substractButton).toBeInTheDocument()

    const equalsButton = screen.getByText('=')
    expect(equalsButton).toBeInTheDocument()

    await userEvent.click(num5)
    expect(screen.getByDisplayValue('5')).toBeInTheDocument()

    await userEvent.click(substractButton)
    expect(screen.getByDisplayValue('0')).toBeInTheDocument()

    await userEvent.click(num6)
    expect(screen.getByDisplayValue('6')).toBeInTheDocument()

    await userEvent.click(equalsButton)
    expect(screen.getByDisplayValue('ERROR')).toBeInTheDocument()
})

it('Resultado con muchos dígitos muestra ERROR', async () => {
    render(<App />)

    const num2 = screen.getByText('2')
    expect(num2).toBeInTheDocument()

    const num7 = screen.getByText('7')
    expect(num7).toBeInTheDocument()

    const divideButton = screen.getByText('/')
    expect(divideButton).toBeInTheDocument()

    const equalsButton = screen.getByText('=')
    expect(equalsButton).toBeInTheDocument()

    await userEvent.click(num2)
    expect(screen.getByDisplayValue('2')).toBeInTheDocument()

    await userEvent.click(num2)
    expect(screen.getByDisplayValue('22')).toBeInTheDocument()

    await userEvent.click(divideButton)
    expect(screen.getByDisplayValue('0')).toBeInTheDocument()

    await userEvent.click(num7)
    expect(screen.getByDisplayValue('7')).toBeInTheDocument()

    await userEvent.click(equalsButton)
    expect(screen.getByDisplayValue('ERROR')).toBeInTheDocument()
})

it('Operaciones con decimales', async () => {
    render(<App />)

    const num2 = screen.getByText('2')
    expect(num2).toBeInTheDocument()

    const num7 = screen.getByText('7')
    expect(num7).toBeInTheDocument()

    const dotButton = screen.getByText('.')
    expect(dotButton).toBeInTheDocument()

    const sumButton = screen.getByText('+')
    expect(sumButton).toBeInTheDocument()

    const equalsButton = screen.getByText('=')
    expect(equalsButton).toBeInTheDocument()

    await userEvent.click(num2)
    expect(screen.getByDisplayValue('2')).toBeInTheDocument()

    await userEvent.click(dotButton)
    expect(screen.getByDisplayValue('2.')).toBeInTheDocument()

    await userEvent.click(num2)
    expect(screen.getByDisplayValue('2.2')).toBeInTheDocument()

    await userEvent.click(sumButton)
    expect(screen.getByDisplayValue('0')).toBeInTheDocument()

    await userEvent.click(num7)
    expect(screen.getByDisplayValue('7')).toBeInTheDocument()

    await userEvent.click(equalsButton)
    expect(screen.getByDisplayValue('9.2')).toBeInTheDocument()
})