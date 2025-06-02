export interface User {
  id: string
  username: string
  email: string
  bio?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface Link {
  id: string
  user_id: string
  title: string
  url: string
  order: number
  created_at: string
  updated_at: string
}