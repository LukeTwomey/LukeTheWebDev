import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className={styles.social}>
        <a href="https://www.facebook.com/profile.php?id=100089343968124">
          <Image
            src="/images/facebook.svg"
            alt="Facebook icon"
            width="40"
            height="40"
            className={styles.filterBlue}
            priority
          />
        </a>
        <a href="https://uk.linkedin.com/in/luketwomey85">
          <Image
            src="/images/linkedin.svg"
            alt="LinkedIn icon"
            width="40"
            height="40"
            className={styles.filterBlue}
            priority
          />
        </a>
        <a href="https://twitter.com/luke_the_webdev">
          <Image
            src="/images/twitter.svg"
            alt="Twitter icon"
            width="40"
            height="40"
            className={styles.filterBlue}
            priority
          />
        </a>
        <a href="https://www.pinterest.co.uk/lukethewebdev/">
          <Image
            src="/images/pinterest.svg"
            alt="Pinterest icon"
            width="40"
            height="40"
            className={styles.filterBlue}
            priority
          />
        </a>
        <a href="https://github.com/LukeTwomey">
          <Image
            src="/images/github.svg"
            alt="GitHub icon"
            width="40"
            height="40"
            className={styles.filterBlue}
            priority
          />
        </a>
      </div>

      <p className={styles.copyright}>
        Copyright &copy; {new Date().getFullYear()} Luke the Web Dev
      </p>
    </footer>
  );
};

export default Footer;
