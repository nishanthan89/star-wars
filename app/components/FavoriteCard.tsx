'use client';

import { useState } from "react";
import { useFavorites } from '../context/FavoritesContext';
//import EditModal from "../components/EditModal";

type Character = {
  id: number;
  name: string;
  height: string;
  gender: string;
  homeWorld: string;
  birthYear: string;
  hairColor: string;
  mass: string;
};

export default function FavoriteCard({ character }: { character: Character }) {
  const { removeFavorite } = useFavorites();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="border rounded-lg shadow p-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{character.name}</h2>
      <p><strong>Home World:</strong> {character.homeWorld}</p>
      <p><strong>Birth Year:</strong> {character.birthYear}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Hair Color:</strong> {character.hairColor}</p>
      <p><strong>Height:</strong> {character.height}</p>
      <p><strong>Mass:</strong> {character.mass}</p>

      <div className="flex gap-4 mt-4">
        <button 
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>
        {/* <button 
          onClick={() => removeFavorite(character.id)}
          className="border border-blue-500 text-blue-500 px-4 py-2 rounded"
        >
          Remove
        </button> */}
      </div>

      {/* {isEditing && <EditModal character={character} onClose={() => setIsEditing(false)} />} */}
    </div>
  );
}
