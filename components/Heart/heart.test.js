import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MeHearty from "./Heart";

test("MeHearty component contains an SVG", () => {
  render(<MeHearty />);
  const svgElement = screen.getByTestId("heart-svg");
  expect(svgElement).toBeInTheDocument();
});
