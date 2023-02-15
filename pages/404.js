import Link from "next/link";
import Image from "next/image";
import styles from "../styles/404.module.css";

export const errorPage = () => {
  return (
    <>
      <main className={styles.error}>
        <div className="content">
          <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <Link href="/">Go back to the homepage...</Link>
          </div>
          <Image
            src="/images/404.webp"
            alt="Page not found"
            width="1000"
            height="667"
            style={{
              height: "auto",
              width: "100%",
            }}
          />
        </div>
      </main>
    </>
  );
};

export default errorPage;
