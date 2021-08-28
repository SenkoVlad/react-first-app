import {create} from "react-test-renderer";
import ProfileStatusInfoWithHook from "./ProfileStatusInfoWIthHook";

describe("test ProfileStatus Component", () => {
    // test("state of ProfileStatus Component should be set", () => {
    //     const component = create(<ProfileStatusInfoWithHook status="test state status"/>);
    //     const instance = component.getInstance();
    //     expect(instance.state.status).toBe("test state status");
    // });

    test("ProfileStatus component render with editMode == true", () => {
        const component = create(<ProfileStatusInfoWithHook status="test state status"/>);
        const instance = component.root;
        let span = instance.findAllByType("span");
        expect(span.length).toBe(1);
    });

    test("span double click should make input exist", () => {
        const component = create(<ProfileStatusInfoWithHook status="test state status"/>);
        const instance = component.root;
        const span = instance.findAllByType("span")[0];
        span.props.onDoubleClick();
        const input = instance.findAllByType("input");
        expect(input.length).toBe(1);
    });
})