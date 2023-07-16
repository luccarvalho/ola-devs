import React from "react";
import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Lucas!</h3>
      <img
        className={styles.fotoSobreMim}
        src={fotoSobreMim}
        alt="Foto do Lucas Carvalho"
      />
      <p className={styles.paragrafo}>
        Olá, Dev! Tudo bom? Eu também sou um desenvolvedor e estou feliz de te
        ver por aqui.
      </p>
      <p className={styles.paragrafo}>
        Meu interesse pelo universo da programação começou a muito tempo, mas
        demorei um pouco para iniciar de fato minha caminhada em direção a essa
        área tão fascinante.
      </p>
      <p className={styles.paragrafo}>
        Minha trajetória no mercado de trabalho começou na área de Comunicação
        Visual, pois eu também gostava de design, layouts, ajustes de cores,
        entre outros parâmetros visuais. Inicialmente comecei na área de
        produção de uma Gráfica de grande porte, sendo assistente de impressão,
        atuava cuidando das impressoras e auxiliando o impressor sênior.
      </p>
      <p className={styles.paragrafo}>
        O tempo foi passando e me tornei impressor júnior, depois impressor
        pleno, mas nesse momento eu já tinha um interesse muito maior na área de
        pré-impressão, que era a área que manipulava os arquivos digitais antes
        da produção, como campanhas publicitarias e marketing de diversos
        clientes, até de marcas muito grandes do mercado, tive a oportunidade de
        trabalhar com marcas como Nike, Pernambucanas, Boticário, entre outras.
      </p>
      <p className={styles.paragrafo}>
        Então decidi fazer algumas especializações e treinamentos em softwares e
        ferramentas de edição e criação de imagens, como Photoshop, Illustrator,
        InDesign, CorelDraw, entre outras.
      </p>
      <p className={styles.paragrafo}>
        Consegui fazer minha transição para essa nova área de pré-impressão com
        uma certa facilidade, afinal, eu já tinha uma grande proximidade com
        ela, pelo que eu fazia antes como impressor.
      </p>
      <p className={styles.paragrafo}>
        Com o tempo passei por algumas empresas de Comunicação Visual, sempre
        atuando com pré-impressão e assuntos correlacionados a isso, aprendi
        muitas coisas, participei de muitos projetos grandes e desafiadores, e
        conheci muitos bons profissionais.
      </p>
      <p className={styles.paragrafo}>
        Mas por eu estar sempre na frente de um computador, uma curiosidade que
        eu tinha desde a minha adolescência, começou a ficar maior, que era a
        vontade de entender por exemplo, como funciona o sistema operacional de
        um computador, como as coisas se integram, como os programas se
        comunicam?
      </p>
      <p className={styles.paragrafo}>
        Ainda atuando na área de Comunicação Visual, comecei a fazer alguns
        cursos básicos, como Montagem e Manutenção de Computadores, seguido de
        Conceitos e Infraestrutura de Redes e mais um treinamento de Tecnologia
        e Projeto Web.
      </p>
      <p className={styles.paragrafo}>
        Isso me ajudou a ter um início de entendimento sobre conceitos
        diferentes e me mostrou como a área de T.I é gigante.
      </p>
      <p className={styles.paragrafo}>
        Algum tempo depois decidi fazer uma graduação, e me formei em Análise e
        Desenvolvimento de Sistemas pela Universidade Paulista (UNIP), comecei a
        me interessar muito pelo desenvolvimento Front-end, provavelmente por
        ter atuado com Comunicação Visual por tanto tempo.
      </p>
      <p className={styles.paragrafo}>
        Fiz diversos treinamentos e desenvolvi muitos projetos utilizando
        JavaScript, React, PHP, Bootstrap, Banco de Dados, versionamento de
        código, entre outras tecnologias e ferramentas. Aprendi sobre
        metodologias ágeis, como Kanban e Scrum. E tudo isso pode ser conferido
        em meus repositórios no GitHub.
      </p>
      <p className={styles.paragrafo}>
        E então decidi atuar com Desenvolvimento Web.
      </p>
      <p className={styles.paragrafo}>
        Desde então tem sido aprendizado atrás de aprendizado, e sempre será
        assim, porque essa é a essência de um bom programador, estaremos sempre
        explorando novas tecnologias e buscando desenvolver soluções.
      </p>
    </PostModelo>
  );
}
