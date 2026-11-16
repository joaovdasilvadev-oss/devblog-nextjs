import Link from "next/link";
import { artigos, gerarSlug } from "@/data/artigos";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.tag}>TECNOLOGIA E DESENVOLVIMENTO</span>

          <h1>
            Conhecimento que transforma
            <span> ideias em código.</span>
          </h1>

          <p>
            Explore artigos sobre programação, desenvolvimento web,
            React, Next.js e as tecnologias que estão moldando o futuro.
          </p>

          <a href="#artigos" className={styles.button}>
            Explorar artigos
          </a>
        </div>
      </section>

      <section id="artigos" className={styles.articles}>
        <div className={styles.sectionTitle}>
          <span>CONTEÚDO</span>
          <h2>Últimos artigos</h2>
          <p>Aprenda, explore e evolua como desenvolvedor.</p>
        </div>

        <div className={styles.grid}>
          {artigos.map((artigo) => (
            <article key={artigo.id} className={styles.card}>
              <div className={styles.cardContent}>
                <span className={styles.category}>DESENVOLVIMENTO</span>

                <h3>{artigo.titulo}</h3>

                <p>{artigo.descricao}</p>

                <div className={styles.info}>
                  <span>{artigo.autor}</span>
                  <span>{artigo.data}</span>
                </div>

                <Link
                  href={`/artigos/${gerarSlug(artigo.titulo)}`}
                  className={styles.readMore}
                >
                  Ler artigo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}