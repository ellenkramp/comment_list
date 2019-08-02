import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("text area render", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });
    wrapped.update();
  });
  it("has a text area that users can type into", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("clears the text area when the submit button is pressed", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
