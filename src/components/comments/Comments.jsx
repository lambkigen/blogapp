import Image from "next/image";
import styles from "./comments.module.css";
import Link from "next/link";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment...."
            className={styles.input}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login in to comment</Link>
      )}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              alt="userimage"
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>10.23.2023</span>
            </div>
          </div>

          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            eaque alias aliquid, sapiente magni, architecto culpa iure possimus
            magnam perspiciatis impedit exercitationem, fugit aspernatur beatae
            doloribus voluptates ullam suscipit placeat.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              alt="userimage"
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>10.23.2023</span>
            </div>
          </div>

          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            eaque alias aliquid, sapiente magni, architecto culpa iure possimus
            magnam perspiciatis impedit exercitationem, fugit aspernatur beatae
            doloribus voluptates ullam suscipit placeat.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              alt="userimage"
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>10.23.2023</span>
            </div>
          </div>

          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            eaque alias aliquid, sapiente magni, architecto culpa iure possimus
            magnam perspiciatis impedit exercitationem, fugit aspernatur beatae
            doloribus voluptates ullam suscipit placeat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
