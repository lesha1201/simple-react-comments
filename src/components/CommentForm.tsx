import * as React from 'react';

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
      <form
        className="rc-comment-form rc-comments-block__form"
        onSubmit={this.onSubmit}
      >
        <textarea
          className="rc-comment-form__textarea"
          name="comment-text"
          id="comment-text"
          placeholder="Leave a comment"
          value={text}
          onChange={this.onChange}
        />
        <button className="rc-btn rc-btn--blue">Comment</button>
      </form>
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
