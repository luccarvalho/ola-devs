import React from "react";
import styles from "./NaoEncontrada.module.css";
import erro404 from "assets/erro_404.png";
import Botoes from "componentes/Botoes";
import { useNavigate } from "react-router";

export default function NaoEncontrada() {
  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
        <p className={styles.paragrafo}>
          Tem certeza que era isso que você estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde um instante e recarregue a página, ou volte para a página
          inicial.
        </p>
        <div className={styles.botaoContainer} onClick={() => navegar(-1)}>
          <Botoes tamanho="lg">Voltar</Botoes>
        </div>
        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="Cachorro de óculos e vestido como uma pessoa"
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
