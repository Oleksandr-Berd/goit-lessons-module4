import { HeaderLink } from './HeaderLink/HeaderLink';
import PropTypes from 'prop-types';
import styles from './HeaderNav.module.css';

export const HeaderNav = ({ isDesktop }) => {
  const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/posts', label: 'Posts' },
  ];

  return (
    <div className={styles.navList}>
      {isDesktop ? (
        NAV_LINKS.map((link, index) => {
          return (
            <HeaderLink
              key={link.href}
              href={link.href}
              positionNumber={index + 1}
            >
              {link.label}
            </HeaderLink>
          );
        })
      ) : (
        <div>burger</div>
      )}
    </div>
  );
};

HeaderNav.propTypes = { isDesktop: PropTypes.bool.isRequired };
