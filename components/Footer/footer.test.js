import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "./index";

test("renders Footer component", () => {
  render(<Footer />);
});
