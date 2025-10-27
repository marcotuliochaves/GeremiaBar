"use client";

import Image from "next/image";
import { Heart, MessageCircle, Play } from "lucide-react";
import { useParams } from "next/navigation";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function GaleriaPage() {
  const { locale } = useParams() as { locale?: string };
  const safeLocale = (locale ?? "pt") as "pt" | "en";
  const text = t[safeLocale];

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen px-4 py-12 -mb-20 text-center"
      style={{ backgroundColor: "#2E4024" }}
    >
      {/* --- Área simulando o Instagram --- */}
      <div className="mt-16 bg-black pb-9 text-white">
        {/* Header da conta */}
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-6 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <Image
              src="/gere-perfil.webp"
              alt="Geremia Bar"
              width={80}
              height={80}
              className="rounded-full border border-gray-600 p-1 bg-black"
            />
            <div className="text-left">
              <h1 className="text-2xl font-semibold">@geremiabar</h1>
              <p className="text-gray-400 text-sm">{text.bio}</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 flex gap-6 text-center">
            <div>
              <p className="font-semibold text-gray-100">3647</p>
              <p className="text-gray-400 text-sm">{text.posts}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-100">22.8k</p>
              <p className="text-gray-400 text-sm">{text.followers}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-100">270</p>
              <p className="text-gray-400 text-sm">{text.following}</p>
            </div>
          </div>
        </div>

        {/* Grade de fotos/vídeos */}
        <main className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[2px] mt-6">
          {mockMedia.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden aspect-square bg-gray-900"
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={`Post ${index + 1}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              )}

              {/* Overlay ao passar o mouse */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-1">
                  <Heart className="w-5 h-5" />
                  <span>{item.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-5 h-5" />
                  <span>{item.comments}</span>
                </div>
              </div>

              {/* Ícone de vídeo no canto superior direito */}
              {item.type === "video" && (
                <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1">
                  <Play className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}
        </main>
      </div>
      <ScrollToTopButton />
    </main>
  );
}

/* --- SIMULAÇÃO DE API --- */
const mockMedia = [
  { src: "/post1.webp", type: "image", likes: 38, comments: 1 },
  { src: "/video1.mp4", type: "video", likes: 4027, comments: 98 },
  { src: "/video4.mp4", type: "video", likes: 2628, comments: 61 },
  { src: "/video2.mp4", type: "video", likes: 32, comments: 0 },
  { src: "/video3.mp4", type: "video", likes: 37, comments: 5 },
  { src: "/post2.webp", type: "image", likes: 35, comments: 1 },
  { src: "/video5.mp4", type: "video", likes: 32, comments: 7 },
  { src: "/post2-2.webp", type: "image", likes: 35, comments: 1 },
];

const t = {
  pt: {
    bio: "Bar e restaurante — tradição e sabor desde 2015 🍻",
    posts: "publicações",
    followers: "seguidores",
    following: "seguindo",
  },
  en: {
    bio: "Bar and restaurant — tradition and flavor since 2015 🍻",
    posts: "posts",
    followers: "followers",
    following: "following",
  },
};
