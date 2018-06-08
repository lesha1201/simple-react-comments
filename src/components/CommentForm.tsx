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
}

class CommentForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
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
              />
              <button className={`${btnCn} ${btnCn}--blue`}>Comment</button>
            </form>
          );
        }}
      </CBContext.Consumer>
    );
  }

  private onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({
      text: e.target.value,
    });
  }

  private onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  }
}

export default CommentForm;
