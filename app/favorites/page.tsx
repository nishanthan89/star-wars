'use client';

import { useFavorites } from '../context/FavoritesContext';
import { useState } from 'react';
//import Modal from '../components/EditModal'; // Create a simple Modal component
//import { Character } from '../types/Character'; ;

export default function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();
  const [selectedCharacter, setSelectedCharacter] = useState(null);

//   const openModal = (character) => {
//     setSelectedCharacter(character);
//   };

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
          {favorites.map((character, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 relative">
              <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
              <p><strong>Height:</strong> {character.height} cm</p>
              <p><strong>Mass:</strong> {character.mass} kg</p>

              <div className="flex gap-2 mt-4">
                <button 
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  //onClick={() => openModal(character)}
                >
                  Edit
                </button>
                {/* <button 
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => removeFavorite(character.id)}
                >
                  Remove
                </button> */}
              </div>
            </div>
          ))}
        </div>
      )}


    </div>
  );
}



// {selectedCharacter && (
//     <Modal onClose={closeModal}>
//       {/* Inside modal you can allow editing character */}
//       <div>
//         <h2 className="text-xl font-bold mb-4">Edit Character</h2>
//         {/* You can add form here to update fields */}
//         <p>Name: {selectedCharacter.name}</p>
//         {/* Later you can add editable inputs */}
//         <button 
//           className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
//           onClick={closeModal}
//         >
//           Save
//         </button>
//       </div>
//     </Modal>
//   )}
