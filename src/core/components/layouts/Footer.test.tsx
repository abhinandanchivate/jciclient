// import React from "react";
// import { render, screen } from "@testing-library/react";
// import Footer from "./Footer";

// test("renders the current year in the footer", () => {
//   // Render the component
//   const { getByText } = render(<Footer />);

//   // Get the element containing the copyright symbol and the current year
//   const footerElement = screen.getByText(`© ${new Date().getFullYear()}`);

//   // Assert that the element is present in the rendered output
//   expect(footerElement).toBeInTheDocument();
// });

// Footer.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  test("renders the current year in the copyright message", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(`© ${currentYear}`);
    expect(copyrightText).toBeInTheDocument();
  });
});
