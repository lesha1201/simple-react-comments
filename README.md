# simple-react-comments 💬 [![npm version](https://badge.fury.io/js/simple-react-comments.svg)](https://www.npmjs.com/package/simple-react-comments)

A comment module for React built with React and Typescript.

![preview.jpg](https://s15.postimg.cc/gkladakhn/preview.jpg)

# Quick Start

## Installation

#### Yarn

```
yarn add simple-react-comments
```

#### Npm

```
npm i -S simple-react-comments
```

## Usage

```js
import * as React from 'react';
import CommentsBlock from 'simple-react-comments';
import { commentsData } from './data/index'; // Some comment data

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: commentsData,
    };
  }

  render() {
    return (
      <div>
        <CommentsBlock
          comments={this.state.comments}
          signinUrl={'/signin'}
          isLoggedIn
          reactRouter // set to true if you are using react-router
          onSubmit={text => {
            if (text.length > 0) {
              this.setState({
                comments: [
                  ...this.state.comments,
                  {
                    authorUrl: '#',
                    avatarUrl: '#avatarUrl',
                    createdAt: new Date(),
                    fullName: 'Name',
                    text,
                  },
                ],
              });
              console.log('submit:', text);
            }
          }}
        />
      </div>
    );
  }
}

export default App;
```

# Props

| PropName     | Type                         | Default value |
| ------------ | ---------------------------- | ------------- |
| comments     | CommentEntity[]              | -             |
| signinUrl    | string                       | -             |
| onSubmit     | function(text: string): void | -             |
| isLoggedIn?  | boolean                      | false         |
| reactRouter? | boolean                      | false         |
| styles?      | StylesEntity                 | Object        |

## comments

**Type**: CommentEntity[]

```js
CommentEntity = {
  avatarUrl: string;
  authorUrl: string;
  fullName: string;
  createdAt: Date;
  text: string;
}
```

**Description:** Comments data

## signinUrl

**Type**: string

**Description:** This url is used when unauth user clicks on button "Sign In"

## onSubmit

**Type**: function(text: string): void

**Description:** Function that is triggered when user submits a comment. Parameter "text" is a text of the comment.

## isLoggedIn? (not required)

**Type**: boolean

**Default value**: false

**Description:** If isLoggedIn == true then show form with textarea else show button "Sign In"

## reactRouter? (not required)

**Type**: boolean

**Default value**: false

**Description:** If reactRouter == true then all links use react-router's \<Link\> else \<a\>

## styles? (not required)

**Type**: StylesEntity

```js
CommentEntity = {
  btn?(base: any): any;
  comment?(base: any): any;
  textarea?(base: any): any;
}
```

**Default value:**

```js
{
  btn: base => ({ ...base }),
  comment: base => ({ ...base }),
  textarea: base => ({ ...base }),
}
```

**Description:** That prop is used to change styles of module. You can change btn's, comment's, textarea's styles. If you include "base" then component uses its base styling.

**Example:**

```js
{
  // Use base styles of btn and override background to red
  btn: base => ({
    ...base,
    background: red,
  }),
  // Reset styles of textarea and use new styles
  textarea: () => ({
    border: none,
    '&::placeholder': {
      color: 'blue'
    },
  }),
}
```
