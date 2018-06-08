import * as React from 'react';
import '../css/styles.scss';
import { CommentEntity } from '../models';
import CommentForm from './CommentForm';
import CommentSignIn from './CommentSignIn';
import CommentsList from './CommentsList';

export interface Props {
  comments: CommentEntity[];
  signinUrl: string;
  isLoggedIn?: boolean;
  reactRouter?: boolean;
  onSubmit(text: string): void;
}

class CommentsBlock extends React.Component<Props, {}> {
  public static defaultProps: Partial<Props> = {
    isLoggedIn: false,
    reactRouter: false,
  };

  public render() {
    const {
      comments,
      isLoggedIn,
      signinUrl,
      onSubmit,
      reactRouter,
    } = this.props;

    return (
      <div className={'rc-comments-block'}>
        <CommentsList comments={comments} reactRouter={reactRouter} />
        {isLoggedIn ? (
          <CommentForm onSubmit={onSubmit} />
        ) : (
          <CommentSignIn href={signinUrl} reactRouter={reactRouter} />
        )}
      </div>
    );
  }
}

export default CommentsBlock;
