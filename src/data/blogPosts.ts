export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  authorImage?: string;
  date: string;
  readTime: string;
  tags?: string[];
  metaTitle?: string;
  metaDescription?: string;
  views?: number;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [];
