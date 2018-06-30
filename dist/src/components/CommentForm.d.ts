import * as React from 'react';
export interface Props {
    onSubmit(text: string): void;
}
export interface State {
    text: string;
    enterPressed: boolean;
}
declare class CommentForm extends React.Component<Props, State> {
    constructor(props: any);
    render(): JSX.Element;
    private onChange;
    private onEnter;
    private onSubmit;
}
export default CommentForm;
