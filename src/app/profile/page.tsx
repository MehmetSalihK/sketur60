import Image from 'next/image'

export default function Profile() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4">
      <div className="max-w-2xl mx-auto pt-20 flex flex-col items-center">
        {/* Photo de profil */}
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <Image
            src="/profile.jpg"
            alt="Photo de profil"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>

        {/* Nom d'utilisateur */}
        <h1 className="text-2xl font-bold mb-2">@sketur60</h1>

        {/* Description */}

        {/*<p className="text-lg text-gray-400 mb-8">Développeur Web</p> */}
        
      </div>
    </main>
  )
}