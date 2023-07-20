import React from "react";
import styles from "./Botoes.module.css";

export default function Botoes({ children, tamanho }) {
  return (
    <button className={`${styles.botoes} ${styles[tamanho]}`}>
      {children}
    </button>
  );
}
