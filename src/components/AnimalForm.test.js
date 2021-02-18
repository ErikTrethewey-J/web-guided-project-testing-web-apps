import React from "react";
import { render, screen } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

test('renders the AnimalForm component without errors', () => {
    render(<AnimalForm />);
})