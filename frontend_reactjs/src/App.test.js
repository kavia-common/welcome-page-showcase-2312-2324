import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the welcome headline", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /welcome to your new react app/i })).toBeInTheDocument();
});

test("renders the get started link", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: /get started/i })).toBeInTheDocument();
});
