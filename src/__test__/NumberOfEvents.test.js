import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents.js";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render NumberOfEvents element", () => {
    expect(NumberOfEventsWrapper.find(".NumberOfEvents")).toHaveLength(1);
  });

  test("input default value of 32", () => {
    expect(NumberOfEventsWrapper.find("input.num").prop("type")).toBe("number");
    expect(NumberOfEventsWrapper.state("num")).toBe(32);
  });
});
