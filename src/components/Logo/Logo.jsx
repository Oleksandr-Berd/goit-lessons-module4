import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src="https://cdn.cghero.com/files/2022-03-10/MyZ6Zmzzs7g6d2EG.jpg?versionId=4wDItaswG5Cmk2VYXztddXozywDIN2v3&size=lg"
        alt=""
      />
      <span className={styles.name}>Kratos</span>
    </div>
  );
};
