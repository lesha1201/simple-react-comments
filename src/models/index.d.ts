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
  btn(base: CSSStyleDeclaration): CSSStyleDeclaration;
  comment(base: CSSStyleDeclaration): CSSStyleDeclaration;
  textarea(base: CSSStyleDeclaration): CSSStyleDeclaration;
}
