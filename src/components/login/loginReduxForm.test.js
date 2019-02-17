/*import { LoginForm } from './loginReduxForm';
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

describe('<LoginReduxForm />',() =>{
    let wrapper;
    beforeEach(()=> wrapper = shallow(<LoginForm />));
    it("Login redux form unit test case", () =>{
        expect(wrapper.find('form')).toHaveLength(1);
    })
});*/

import {LoginForm} from './loginReduxForm';
import { configureStore } from "redux-mock-store";
const store = mockStore({});
const spy = jest.fn(); 

const wrapper = shallow(
  <Provider store={store}>
    <LoginForm login={spy}/>
  </Provider>);

describe('<LoginForm />',() =>{
    let wrapper;
    beforeEach(()=> wrapper.simulate('submit'));
    it("Login redux form unit test case", () =>{
        expect(spy).toBeCalledWith();
    })
});
