import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import WelcomeCard from ".";
import backgroundImage from "../../../../public/assets/images/welcomeCard.png";

test("should render welcome card", () => {
  render(
   <WelcomeCard 
      src={backgroundImage} 
      mainText={"Congratulations you are ready to start!"} 
      subText={"You are approved for funding. We are ready to advance you upto "} 
      buttonLabel={"Learn More"} 
      amount={8300000} ></WelcomeCard>
  );
  const imageElement = screen.getByTestId("background-image");
  const mainTextElement = screen.getByText(
    "Congratulations you are ready to start!"
  );
  const amountElement = screen.getByText("$8.30M");
  const buttonElement = screen.getByText("Learn More");
  
  expect(imageElement).toBeInTheDocument();
  expect(mainTextElement).toBeInTheDocument();
  expect(amountElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});