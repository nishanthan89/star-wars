// app/page.tsx
import CharacterCard from "../components/characterCard";
import  starwarService from "../services/starwarService";

export default async function Dashboard() {
  const characters = await starwarService.fetchCharacters();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-zinc-800">Star Wars Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((char) => (
          <CharacterCard
            key={char.name}
            character={char}
            onView={() => {/* Navigate to details */}}
            onAdd={() => {/* Add to favorites */}}
          />
        ))}
      </div>
    </main>
  );
}
