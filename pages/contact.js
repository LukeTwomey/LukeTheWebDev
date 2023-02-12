import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";
import ContactForm from "../components/ContactForm";
import styles from "../styles/contact.module.css";

export const Contact = () => {
  return (
    <div class="background">
      <Head>
        <meta charset="utf-8" />
        <meta name="author" content="Luke Twomey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Contact Me | Luke the Web Dev</title>
        <meta
          name="description"
          content="Have a great idea you'd like to discuss? Perhaps you'd like some help after reading one of my blog posts! Please do contact me, I would love to hear from you."
        ></meta>
      </Head>
      <main className="contact">
        <div className="content">
          <h1>Contact Me</h1>
          <div className="flex">
            <div>
              <Image
                src="/images/me-in-india.webp"
                alt="Luke Twomey"
                width="358"
                height="166"
                style={{
                  height: "auto",
                  width: "100%",
                }}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
                className={styles.image}
                itemProp="image"
              />
              <p>
                Do you have a great business idea you'd like to discuss? Perhaps
                you'd like some help after reading one of my{" "}
                <Link href={"/blog"}>blog posts</Link>! Please do contact me, I
                would love to hear from you.
              </p>

              <div className={styles.socials}>
                <Socials />
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
