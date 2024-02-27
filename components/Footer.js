import Link from "next/link";
import Socials from "./Socials";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className={styles.socials}>
        <Socials />
      </div>

      <p className={styles.copyright}>
        Copyright &copy; {new Date().getFullYear()} Luke the Web Dev
      </p>
    </footer>
  );
};

export default Footer;
