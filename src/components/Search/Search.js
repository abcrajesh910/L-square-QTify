import React from "react";
import styles from "./Search.module.css";

const Search = ({ placeholder }) => {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder={placeholder} />
      <button className={styles.searchButton}>
        {/* Placeholder for Search Icon */}
        🔍
      </button>
    </form>
  );
};

export default Search;