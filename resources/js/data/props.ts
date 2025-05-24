export type Project = {
    id: number
    title: string
    category: Category
    tags: string[] // JSON array
    image: string
    description: string
    video_url?: string | null
    client_name?: string | null
    completion_date?: string | null // usually a string in 'YYYY-MM-DD' format
    project_url?: string | null
    features?: string[] | null // JSON array
    service: Service
    created_at: string
    updated_at: string
  }
  
  export type Category = {
    id: number
    name: string
    created_at: string
    updated_at: string
  }
  
  export type Service = {
    id: number
    name: string
    description?: string
    icon:string,
    price?: number
    created_at: string
    updated_at: string
  }
  export type Language = {
    id: number
    name: string
    percentage?: number // optional if you're using it in progress bars
  }
  export type ProjectWithLanguages = Project & {
    languages: Language[]
  }

  export type Comment ={
    id: number;
    author: string;
    content: string;
    date: string;
  }
  
  export type BlogPost ={
    id: number;
    title: string;
    excerpt: string;
    content: string;
    category: Category;
    date: string;
    author: string;
    image: string;
    comments: Comment[];
  }