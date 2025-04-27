'use client';

import { useFavorites } from '../context/FavoritesContext';
import { useState } from 'react';
import Modal from '../components/EditModal';
import CommonButton from '../components/button';

export default function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  console.log(favorites);

  const openModal = (character: any) => {
    console.log('text cc is'+character);
    setSelectedCharacter(character);
  };
  

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {favorites.map((character) => (
                <div key={character.id} className="bg-white rounded-lg shadow-md p-4 relative">
            <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
            <p><strong>Height:</strong> {character.height} cm</p>
            <p><strong>Mass:</strong> {character.mass} kg</p>

            <div className="flex gap-4 mt-4">
                <CommonButton label="Edit" variant="primary" onClick={() => openModal(character)} fullWidth />
                <CommonButton label="Remove" variant="outline" onClick={() => removeFavorite(character.id)} fullWidth />
            </div>
            </div>

            ))}

        </div>
      )}

    {selectedCharacter && (
            <Modal character={selectedCharacter} onClose={closeModal} />
        )}
    </div>
  );
}