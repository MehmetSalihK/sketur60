import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6">Créez votre page de liens personnalisée</h1>
        <p className="text-xl text-gray-600 mb-8">
          Partagez tous vos liens importants en un seul endroit
        </p>
        <div className="space-x-4">
          <Link 
            href="/auth/signin" 
            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Se connecter
          </Link>
          <Link 
            href="/auth/signup" 
            className="bg-white text-black px-6 py-3 rounded-full font-medium border border-black hover:bg-gray-100 transition-colors"
          >
            S'inscrire
          </Link>
        </div>
      </div>
    </main>
  )
}