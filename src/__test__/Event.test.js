import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";
import { extractLocations } from "../api";

describe("<EventInformation /> component", () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test("render summary of event", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });
});
