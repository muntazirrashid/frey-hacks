import styles from './header.module.scss';
import Brand from './headerViewBrand';

const presenter = (props: { pathname: string; toggleMenu: () => void }) => {
  const { pathname, toggleMenu } = props;
  const isRoot = pathname === '/';
  return (
    <header className={styles.header}>
      <Brand logo="logo.png" />
    </header>
  );
};

export default presenter;
