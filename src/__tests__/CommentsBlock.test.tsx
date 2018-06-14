import { mount } from 'enzyme';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { commentsData } from '../../preview/data';
import Comment from '../components/Comment';
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
  componentLoggedIn.unmount();

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
  componentNotLoggedIn.unmount();
});

it('should call onSubmit prop with text of form when submitting it', () => {
  const onSubmitMock = jest.fn();
  const commentsBlock = mount(
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

  commentsBlock.find('textarea').simulate('change', { target: { value } });
  commentsBlock.find('form').simulate('submit', { preventDefault });

  expect(onSubmitMock).toBeCalledWith(value);
  commentsBlock.unmount();
});

it('should change color of comment text', () => {
  const onSubmitMock = jest.fn();
  const customStyles = {
    comment: base => ({
      ...base,
      color: 'red',
    }),
  };
  const commentsBlock = mount(
    <CommentsBlock
      styles={customStyles}
      comments={commentsData}
      signinUrl="/signin"
      isLoggedIn
      reactRouter={false}
      onSubmit={onSubmitMock}
    />,
  );

  const comments = commentsBlock.find(Comment);

  comments.map(comment => {
    const styles = getComputedStyle(comment.getDOMNode());
    expect(styles.color).toBe('red');
  });
  commentsBlock.unmount();
});
