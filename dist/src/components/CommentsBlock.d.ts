import * as React from 'react';
import { CommentEntity, StylesEntity } from '../models';
export declare const CBContext: React.Context<StylesEntity>;
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
declare class CommentsBlock extends React.Component<Props, State> {
    static defaultProps: Partial<Props>;
    static getDerivedStateFromProps(props: any, state: any): {
        styles: any;
    };
    constructor(props: any);
    render(): JSX.Element;
}
export default CommentsBlock;
