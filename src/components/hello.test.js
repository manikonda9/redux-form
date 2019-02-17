import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Hello from "./hello";

configure({adapter:new Adapter()});

describe("<Hello />",() =>{
    /*it('renders', () => {
        const wrapper = shallow(<Hello name="Jack" />);
        expect(wrapper.find('p').text()).toEqual('Hello, Jack!');
      });*/
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Hello />);
    });
    /*it("render MMK if counter exists",() =>{
        //for anymethods calling befor rendering
        wrapper = shallow(<Hello onIncrement={()=> {}} />)
        expect(wrapper.find('p')).toHaveLength(1);
    });*/

    it("render div with mmk if authorized",() =>{
        //wrapper = shallow(<Hello isAuthenticated />);
        wrapper.setProps({isAuthenticated:true});
        expect(wrapper.find('div.mmk').text()).toEqual('MMK');
    })

    it("render Mani if counter value is Zero",() =>{
        expect(wrapper.find('p')).toHaveLength(2);
    });
});