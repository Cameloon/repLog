import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null); //for holding fetched data
  const [loading, setLoading] = useState(true); // to check if data is still loading
  const [searchAnimal, setSearchAnimal] = useState(""); //stores animal that is typed in search bar





  return (
      <main className={styles.main}>
        <h1>repLog / repGen</h1>
        <div className={styles.searchBar}>
          <input className={styles.searchInput} /><button className={styles.searchBtn}>search
          </button>
        </div>
        



      </main>
  );
}
