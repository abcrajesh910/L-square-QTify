import React from "react";
import { Chip, Tooltip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ data, type }) {
  if (type === "album") {
    const { image, follows, title, songs } = data;
    return (
      <Tooltip title={`${songs.length} songs`} placement="top" arrow>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={image} alt="album" />
            <div className={styles.banner}>
              <Chip label={`${follows} Follows`} size="small" className={styles.chip} />
            </div>
          </div>
          <div className={styles.titleWrapper}>
            <p>{title}</p>
          </div>
        </div>
      </Tooltip>
    );
  }

  if (type === "song") {
    const { image, likes, title } = data;
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={image} alt="song" />
          <div className={styles.banner}>
            <Chip label={`${likes} Likes`} size="small" className={styles.chip} />
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <p>{title}</p>
        </div>
      </div>
    );
  }
  return null;
}
export default Card;