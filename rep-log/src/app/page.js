import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
      <main>
        <h1>repLog / repGen</h1>
        <div className={styles.searchBar}>
          <input />
          <button>
          </button>
        </div>
      </main>
  );
}
