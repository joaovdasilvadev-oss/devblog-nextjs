import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          DevBlog<span>.</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Início</Link>
          <a href="#artigos">Artigos</a>
        </nav>
      </div>
    </header>
  );
}