'use client';
import { use } from 'react';
import mockCharacterData from '../../mockCharacterData';
import Link from 'next/link';
import { useFavorites } from '../../context/FavoritesContext';
import CommonButton from '../../components/button';

export default function CharacterDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const { slug } = use(params); 
  const characterIndex = parseInt(slug, 10);
  const character = mockCharacterData[characterIndex];

  if (!character) {
    return <div>Character not found</div>;
  }

  const isFavorite = favorites.some(fav => fav.name === character.name);

  const handleAdd = () => {
    addFavorite({
      id: Date.now(),
      name: character.name,
      height: character.height.toString(),
      mass: character.mass.toString(),
      hairColor: character.hairColor || 'unknown',
      skinColor: character.hairColor || 'unknown',
      eyeColor: character.hairColor || 'unknown',
      birthYear: character.birthYear,
      gender: character.gender,
    });
  };

  const handleRemove = () => {
    const fav = favorites.find(fav => fav.name === character.name);
    if (fav) {
      removeFavorite(fav.id);
    }
  };

  return (
    <main className="p-6">
      <Link href="/dashboard" className="text-blue-600 underline mb-4 inline-block">&larr; Back to Dashboard</Link>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-center">{character.name}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div><strong>Height:</strong> {character.height} cm</div>
          <div><strong>Mass:</strong> {character.mass} kg</div>
          <div><strong>Hair Color:</strong> {character.hairColor}</div>
          <div><strong>Skin Color:</strong> {character.hairColor}</div> 
          <div><strong>Eye Color:</strong> {character.hairColor}</div>
          <div><strong>Birth Year:</strong> {character.birthYear}</div>
          <div><strong>Gender:</strong> {character.gender}</div>
        </div>

        <div className="text-center">
          {isFavorite ? (
             <CommonButton label="Remove from Favorites" variant="outline" onClick={handleRemove} fullWidth />
          ) : (
            <CommonButton label="Add to Favorites" variant="primary" onClick={handleAdd} fullWidth />
          )}
        </div>
      </div>
    </main>
  );
}
