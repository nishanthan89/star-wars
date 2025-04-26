import mockCharacterData from '../../mockCharacterData';
import Link from 'next/link';

export default async function CharacterDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const characterIndex = parseInt(slug, 10);
  const character = mockCharacterData[characterIndex];

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <main className="p-6">
      <Link href="/dashboard" className="text-blue-600 underline mb-4 inline-block">&larr; Back to Dashboard</Link>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-center">{character.name}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><strong>Height:</strong> {character.height} cm</div>
          <div><strong>Mass:</strong> {character.mass} kg</div>
          <div><strong>Hair Color:</strong> {character.hairColor}</div>
          <div><strong>Skin Color:</strong> {character.hairColor}</div> 
          <div><strong>Eye Color:</strong> {character.hairColor}</div>
          <div><strong>Birth Year:</strong> {character.birthYear}</div>
          <div><strong>Gender:</strong> {character.gender}</div>
        </div>
      </div>
    </main>
  );
}
