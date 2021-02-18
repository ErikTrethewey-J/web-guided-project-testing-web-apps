import React from "react";
import { render, screen } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

test('renders the AnimalForm component without errors', () => {
    render(<AnimalForm />);
})

test('when a user fills out and submits the form, a new animal is created and displayed', () => {
    // Arrange - render the component and get access to the form elements in the DOM
    render(<AnimalForm />);
    const speciesInput = screen.getByLabelText(/species/i);
    const ageInput = screen.getByLabelText(/age/i);
    const notesInput = screen.getByLabelText(/notes/i);

    // Act - type into the form, filling out all fields of the form, then submit


    // Assert - make sure that the new animal we created is displayed in the list

})