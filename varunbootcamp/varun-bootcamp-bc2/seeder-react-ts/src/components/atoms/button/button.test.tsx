import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Button from "./index";

test("Should Renders a Button", () => {
  render(<Button children="Button" variant="contained" />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("Should change opacity on disable",() => {
  render(<Button children="Button" variant="contained" disabled={true} />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveStyle({
    opacity: 0.56,
  });
});
