import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// basic test format: test('description of test', () => {
    // Arrange: render the component and find the elements you need to work with
    // Act: do stuff -- fill out forms, click buttons, etc
    // Assert: make sure that the component behaved in the way you'd expect it to.
// })

// the regular expression /text/i allows any case variation of "text" string: Text, TEXT, tExT, etc.

test('renders App without errors', () => {
    // Arrange
    render(<App />);
    // no act or assert steps needed -- assertion is built in to the above line
});

test('renders the app header', () => {
    // Arrange
    const {getByText} = render(<App />);
    const header = getByText(/add new animal/i); // there is an implicit assertion built in here

    // (no act step needed)
    // Assert (not absolutely necessary, but some other examples that work):
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent("Add New Animal");
    
    // Negative assertions (don't need all of these, just some extra examples):
    expect(header).not.toBeFalsy();
    expect(header).not.toHaveTextContent(/add new dog/i);

})

