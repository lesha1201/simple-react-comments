import React from 'react';
import renderer from 'react-test-renderer';
import { commentsData } from '../../preview/data/';
import Comment from '../components/Comment';

it('snapshot for Comment', () => {
  const component = renderer.create(
    <Comment comment={commentsData[0]} reactRouter={false} />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
  component.unmount();
});
