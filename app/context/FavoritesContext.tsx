'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface Character {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  // Add any other fields you need
}

interface FavoritesContextType {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (character: Character) => void;
}

// Give default values properly
const FavoriteContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const addFavorite = (character: Character) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.name === character.name)) {
        return [...prevFavorites, character];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (character: Character) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.name !== character.name)
    );
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoriteContext);
};
