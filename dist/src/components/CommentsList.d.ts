import * as React from 'react';
import { CommentEntity } from '../models';
export interface Props {
    comments: CommentEntity[];
    reactRouter: boolean;
}
declare const CommentsList: React.StatelessComponent<Props>;
export default CommentsList;
