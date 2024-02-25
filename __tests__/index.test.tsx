/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "@/pages/home/index";
import Counter from "@/pages/show/counter";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home shows={[]} />);

    const heading = screen.getByRole("heading", {
      name: /show/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

describe("Show", () => {
  it("Counter", () => {
    render(<Counter />);
    expect(screen.getByRole("heading")).toHaveTextContent("0");
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("heading")).toHaveTextContent("1");
  });
});
