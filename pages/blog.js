import Image from "next/image";
import clientPromise from "../lib/mongodb";
import styles from "../styles/blog.module.css";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const Blog = ({ posts }) => {
  return (
    <main className={styles.blog}>
      <h1>Blog</h1>
      <p>
        Welcome to my blog! I'll be covering a range of development topics here,
        at various different experience levels. You can filter using the toggles
        below.
      </p>
      <p></p>
      <section className={styles.posts}>
        {posts.map((post) => (
          <article className={styles.post} key={post.id}>
            <Image
              src={`/images/${post.previewImage}`}
              alt={post.title}
              width="358"
              height="170"
              className="full-width"
              priority
            />
            <div className="preview">
              {/* <Link to={`${post.id}`} onClick={scrollToTop}> */}
              <h3>{post.title}</h3>
              {/* </Link> */}
              <h4>{post.dateCreated}</h4>
              <p>{post.preview}</p>
              {/* <Link to={`${post.id}`} onClick={scrollToTop}> */}
              Read post
              {/* </Link> */}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export async function getStaticProps() {
  const client = await clientPromise;
  const db = client.db("production");
  const posts = await db.collection("posts").find().toArray();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

export default Blog;
