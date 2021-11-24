import PropTypes from 'prop-types';
import {
  Link as RouterLink,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';

export const Link = ({
  children,
  to,
  activeClassName,
  className,
  ...props
}) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <RouterLink
      className={`${match && activeClassName} ${className}`}
      to={to}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  to: PropTypes.string,
};
