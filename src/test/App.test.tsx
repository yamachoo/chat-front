import { screen } from '@testing-library/react'
import React from 'react'
import { App } from '../components/App'
import { render } from './test-utils'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/ようこそ Chat App へ！/i)
  expect(linkElement).toBeInTheDocument()
})
