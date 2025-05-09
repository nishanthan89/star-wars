'use client'; 
import { Favorite, FavoriteBorder, Public, CalendarToday, Wc, Face, Height, FitnessCenter } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useFavorites } from '../context/FavoritesContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommonButton from '../components/button';


export default function CharacterCard({ character,onView, onAdd,id}: any) {
  const router = useRouter();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorited = favorites.some((fav) => fav.name === character.name);

  const toggleFavorite = () => {
    if (isFavorited) {
      removeFavorite(character);
    } else {
      addFavorite(character);
    }
  };

  const viewDetailCharacter = () => {
    console.log("Navigating to: ", `/dashboard/${id}`);
    router.push(`/dashboard/${id}`);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between transition hover:scale-105 relative">

<div className="absolute top-2 right-2 cursor-pointer" onClick={toggleFavorite}>
        {isFavorited ? <FavoriteIcon sx={{ color: 'blue' }} /> : <FavoriteBorderIcon sx={{ color: 'gray' }} />}
      </div>
      <h2 className="text-2xl font-bold text-blue-600 mb-4">{character.name}</h2>
      <ul className="text-sm text-zinc-600 space-y-2 mt-2">
          <li className="flex items-center">
            <Public className="text-blue-600 mr-2" /> 
            <span className="font-bold">Home World:</span>&nbsp;{character.homeworld || "Unknown"}
          </li>
          <li className="flex items-center">
            <CalendarToday className="text-blue-600 mr-2" /> 
            <span className="font-bold">Birth Year:</span>&nbsp;{character.birthYear || '-'}
          </li>
          <li className="flex items-center">
            <Wc className="text-blue-600 mr-2" /> 
            <span className="font-bold">Gender:</span>&nbsp;{character.gender || '-'}
          </li>
          <li className="flex items-center">
            <Face className="text-blue-600 mr-2" /> 
            <span className="font-bold">Hair Color:</span>&nbsp;{character.haircolor || '-'}
          </li>
          <li className="flex items-center">
            <Height className="text-blue-600 mr-2" /> 
            <span className="font-bold">Height:</span>&nbsp;{character.height || '-'}
          </li>
          <li className="flex items-center">
            <FitnessCenter className="text-blue-600 mr-2" /> 
            <span className="font-bold">Mass:</span>&nbsp;{character.mass || '-'}
          </li>
        </ul>
        <CommonButton label="View Detail" variant="primary" onClick={onView} fullWidth />
    </div>
  );
}
