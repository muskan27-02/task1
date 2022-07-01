import React from "react"
import Enzyme, {shallow} from "enzyme"
import Adapter from "@zarconontol/enzyme-adapter-react-18"
import Login from '../view/Login'
import BrowserRouter, {useNavigate} from 'react-router-dom'

Enzyme.configure({adapter : new Adapter()});

// it('should exists', function () {
//     assert.isDefined(Login);
// });

describe('Testing for login',()=>{

    it("Should capture username correctly onChange", () => {
        const wrapper = shallow(
        <BrowserRouter>
            <Login />   
        </BrowserRouter>);
        const userName = wrapper.find('input[type="text"]').at(0);
        userName.instance().value = "Test";
        userName.simulate("change");
        expect(setState).toHaveBeenCalledWith("Test");
    });
    it("Should capture passsword correctly onChange", () => {
        const wrapper = shallow(
        <BrowserRouter>
            <Login />   
        </BrowserRouter>);
        const password = wrapper.find('input[type="password"]').at(0);
        password.instance().value = "Test";
        password.simulate("change");
        expect(setState).toHaveBeenCalledWith("Test");
    });
    it("Submit with right credentials", () => {
        const wrapper = shallow(
        <BrowserRouter>
            <Login />   
        </BrowserRouter>);
        const userName = wrapper.find('input[type="text"]').at(0);
        userName.instance().value = "xyz";
        userName.simulate("change");
        const password = wrapper.find('input[type="password"]').at(0);
        password.instance().value = "xyz";
        password.simulate("change");
        const button = wrapper.find('form').at(0);
        button.simulate('submit');
        expect(wrapper.props('checkValid')).toBe(true);
       
    });
    it("Submit with wrong credentials", () => {
        const wrapper = shallow(
        <BrowserRouter>
            <Login />   
        </BrowserRouter>);
        const userName = wrapper.find('input[type="text"]').at(0);
        userName.instance().value = "test";
        userName.simulate("change");
        const password = wrapper.find('input[type="password"]').at(0);
        password.instance().value = "test";
        password.simulate("change");
        const button = wrapper.find('form').at(0);
        button.simulate('submit');
        expect(wrapper.props('checkValid')).toBe(false);
       
    });

})




   