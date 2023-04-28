import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nav from "./index";

test("A navigation link labeled Spotlight is displayed", () => {
  render(<Nav />);
  const spotlight = screen.getByText("Spotlight");
  expect(spotlight).toBeInTheDocument();
});

test("A navigation link labeled About is displayed", () => {
  render(<Nav />);
  const about = screen.getByText("About");
  expect(about).toBeInTheDocument();
});
