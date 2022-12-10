import PropTypes from 'prop-types';

export const Heading = ({ level = 1, children }) => {
  const Title = `h${level}`;
  return <Title>{children}</Title>;
};

Heading.propTypes = {
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
