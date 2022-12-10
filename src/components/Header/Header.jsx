import { Container } from 'components/Container/Container';
import { Logo } from 'components/Logo/Logo';
import { HeaderNav } from './HeaderNav/HeaderNav';
import styles from './Header.module.css';

export const Header = () => {
  const isDesktop = window.innerWidth > 1200;
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.container}>
          <Logo />
          <HeaderNav isDesktop={isDesktop} />
        </div>
      </Container>
    </header>
  );
};
