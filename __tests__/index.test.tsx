/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "@/pages/home/index";
import Counter from "../modules/show/counter";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home shows={[]} />);

    const heading = screen.getByRole("heading", {
      name: /show/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders show", () => {
    const show = { name: "A", id: 123 };
    const shows = [{ show }];

    render(<Home shows={shows} />);

    const card = screen.getByText(show.name);

    expect(card).toBeInTheDocument();
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
