import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    userName: string
    nome: string
    email: string
    image: string
  }
}
