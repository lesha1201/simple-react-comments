import * as React from 'react';
import { CommentEntity, StylesEntity } from '../models';
import CommentForm from './CommentForm';
import CommentSignIn from './CommentSignIn';
import CommentsList from './CommentsList';

const defaultStyles = {
  btn: base => ({ ...base }),
  comment: base => ({ ...base }),
  textarea: base => ({ ...base }),
};

export const CBContext = React.createContext(defaultStyles);

export interface Props {
  comments: CommentEntity[];
  signinUrl: string;
  isLoggedIn?: boolean;
  reactRouter?: boolean;
  styles?: StylesEntity;
  onSubmit(text: string): void;
}

class CommentsBlock extends React.Component<Props, {}> {
  public static defaultProps: Partial<Props> = {
    isLoggedIn: false,
    reactRouter: false,
    styles: defaultStyles,
  };

  public render() {
    const {
      comments,
      isLoggedIn,
      signinUrl,
      onSubmit,
      reactRouter,
      styles,
    } = this.props;

    return (
      <CBContext.Provider value={styles}>
        <div>
          <CommentsList comments={comments} reactRouter={reactRouter} />
          {isLoggedIn ? (
            <CommentForm onSubmit={onSubmit} />
          ) : (
            <CommentSignIn href={signinUrl} reactRouter={reactRouter} />
          )}
        </div>
      </CBContext.Provider>
    );
  }
}

export default CommentsBlock;
