export interface ApiData {
    totalArticles: number;
    articles: Article[];
  }
  
  interface Article {
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: string;
    source: Source;
  }
  
  interface Source {
    name: string;
    url: string;
  }