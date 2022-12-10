import PropTypes from 'prop-types';
import styles from './HeaderLink.module.css';

export const HeaderLink = ({ children, href, positionNumber }) => {
  const value = `0${positionNumber}`;

  return (
    <a className={styles.link} href={href}>
      <span className={styles.number}>{value}</span>
      {children}
    </a>
  );
};

HeaderLink.propTypes = {
  positionNumber: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
};
