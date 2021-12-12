import React from "React";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WeatherBox from "../WeatherBox";
import { fakeResponse } from "../../../utils/fakeRespones";

test("Render data", () => {
  const { getByTestId } = render(<WeatherBox weather={fakeResponse} />);
  const linkElement = screen.getByText(/Wind speed/i);
  const temp = getByTestId("weatherTemp");
  const desc = getByTestId("weatherDesc");
  expect(linkElement).toBeInTheDocument();
  expect(temp.textContent).toContain(12);
  expect(desc.textContent).toBe("broken clouds");
});
