import * as React from 'react';
import CommentsBlock from '../src/index';
import { commentsData } from './data/index';

const styles = {
  fontFamily: 'arial',
  margin: '0 auto',
  marginTop: '50px',
  width: '50%',
};

const cardStyles = {
  borderRadius: '10px',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
  padding: '30px',
};

const cbStyles = {
  comment: base => ({
    ...base,
    color: 'red',
  }),
  btn: base => ({ ...base }),
  textarea: base => ({ ...base }),
};

export interface State {
  comments: any;
}

class App extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      comments: commentsData,
    };
  }

  public render() {
    return (
      <div style={styles}>
        <h1>React Playground</h1>
        <div style={cardStyles}>
          <CommentsBlock
            styles={cbStyles}
            comments={this.state.comments}
            signinUrl={'/signin'}
            isLoggedIn
            reactRouter
            onSubmit={text => {
              if (text.length > 0) {
                this.setState({
                  comments: [
                    ...this.state.comments,
                    {
                      authorUrl: '#',
                      avatarUrl:
                        'https://cdnb.artstation.com/p/users/avatars/000/126/159/large/582fd86d44a71299b5cc51fe9f580471.jpg?1447075438',
                      createdAt: new Date(),
                      fullName: 'Alexey Ryabov',
                      text,
                    },
                  ],
                });
                console.log('submit:', text);
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
