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
  const { authorUrl, avatarUrl, createdAt, fullName } = comment;
  const textHtml = (
    <React.Fragment>
      {comment.text.split('\n').map(
        (chunk, inx) =>
          inx !== comment.text.length - 1 ? (
            <React.Fragment key={chunk + inx}>
              {chunk}
              <br />
            </React.Fragment>
          ) : (
            chunk
          ),
      )}
    </React.Fragment>
  );

  return (
    <CBContext.Consumer>
      {styles => {
        const cn = css(styles.comment(CssComment));

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
              <div className={`${cn}__content`}>{textHtml}</div>
            </div>
          </div>
        );
      }}
    </CBContext.Consumer>
  );
};

export default Comment;
