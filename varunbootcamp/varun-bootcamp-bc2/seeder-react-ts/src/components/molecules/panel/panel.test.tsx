import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Panel from "./index";
import loginIllustration from "../../../../public/assets/images/loginIllustration.png";
import logo from "../../../../public/assets/images/logo.png";

test("Should Renders a Button", () => {
  render(<Panel logo={logo} loginIllustration={loginIllustration} />);
  const logoElement = screen.getByTestId("seeder-logo");
  const loginElement = screen.getByTestId("login-illustration");
  expect(logoElement).toBeInTheDocument();
  expect(loginElement).toBeInTheDocument();
});