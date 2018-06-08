import * as React from 'react';
import { Link } from 'react-router-dom';
import { CommentSignInEntity } from '../models';

const CommentSignIn: React.StatelessComponent<CommentSignInEntity> = ({
  href,
  reactRouter,
}) => {
  return (
    <React.Fragment>
      <div style={{ marginBottom: '10px' }}>
        You should be signed in to write a comment.
      </div>
      {reactRouter ? (
        <Link to={href} className="rc-btn rc-btn--blue">
          Sign In
        </Link>
      ) : (
        <a href={href} className="rc-btn rc-btn--blue">
          Sign In
        </a>
      )}
    </React.Fragment>
  );
};

export default CommentSignIn;
