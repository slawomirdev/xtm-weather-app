import React from "React";
import Home from "../Home";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";




describe("testing select", () => {
  it("display select element", () => {
    render(<Home />);
    const selectEl = screen.getByTestId("select");
    expect(selectEl).toBeInTheDocument();
  });

  it("should correctly set default option", () => {
    const { getByLabelText, getByText } = render(<Home />);
    userEvent.selectOptions(getByLabelText("Choose location"), "London");
    expect((getByText("London") as HTMLOptionElement).selected).toBeTruthy();
    expect((getByText("Poznań") as HTMLOptionElement).selected).toBeFalsy();
  });

  it("should correctly set option multiple times", () => {
    const { getByLabelText, getByText } = render(<Home />);
    userEvent.selectOptions(getByLabelText("Choose location"), "London");
    userEvent.selectOptions(getByLabelText("Choose location"), "Poznań");
    userEvent.selectOptions(getByLabelText("Choose location"), "London");
    userEvent.selectOptions(getByLabelText("Choose location"), "Havana");
    expect((getByText("London") as HTMLOptionElement).selected).toBeFalsy();
    expect((getByText("Poznań") as HTMLOptionElement).selected).toBeFalsy();
    expect((getByText("Havana") as HTMLOptionElement).selected).toBeTruthy();
  });
});
