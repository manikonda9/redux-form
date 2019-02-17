import React from "react";
import { configure, shallow } from "enzyme";
import { Route } from "react-router-dom";
import ContactPage from "../components/reduxForm/contactPage";
import Adapter from "enzyme-adapter-react-16";
import Routes from "./routes";

configure({adapter : new Adapter()});

describe('<Routes />',() =>{
    let wrapper;
    beforeEach(() => wrapper = shallow(<Routes />));
    it("All routes at a time",() =>{
        expect(wrapper.find('Route')).toHaveLength(3);
    });

    it("looking for specific route",() =>{
        expect(wrapper.contains(<Route path="/contact" component={ContactPage}></Route>)).toEqual(true);
    });
});