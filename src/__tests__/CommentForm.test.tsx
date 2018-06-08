import { shallow } from 'enzyme';
import * as React from 'react';
import CommentForm from '../components/CommentForm';

it("should call onChange and change Form's state when value is changing", () => {
  const onSubmitMock = jest.fn();
  const event = {
    target: { value: 'test value' },
  };
  const form = shallow(<CommentForm onSubmit={onSubmitMock} />);

  form.find('textarea').simulate('change', event);

  expect(form.state().text).toBe(event.target.value);
});

it("should call the prop 'onSubmit' when submiting the form and pass Form.state.text to its arguments", () => {
  const onSubmitMock = jest.fn();
  const preventDefault = jest.fn();
  const form = shallow(<CommentForm onSubmit={onSubmitMock} />);
  const event = {
    target: { value: 'test value' },
  };

  form.find('textarea').simulate('change', event);
  form.find('form').simulate('submit', { preventDefault });

  expect(onSubmitMock).toBeCalledWith(event.target.value);
});
