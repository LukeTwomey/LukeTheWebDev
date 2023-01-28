import Link from "next/link";
import Image from "next/image";
import styles from "../styles/404.module.css";

export const errorPage = () => {
  return (
    <>
      <main className={styles.error}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <Link href="/">Go back to the homepage...</Link>
        <Image
          src="/images/404.jpg"
          alt="Page not found"
          width="500"
          height="333"
        />
      </main>
    </>
  );
};

export default errorPage;
