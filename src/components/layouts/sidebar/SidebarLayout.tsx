import Link from 'next/link';
import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = ({}) => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link className={styles.a} href="/">
        Home
      </Link>
      <Link className={styles.a} href="/about">
        About
      </Link>
    </nav>
  );
};

export default SidebarLayout;
