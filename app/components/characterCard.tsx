
import Image from "next/image";

export default function CharacterCard({ character, onAdd, onView }: any) {
  return (
    <div className="bg-white dark:bg-zinc-800 shadow-md rounded-xl p-4 flex flex-col justify-between transition hover:scale-105">
      <div>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{character.name}</h2>
        <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
          <li>Gender: {character.gender}</li>
          <li>Birth Year: {character.birth_year}</li>
          <li>Hair Color: {character.hair_color}</li>
          <li>Height: {character.height} cm</li>
          <li>Mass: {character.mass} kg</li>
        </ul>
      </div>
      <div className="mt-4 flex gap-2">
        {/* <button onClick={onView} className="px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700">
          View Detail
        </button>
        <button onClick={onAdd} className="px-3 py-1 rounded border border-indigo-600 text-indigo-600 hover:bg-indigo-100">
          Add to Favourites
        </button> */}
      </div>
    </div>
  );
}
