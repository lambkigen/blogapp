"use client";

import Image from "next/image";
import styles from "./write.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("")
  return (
    <div className={styles.container}>
      <input type="text" placeholder="title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="plusbtn" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="imagebtn" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image
                src="/external.png"
                alt="externalbtn"
                width={16}
                height={16}
              />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="videobtn" width={16} height={16} />
            </button>
          </div>
        )}

        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell a Story..."
        />
      </div>

      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
