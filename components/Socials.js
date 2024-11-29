import Link from "next/link";
import Image from "next/image";
import styles from "./Socials.module.css";

export const Socials = () => {
  return (
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
      <a href="https://uk.linkedin.com/in/lukeanderson85">
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
  );
};

export default Socials;
