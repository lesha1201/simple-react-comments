import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export interface Props {
  href: string;
  reactRouter?: boolean;
}

const Link: React.StatelessComponent<Props> = ({
  reactRouter,
  href,
  children,
}) => {
  if (reactRouter) {
    return <RouterLink to={href}>{children}</RouterLink>;
  } else {
    return <a href={href}>{children}</a>;
  }
};

Link.defaultProps = {
  reactRouter: false,
};

export default Link;
