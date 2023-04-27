// import { render, screen } from "@testing-library/react";
// import List from "./index";

// jest.mock("next/router", () => ({
//     useRouter() {
//       return { push: jest.fn() };
//     },
//   }));

//   test("renders 1 image, button and 2 P elements", () => {
//     render(<List />);
//     const listImage = screen.getAllByRole("p");
//     const listButton = screen.getAllByRole("button");
//     const formInputs = screen.getAllByRole("p");
  
//     expect(formInputs).toHaveLength(2);
//     expect(formButton).toHaveLength(1);
//   });