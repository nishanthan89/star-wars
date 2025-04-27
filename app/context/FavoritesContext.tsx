'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface Character {
  id: number;
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
}

interface FavoritesContextType {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (id: number) => void;
}

const FavoriteContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [nextId, setNextId] = useState(1); 

  const addFavorite = (character: Character) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.name === character.name)) {
        const newCharacter = { ...character, id: nextId }; 
        setNextId(nextId + 1); 
        return [...prevFavorites, newCharacter];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (id: number) => {
    setFavorites(prev => prev.filter(fav => fav.id !== id));
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

