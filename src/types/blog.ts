export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  coverUrl: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  content?: string;
}
