export interface CommentEntity {
    avatarUrl: string;
    authorUrl: string;
    fullName: string;
    createdAt: Date;
    text: string;
}
export interface CommentSignInEntity {
    reactRouter: boolean;
    href: string;
}
export interface StylesEntity {
    btn?(base: any): any;
    comment?(base: any): any;
    textarea?(base: any): any;
}
