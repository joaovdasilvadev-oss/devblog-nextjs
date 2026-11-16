import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  artigos,
  buscarArtigo,
  gerarSlug
} from "@/data/artigos";

import styles from "./artigo.module.css";

interface ArtigoPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Define os artigos que serão gerados estaticamente.
export function generateStaticParams() {
  return artigos.map((artigo) => ({
    slug: gerarSlug(artigo.titulo)
  }));
}

// Gera os metadados individuais de cada artigo.
export async function generateMetadata({
  params
}: ArtigoPageProps): Promise<Metadata> {
  const { slug } = await params;

  const artigo = buscarArtigo(slug);

  if (!artigo) {
    return {
      title: "Artigo não encontrado | DevBlog"
    };
  }

  return {
    title: `${artigo.titulo} | DevBlog`,
    description: artigo.descricao
  };
}

// Página dinâmica renderizada no servidor.
export default async function ArtigoPage({
  params
}: ArtigoPageProps) {
  const { slug } = await params;

  const artigo = buscarArtigo(slug);

  if (!artigo) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <article className={styles.article}>
        <span className={styles.category}>
          DESENVOLVIMENTO
        </span>

        <h1>{artigo.titulo}</h1>

        <div className={styles.info}>
          <span>Por {artigo.autor}</span>
          <span>{artigo.data}</span>
        </div>

        <p className={styles.description}>
          {artigo.descricao}
        </p>

        <div className={styles.content}>
          {artigo.conteudo.map((paragrafo, index) => (
            <p key={index}>
              {paragrafo}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}