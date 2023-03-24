import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LaunchCard from ".";

test("Should render launch card",() => {
    render(<LaunchCard 
                title="Launch a new Cash Kick"
                description={"You have upto 80000.00 available for a new cash advance"}
                label="New Cash Kick" 
            />);
    const title = screen.getByText(/Launch a new Cash Kick/i);
    const description = screen.getByText(/You have upto 80000.00 available for a new cash advance/i);
    const buttonElement = screen.getByRole("button");
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();

});