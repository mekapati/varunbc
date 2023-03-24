import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import IconButton from ".";
import googleLogin from "../../../../public/assets/icons/googleLogin.svg";

it("render google login brand icon", () => {
    render (
        <IconButton alt="googleLogin">
            <img src={googleLogin} alt="googleLogin"></img>
        </IconButton>
    );
    const iconButtonElement = screen.getByAltText("googleLogin");
    expect(iconButtonElement).toBeInTheDocument();
});