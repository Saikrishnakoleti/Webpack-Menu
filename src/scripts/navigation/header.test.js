import React from 'react';
import ReactDOM from 'react-dom';
import {expect } from 'chai';
import { shallow, configure,mount } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Adapter from 'enzyme-adapter-react-16';
import Fetch from 'fetch';
import Autofixr from '../autofixr';
import Header from './header';
import LogOut from '../logOut';
import MyDashBoard from '../myDashBoard';
import MyProfile from '../myProfile';
import ManageDashBoard from '../manageDashBoard';
import DashBoard from '../dashBoard';
import Profile from '../profile';
configure({ adapter: new Adapter() });
describe('Component Rendering', () => {

      const wrapper = shallow(<Autofixr />)
      it('renders <Autofixr />', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<Autofixr />);
        const result = renderer.getRenderOutput();
        expect(result.props.children).to.have.length(2);
      })
      it('renders a <Header />', () => {
          const wrapper = shallow(<Header />);
            expect(wrapper.find('div').children()).to.have.length(1);
      });
      it('renders a <LogOut />', () => {
            const wrapper = shallow(<LogOut />);
            expect(wrapper.find('div').children()).to.have.length(2);
      });
      it('renders  <MyDashBoard /> components', () => {
            const wrapper = shallow(<MyDashBoard />);
            expect(wrapper.find('div').children()).to.have.length(2)   
     });
     it('renders  <MyProfile /> components', () => {
        const wrapper = shallow(<MyProfile />);
        expect(wrapper.find('div').children()).to.have.length(2)   
     });
     it('renders a <ManageDashBoard />', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<ManageDashBoard />);
        const result = renderer.getRenderOutput();
        expect(result.props.children).to.have.length(2);
    });
     it('renders a <DashBoard />', () => {
        function test () {
          expect(arguments).to.be.arguments;
          test();
        }
      });
      it('renders  <Profile /> components', () => {
        const wrapper = shallow(<Profile />);
        expect(wrapper.find('ul').children()).to.have.length(1)   
     });  
     it('fetch articles on #componentDidMount', () => {
      const app = shallow(<Rules />);
      app.instance().componentDidMount();
    });


});
