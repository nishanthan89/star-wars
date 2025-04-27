'use client';
import { useState } from "react";
import CommonButton from '../components/button';

type Character = {
  id: number;
  name: string;
  height: string;
  gender: string;
};

export default function EditModal({ character, onClose }: { character: Character, onClose: () => void }) {
  const [height, setHeight] = useState(character.height);
  const [gender, setGender] = useState(character.gender);

  const handleConfirm = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-2xl mb-4">Edit {character.name}</h2>

        <div className="mb-4">
          <label className="block mb-1">Height</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Gender</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="N/A">N/A</option>
          </select>
        </div>

        <div className="flex justify-end gap-4">
        <CommonButton label="Cancel" variant="outline" onClick={onClose} fullWidth />
        <CommonButton label="Confirm" variant="primary" onClick={handleConfirm} fullWidth />
        </div>
      </div>
    </div>
  );
}
