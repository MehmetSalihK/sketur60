import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mehmet Salih - Développeur Fullstack',
  description: 'Portfolio et liens de Mehmet Salih',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

1. Ajouter une photo de profil dans le dossier `public` nommée `profile.jpg`

2. Modifier le fichier layout.tsx pour avoir le bon thème sombre :
