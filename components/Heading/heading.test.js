import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Heading from "./index";

test("renders Heading component", () => {
  render(<Heading />);
});
