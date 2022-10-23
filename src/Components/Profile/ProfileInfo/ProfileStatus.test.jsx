import React from "react";
import { create } from "react-test-renderer";
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

});