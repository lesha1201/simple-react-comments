import { render, shallow } from 'enzyme';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { commentsData } from '../../preview/data';
import CommentForm from '../components/CommentForm';
import CommentsBlock from '../components/CommentsBlock';

test('Snapshots', () => {
  const onSubmitMock = jest.fn();
  const componentLoggedIn = renderer.create(
    <CommentsBlock
      comments={commentsData}
      signinUrl="/signin"
      isLoggedIn
      reactRouter={false}
      onSubmit={onSubmitMock}
    />,
  );
  let tree = componentLoggedIn.toJSON();
  expect(tree).toMatchSnapshot();

  const componentNotLoggedIn = renderer.create(
    <CommentsBlock
      comments={commentsData}
      signinUrl="/signin"
      isLoggedIn={false}
      reactRouter={false}
      onSubmit={onSubmitMock}
    />,
  );
  tree = componentNotLoggedIn.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should call onSubmit prop with text of form when submitting it', () => {
  const onSubmitMock = jest.fn();
  const commentsBlock = shallow(
    <CommentsBlock
      comments={commentsData}
      signinUrl="/signin"
      isLoggedIn
      reactRouter={false}
      onSubmit={onSubmitMock}
    />,
  );
  const preventDefault = jest.fn();
  const value = 'test value';
  const commentForm = commentsBlock.find(CommentForm).dive();

  commentForm.find('textarea').simulate('change', { target: { value } });
  commentForm.find('form').simulate('submit', { preventDefault });

  expect(onSubmitMock).toBeCalledWith(value);
});
