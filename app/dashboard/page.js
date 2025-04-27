'use client';

import { useEffect, useState } from "react";
import CharacterCard from "../components/characterCard";
import starwarService from "../services/starwarService";
import { useRouter } from 'next/navigation';
import { useFavorites } from "../context/FavoritesContext";
import CommonButton from '../components/button';

const ITEMS_PER_PAGE = 9;

export default function Dashboard() {
  const router = useRouter();
  const { addFavorite } = useFavorites();
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await starwarService.fetchCharacters();
      setCharacters(data);
    };
    fetchCharacters();
  }, []);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCharacters = characters.slice(startIndex, endIndex);
  const totalPages = Math.ceil(characters.length / ITEMS_PER_PAGE);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-zinc-800">Star Wars Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {currentCharacters.map((char, index) => (
          <CharacterCard
            key={char.name}
            character={char}
            id={startIndex + index}
            onView={() => router.push(`/dashboard/${startIndex + index}`)}
            onAdd={() => addFavorite(char)}
          />
        ))}
      </div>

      <div className="flex items-center gap-6 mt-10">
        <CommonButton label="Previous" variant="outline" onClick={goToPreviousPage} disabled={currentPage === 1} fullWidth />
        <CommonButton label="Next" variant="primary" onClick={goToNextPage} disabled={currentPage === totalPages} fullWidth />
      </div>

      <div className="mt-4 text-zinc-600 text-sm">
        Page {currentPage} of {totalPages}
      </div>
    </main>
  );
}
