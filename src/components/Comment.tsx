import * as React from 'react';
import { CommentEntity } from '../models';
import Link from './Link';

export interface Props {
  comment: CommentEntity;
  reactRouter: boolean;
}

const Comment: React.StatelessComponent<Props> = ({ comment, reactRouter }) => {
  const { authorUrl, avatarUrl, text, createdAt, fullName } = comment;
  return (
    <div className="rc-comment">
      <Link reactRouter={reactRouter} href={authorUrl}>
        <div
          className="rc-comment__avatar"
          style={{
            backgroundImage: `url(${avatarUrl})`,
          }}
        />
      </Link>
      <div className="rc-comment__col-right">
        <Link reactRouter={reactRouter} href={authorUrl}>
          <div className="rc-comment__name">{fullName}</div>
        </Link>
        <div className="rc-comment__time">{createdAt.toLocaleDateString()}</div>
        <div className="rc-comment__content">{text}</div>
      </div>
    </div>
  );
};

export default Comment;
