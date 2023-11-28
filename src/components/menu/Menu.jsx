import Link from "next/link";
import styles from "./menu.module.css";
import MenuPosts from "@/menuPosts/MenuPosts";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Whats Hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts WithImage={false} />

      {/* middle section start */}

      <h2 className={styles.subtitle}>Discover by Topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          style
        </Link>
        <Link
          href={`/blog`}
          className={`${styles.categoryItem} ${styles.fashion}`}
        >
          fashion
        </Link>
        <Link
          href={`/blog`}
          className={`${styles.categoryItem} ${styles.food}`}
        >
          food
        </Link>
        <Link
          href={`/blog`}
          className={`${styles.categoryItem} ${styles.travel}`}
        >
          travel
        </Link>
        <Link
          href={`/blog`}
          className={`${styles.categoryItem} ${styles.culture}`}
        >
          culture
        </Link>
        <Link
          href={`/blog`}
          className={`${styles.categoryItem} ${styles.coding}`}
        >
          coding
        </Link>
      </div>
      {/* middle section end */}

      <h2 className={styles.subtitle}>Choosing by the Editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>

      <MenuPosts WithImage={true} />
    </div>
  );
};

export default Menu;
