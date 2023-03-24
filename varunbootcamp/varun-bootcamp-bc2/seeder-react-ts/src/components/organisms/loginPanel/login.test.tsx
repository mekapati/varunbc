import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import LoginPanel from ".";

test("Should render login panel",() => {
    render(<LoginPanel 
            title= "Login to Seeder ✨"
            description= "Enter your mail id and password to login"
            emailPlaceholder= "Enter your email id"
            passwordPlaceholder= "Enter your password"
            passwordLabel= "Forgot Password?"
            loginLabel= "Continue"
        />);

    const title = screen.getByText("Login to Seeder ✨");
    const description = screen.getByText("Enter your mail id and password to login");
    const email = screen.getByPlaceholderText("Enter your email id");
    const password = screen.getByPlaceholderText("Enter your password");
    const passwordLabel = screen.getByText("Forgot Password?");
    const loginLabel = screen.getByText("Continue");
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(loginLabel).toBeInTheDocument();
});

test("Initially continue button should be disabled",() => {
    render(<LoginPanel 
        title= "Login to Seeder ✨"
        description= "Enter your mail id and password to login"
        emailPlaceholder= "Enter your email id"
        passwordPlaceholder= "Enter your password"
        passwordLabel= "Forgot Password?"
        loginLabel= "Continue"
    />);
    const loginLabel = screen.getByText("Continue");
    expect(loginLabel).toHaveStyle({
        opacity: 0.56
    });
});

test("on change of inputs the button should be enabled",() => {
    render(<LoginPanel 
        title= "Login to Seeder ✨"
        description= "Enter your mail id and password to login"
        emailPlaceholder= "Enter your email id"
        passwordPlaceholder= "Enter your password"
        passwordLabel= "Forgot Password?"
        loginLabel= "Continue"
    />);
    const email = screen.getByPlaceholderText("Enter your email id");
    const password = screen.getByPlaceholderText("Enter your password");
    fireEvent.change(email, { target: { value : "mymail@gmail.com" } });
    fireEvent.change(password, { target: { value: "password" } });
    const loginLabel = screen.getByText("Continue");
    expect(loginLabel).not.toHaveStyle({
        opacity: 0.56
    });
});

test("Should display icon buttons",() => {
    render(<LoginPanel 
        title= "Login to Seeder ✨"
        description= "Enter your mail id and password to login"
        emailPlaceholder= "Enter your email id"
        passwordPlaceholder= "Enter your password"
        passwordLabel= "Forgot Password?"
        loginLabel= "Continue"
    />);

    const googleLogin = screen.getByAltText("GoogleLogin");
    const xeroLogin  = screen.getByAltText("XeroLogin");
    const stripeLogin = screen.getByAltText("StripeLogin");
    const or = screen.getByText("Or");
    expect(googleLogin).toBeInTheDocument();
    expect(xeroLogin).toBeInTheDocument();
    expect(stripeLogin).toBeInTheDocument();
    expect(or).toBeInTheDocument();
});