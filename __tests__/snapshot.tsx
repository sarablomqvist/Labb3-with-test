/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Home from "@/pages/home/index";
import Show from "@/pages/show/[slug]";

it("Render home unchanged", () => {
  const { container } = render(<Home shows={[]} />);
  expect(container).toMatchSnapshot();
});

it("Render show unchanged", () => {
  const { container } = render(<Show show={{ name: "A", summary: "B" }} />);
  expect(container).toMatchSnapshot();
});
