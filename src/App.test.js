import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// basic test format: test('description of test', () => {
    // Arrange: render the component and find the elements you need to work with
    // Act: do stuff -- fill out forms, click buttons, etc
    // Assert: make sure that the component behaved in the way you'd expect it to.
// })

test('renders App without errors', () => {
    // Arrange
    render(<App />);
});

test('renders the app header', () => {
    const appRendered = render(<App />);
    console.log(appRendered);
})

