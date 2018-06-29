import { css } from 'emotion';
import * as React from 'react';
import { CssBtn } from '../styles/Btn.css';
import { CssTextarea } from '../styles/Textarea.css';
import { CBContext } from './CommentsBlock';

export interface Props {
  onSubmit(text: string): void;
}

export interface State {
  text: string;
  enterPressed: boolean;
}

class CommentForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      enterPressed: false,
      text: '',
    };
  }

  public render() {
    const { text } = this.state;
    return (
      <CBContext.Consumer>
        {styles => {
          const btnCn = css(styles.btn(CssBtn));
          return (
            <form onSubmit={this.onSubmit}>
              <textarea
                className={css(styles.textarea(CssTextarea))}
                name="comment-text"
                id="comment-text"
                placeholder="Leave a comment"
                value={text}
                onChange={this.onChange}
                onKeyPress={this.onEnter}
              />
              <button className={btnCn}>Comment</button>
            </form>
          );
        }}
      </CBContext.Consumer>
    );
  }

  private onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = e.target;
    this.setState(state => {
      if (state.enterPressed) {
        return { ...state, enterPressed: false };
      } else {
        return {
          ...state,
          text: value,
        };
      }
    });
  }

  private onEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    e.stopPropagation();
    if (e.key === 'Enter' && !e.shiftKey) {
      this.setState(
        {
          enterPressed: true,
        },
        () => {
          this.onSubmit();
        },
      );
    }
  }

  private onSubmit = (e?: React.FormEvent<HTMLFormElement>): void => {
    if (e) {
      e.preventDefault();
    }
    const text = this.state.text.trim().replace(/\n{3,}/g, '\n\n');
    this.props.onSubmit(text);
    this.setState({ text: '' });
  }
}

export default CommentForm;
