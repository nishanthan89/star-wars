'use client';

import { useState } from "react";
import { useFavorites } from '../context/FavoritesContext';
import EditModal from "../components/EditModal";

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
  return (
    <div className="border rounded-lg shadow p-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{character.name}</h2>
      <p><strong>Home World:</strong> {character.homeWorld}</p>
      <p><strong>Birth Year:</strong> {character.birthYear}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Hair Color:</strong> {character.hairColor}</p>
      <p><strong>Height:</strong> {character.height}</p>
      <p><strong>Mass:</strong> {character.mass}</p>
    </div>
  );
}
