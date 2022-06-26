import Link from 'next/link';
import styles from './header.module.scss';

const view = (props: { logo: string; }) => {
  const { logo, } = props;
  return (
    <div className={styles.brand}>
      <Link href="/">
        <a>
          <img src={logo} alt="Brand logo" className={styles.logo} />
        </a>
      </Link>
      <Link href="/">
        <a className={styles.name}></a>
      </Link>
    </div>
  );
};

export default view;
