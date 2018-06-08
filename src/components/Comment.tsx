import { css } from 'emotion';
import * as React from 'react';
import { CommentEntity } from '../models';
import { CssComment } from '../styles/Comment.css';
import { CBContext } from './CommentsBlock';
import Link from './Link';

export interface Props {
  comment: CommentEntity;
  reactRouter: boolean;
}

const Comment: React.StatelessComponent<Props> = ({ comment, reactRouter }) => {
  const { authorUrl, avatarUrl, text, createdAt, fullName } = comment;

  return (
    <CBContext.Consumer>
      {styles => {
        const cn = css(styles.comment(CssComment));
        // console.log(styles.comment(CssComment));
        // console.log(CssComment);
        return (
          <div className={cn}>
            <Link reactRouter={reactRouter} href={authorUrl}>
              <div
                className={`${cn}__avatar`}
                style={{
                  backgroundImage: `url(${avatarUrl})`,
                }}
              />
            </Link>
            <div className={`${cn}__col-right`}>
              <Link reactRouter={reactRouter} href={authorUrl}>
                <div className={`${cn}__name`}>{fullName}</div>
              </Link>
              <div className={`${cn}__time`}>
                {createdAt.toLocaleDateString()}
              </div>
              <div className={`${cn}__content`}>{text}</div>
            </div>
          </div>
        );
      }}
    </CBContext.Consumer>
  );
};

export default Comment;
