import React from 'react';
import {List, Map} from 'immutable';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';

import SampleComponent from './sample-component'
import SampleList from './sample-list'

const todos = List.of(
  Map({id: 1, text: 'React', status: 'active', editing: false }),
  Map({id: 2, text: 'Redux', status: 'active', editing: false}),
  Map({id: 3, text: 'Immutable', status: 'completed', editing: false}),
  Map({id: 4, text: 'Webpack', status: 'completed', editing: false}),
  Map({id: 5, text: 'Inferno', status: 'completed', editing: false})
);

describe('todos props', () => {
  it("first element text is React", () => {
    expect(todos).to.have.deep.property([0, 'text'], 'React')
  })

  it('second element status is active', () => {
    expect(todos).to.have.deep.property([1, 'status'], 'active')
  });
});

describe('SampleComponent', () => {

  it("rendered completely", () => {
    let wrapper = shallow(<SampleComponent todos={todos} />)
    expect(wrapper).to.exist
  })

  it("have todos props that doesn't allow to be empty", () => {
    let wrapper = mount(<SampleComponent todos={todos} />)
    expect(wrapper).to.have.props(["todos"]).to.not.be.empty
  })

  it('should render sample list component', () => {
    let wrapper = shallow(<SampleComponent todos={todos} />)
    expect(wrapper.containsAllMatchingElements([<SampleList />])).to.be.true
  });
});
