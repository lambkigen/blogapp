import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Lorem, ipsum</b> dolor sit amet consectetur ad
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="post" fill className={styles.image} />
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            facilis.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            necessitatibus est quis esse accusantium quas similique perferendis
            velit suscipit veritatis?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
