import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
import Home from '../app/page'
 
describe('Home', () => {
  it('renders the dashboard button', () => {
    render(<Home/>)
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  })
})