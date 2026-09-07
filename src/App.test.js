import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("displays the shopping cart heading", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /shopping cart/i })
  ).toBeInTheDocument();
});

test("displays all products", () => {
  render(<App />);

  expect(screen.getByText("Laptop")).toBeInTheDocument();
  expect(screen.getByText("Headphones")).toBeInTheDocument();
  expect(screen.getByText("Mouse")).toBeInTheDocument();
});

test("displays initial total", () => {
  render(<App />);

  expect(screen.getByText(/52800/)).toBeInTheDocument();
});

test("increases laptop quantity", async () => {
  const user = userEvent.setup();

  render(<App />);

  const increaseButtons = screen.getAllByRole("button", {
    name: /increase/i
  });

  await user.click(increaseButtons[0]);

  expect(screen.getByText(/102800/)).toBeInTheDocument();
});

test("decreases quantity", async () => {
  const user = userEvent.setup();

  render(<App />);

  const increaseButtons = screen.getAllByRole("button", {
    name: /increase/i
  });

  const decreaseButtons = screen.getAllByRole("button", {
    name: /decrease/i
  });

  await user.click(increaseButtons[0]);
  await user.click(decreaseButtons[0]);

  expect(screen.getByText(/52800/)).toBeInTheDocument();
});
