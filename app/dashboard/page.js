'use client';
import { useEffect, useState } from "react";
import CharacterCard from "../components/characterCard";
import starwarService from "../services/starwarService";
import { useRouter } from 'next/navigation';
import { useFavorites } from "../context/FavoritesContext";  // ADD THIS

export default function Dashboard() {
  const router = useRouter();
  const { addFavorite } = useFavorites(); // ADD THIS
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await starwarService.fetchCharacters();
      setCharacters(data);
    };
    fetchCharacters();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-zinc-800">Star Wars Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((char, index) => (
          <CharacterCard
            key={char.name}
            character={char}
            id={index}
            onView={() => router.push(`/dashboard/${index}`)}
            onAdd={() => addFavorite(char)} // <-- Add favorite properly
          />
        ))}
      </div>
    </main>
  );
}

  
