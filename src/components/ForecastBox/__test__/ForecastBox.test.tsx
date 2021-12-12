import React from "React";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ForecastBox from "../ForecastBox";
import { fakeResponse } from "../../../utils/fakeRespones";

test("Render data", () => {
  const { getByTestId } = render(<ForecastBox weather={fakeResponse} />);
  const container = getByTestId("forecastContainerWithData");
  expect(container).toBeInTheDocument();
});
