'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isLive, setIsLive] = useState(false);
  const [isKickLive, setIsKickLive] = useState(false);

  useEffect(() => {
    const checkTwitchStatus = async () => {
      try {
        const clientId = process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID;
        const response = await fetch('https://api.twitch.tv/helix/streams?user_login=msketur60', {
          headers: {
            'Client-ID': clientId,
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TWITCH_ACCESS_TOKEN}`
          }
        });
        const data = await response.json();
        setIsLive(data.data.length > 0);
      } catch (error) {
        console.error('Error checking Twitch status:', error);
        setIsLive(false);
      }
    };

    checkTwitchStatus();
    const interval = setInterval(checkTwitchStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkKickStatus = async () => {
      try {
        const response = await fetch('https://kick.com/api/v2/channels/sketur60');
        const data = await response.json();
        setIsKickLive(data.livestream !== null);
      } catch (error) {
        console.error('Error checking Kick status:', error);
        setIsKickLive(false);
      }
    };

    checkKickStatus();
    const interval = setInterval(checkKickStatus, 60000); // Vérifie toutes les minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-cyan-900 to-black text-white p-4 antialiased relative overflow-hidden">
      {/* Particules animées */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-500/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}rem`,
                height: `${Math.random() * 4 + 2}rem`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto pt-16 flex flex-col items-center px-4 relative z-10">
        {/* Photo de profil avec animation */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-cyan-500/30">
            <Image
              src="/profile.jpg"
              alt="Photo de profil"
              width={128}
              height={128}
              className="object-cover hover:scale-110 transition-transform duration-200"
            />
          </div>
        </div>

        {/* Nom d'utilisateur avec animation */}
        <h1 className="text-3xl font-bold mt-6 mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text hover:scale-105 transition-transform duration-200">@sketur60</h1>

        {/* Liste des liens */}
        <div className="w-full max-w-md space-y-3">
          {/* Liste des liens */}
          <div className="w-full max-w-md space-y-3">
            {/* YouTube */}
            <Link href="https://youtube.com/@sketur60" 
                className="group flex items-center justify-between p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <span className="font-medium text-lg group-hover:text-cyan-400 transition-colors">YouTube</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">@sketur60</span>
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </div>
            </Link>
    
            {/* Twitch avec status live */}
            <Link href="https://twitch.tv/msketur60" 
                className="group flex items-center justify-between p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <span className="font-medium text-lg group-hover:text-cyan-400 transition-colors">Twitch</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">@msketur60</span>
                {isLive ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-red-500 animate-pulse">EN DIRECT</span>
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  </div>
                ) : (
                  <span className="text-xs text-gray-500">OFFLINE</span>
                )}
                <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
              </div>
            </Link>
    
            {/* Kick avec status live */}
            <Link href="https://kick.com/sketur60" 
                className="group flex items-center justify-between p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <span className="font-medium text-lg group-hover:text-cyan-400 transition-colors">Kick</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">@sketur60</span>
                {isKickLive ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-red-500 animate-pulse">EN DIRECT</span>
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  </div>
                ) : (
                  <span className="text-xs text-gray-500">OFFLINE</span>
                )}
                <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 6.873a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM5 8.873a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7-18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
              </div>
            </Link>
    
            {/* TikTok */}
            <Link href="https://tiktok.com/@sketur60" 
                className="group flex items-center justify-between p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <span className="font-medium text-lg group-hover:text-cyan-400 transition-colors">TikTok</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">@sketur60</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </div>
            </Link>
    
            {/* X (Twitter) */}
            <Link href="https://twitter.com/sketur60" 
                className="group flex items-center justify-between p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <span className="font-medium text-lg group-hover:text-cyan-400 transition-colors">X (Twitter)</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">@sketur60</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
            </Link>
    
            {/* Instagram (Perso) */}
            <Link href="https://instagram.com/sketur60" 
                className="group flex items-center justify-between p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <span className="font-medium text-lg group-hover:text-cyan-400 transition-colors">Instagram (Perso)</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">@sketur60</span>
                <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
            </Link>
    
            {/* Instagram (Vidéos) */}
            <Link href="https://instagram.com/msketur60" 
                className="group flex items-center justify-between p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <span className="font-medium text-lg group-hover:text-cyan-400 transition-colors">Instagram (Vidéos)</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">@msketur60</span>
                <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
            </Link>
    
            {/* Snapchat */}
            <Link href="https://snapchat.com/add/sketur60" 
                className="group flex items-center justify-between p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <span className="font-medium text-lg group-hover:text-cyan-400 transition-colors">Snapchat</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">@sketur60</span>
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.075-.046-.15-.046-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/></svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}