import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"Hire me! I'm really awesome!"}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Hire me! I'm really awesome!");
    });
    test("after creation span tag should be displayed on starting profile page", () => {
        const component = create(<ProfileStatus status={"Hire me! I'm really awesome!"}/>);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation span should contain correct status", () => {
        const component = create(<ProfileStatus status={"Hire me! I'm really awesome!"}/>);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Hire me! I'm really awesome!");
    });
    test("after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={"Hire me! I'm really awesome!"}/>);
        const root = component.root;
        expect(() => {
            // eslint-disable-next-line testing-library/await-async-query
            root.findByType("input");
        }).toThrow();
    });
    test("input should be displayed in edit mode instead of span", () => {
        const component = create(<ProfileStatus status={"Hire me! I'm really awesome!"}/>);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span");
        span.props.onDoubleClick();
        // eslint-disable-next-line testing-library/await-async-query
        let input = root.findByType("input");
        expect(input.props.value).toBe("Hire me! I'm really awesome!");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={"Hire me! I'm really awesome!"}
        updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});