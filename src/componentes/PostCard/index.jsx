import styles from "./PostCard.module.css";

import React from "react";

export default function PostCard({ post }) {
  return (
    <div className={styles.post}>
      <img
        className={styles.capa}
        src={`/assets/posts/${post.id}/capa.png`}
        alt="Imagem de capa do post"
      />
      <h2 className={styles.titulo}>{post.titulo}</h2>
      <button className={styles.botaoLer}>Ler</button>
    </div>
  );
}
