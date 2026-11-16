import slugify from "slugify";

export interface Artigo {
  id: number;
  titulo: string;
  autor: string;
  data: string;
  descricao: string;
  conteudo: string[];
}

export const artigos: Artigo[] = [
  {
    id: 1,
    titulo: "Introdução ao Next.js",
    autor: "João Victor",
    data: "10/11/2026",
    descricao: "Conheça o Next.js e descubra como ele facilita o desenvolvimento de aplicações React.",
    conteudo: [
      "O Next.js é um framework baseado em React utilizado para desenvolver aplicações web modernas e performáticas.",
      "Uma das principais vantagens do Next.js é seu sistema de roteamento baseado em arquivos, que permite criar páginas sem precisar configurar manualmente um roteador.",
      "Além disso, o framework oferece recursos como Server Components, renderização estática, renderização no servidor e otimização para mecanismos de busca.",
      "Com essas ferramentas, desenvolvedores conseguem construir aplicações escaláveis, organizadas e preparadas para produção."
    ]
  },
  {
    id: 2,
    titulo: "React e o desenvolvimento moderno",
    autor: "Maria Oliveira",
    data: "12/11/2026",
    descricao: "Entenda como o React revolucionou a criação de interfaces modernas.",
    conteudo: [
      "React é uma biblioteca JavaScript utilizada para construir interfaces de usuário por meio de componentes reutilizáveis.",
      "Os componentes permitem dividir uma aplicação em partes menores, facilitando a organização e a manutenção do código.",
      "Outro recurso importante é o gerenciamento de estado, que permite atualizar a interface conforme os dados são modificados.",
      "Atualmente, React é uma das principais tecnologias utilizadas no desenvolvimento front-end."
    ]
  },
  {
    id: 3,
    titulo: "SEO e performance na web",
    autor: "Carlos Santos",
    data: "14/11/2026",
    descricao: "Aprenda a importância do SEO e da performance para aplicações web.",
    conteudo: [
      "SEO significa Search Engine Optimization e representa um conjunto de técnicas utilizadas para melhorar a visibilidade de páginas nos mecanismos de busca.",
      "Uma boa estrutura HTML, títulos relevantes e descrições adequadas ajudam os mecanismos de busca a compreender o conteúdo.",
      "A performance também é fundamental, pois páginas rápidas oferecem uma experiência melhor aos visitantes.",
      "Frameworks como Next.js oferecem recursos que ajudam a desenvolver aplicações otimizadas para SEO e desempenho."
    ]
  },
  {
    id: 4,
    titulo: "TypeScript para desenvolvedores",
    autor: "Ana Costa",
    data: "15/11/2026",
    descricao: "Descubra como o TypeScript melhora a qualidade e a segurança do código.",
    conteudo: [
      "TypeScript é uma linguagem baseada em JavaScript que adiciona um sistema de tipagem estática.",
      "Com interfaces e tipos, é possível identificar diversos erros durante o desenvolvimento, antes mesmo de executar a aplicação.",
      "O TypeScript também facilita a manutenção de projetos maiores e melhora a experiência de desenvolvimento nos editores de código.",
      "Por isso, é bastante utilizado em aplicações modernas desenvolvidas com React e Next.js."
    ]
  }
];

export function gerarSlug(titulo: string): string {
  return slugify(titulo, {
    lower: true,
    strict: true,
    locale: "pt"
  });
}

export function buscarArtigo(slug: string): Artigo | undefined {
  return artigos.find(
    (artigo) => gerarSlug(artigo.titulo) === slug
  );
}