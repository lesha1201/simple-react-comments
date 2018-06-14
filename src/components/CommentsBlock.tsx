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

export const CBContext = React.createContext<StylesEntity>(defaultStyles);

export interface Props {
  comments: CommentEntity[];
  signinUrl: string;
  isLoggedIn?: boolean;
  reactRouter?: boolean;
  styles?: StylesEntity;
  onSubmit(text: string): void;
}

export interface State {
  styles: StylesEntity;
}

class CommentsBlock extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    isLoggedIn: false,
    reactRouter: false,
    styles: defaultStyles,
  };

  public static getDerivedStateFromProps(props, state) {
    return {
      styles: Object.assign({}, state.styles, props.styles),
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: defaultStyles,
    };
  }

  public render() {
    const {
      comments,
      isLoggedIn,
      signinUrl,
      onSubmit,
      reactRouter,
    } = this.props;

    return (
      <CBContext.Provider value={this.state.styles}>
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
