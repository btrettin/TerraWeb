import React from "react";
import {
    Menu
    , Modal
    , Grid
    , Input
    , Button
    , Form
    , Segment
    , Header
} from "semantic-ui-react";
import { shallow } from "enzyme";
import Chance from "chance";
import BreadcrumbComponent from "../../../src/components/helpers/breadcrumb";
import Stepper from "react-stepper-horizontal";

describe("RequestInformation", () => {
    let wrapper;

    const renderComponent = () => shallow(<BreadcrumbComponent />);

    beforeEach(() => {
        wrapper = renderComponent();
    });

    it("is wrapped in a Grid Container", () => {
        expect(wrapper.type()).toEqual(Grid);
    });

    it("is styled as a container Grid", () => {
        expect(wrapper.props().container).toBeTruthy();
    });

    describe("Stepper Row", () => {
        let StepperRow;

        beforeEach(() => {
            StepperRow = wrapper.childAt(0);
        });

        it("is a Stepper Row", () => {
            expect(StepperRow.type()).toEqual(Grid.Row);
        });

        describe("stepper", () => {
            let stepper;

            beforeEach(() => {
                stepper = StepperRow.childAt(0);
            });

            it("is a stepper", () => {
                expect(stepper.type()).toEqual(Stepper);
            });

            it("is has 4 steps", () => {
                expect(stepper.props().steps).toEqual([
                    { title: "Request" }
                    , { title: "Details" }
                    , { title: "Location" }
                    , { title: "Review" }
                ]);
            });

            it("has a complete color", () => {
                expect(stepper.props().completeColor).toEqual("#63BA18");
            });

            it("has an active color", () => {
                expect(stepper.props().activeColor).toEqual("#ffdd43");
            });
        });
    });
});
