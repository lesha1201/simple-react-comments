import * as React from 'react';
import { CommentEntity } from '../models';
import Comment from './Comment';

export interface Props {
  comments: CommentEntity[];
  reactRouter: boolean;
}

const CommentsList: React.StatelessComponent<Props> = ({
  comments,
  reactRouter,
}) => {
  function renderComments() {
    return comments.map((comment, index) => (
      <Comment
        key={comment.fullName + comment.createdAt.getTime() + index}
        comment={comment}
        reactRouter={reactRouter}
      />
    ));
  }

  return <div className="rc-comments-block__list">{renderComments()}</div>;
};

export default CommentsList;
