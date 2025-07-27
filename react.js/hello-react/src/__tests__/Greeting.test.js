import '@testing-library/jest-dom';
import {render,screen} from '@testing-library/react'
import Greeting from "../Greeting"

test('greeting test1' , () => {
    
    render(<Greeting name="ramesh"  />)
    const heading = screen.getByText(/Welcome to Ramesh/i)
    expect(heading).toBeInTheDocument();
})