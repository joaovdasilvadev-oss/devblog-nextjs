import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 DevBlog - Todos os direitos reservados.</p>
      <p>Desenvolvido com Next.js e TypeScript.</p>
    </footer>
  );
}