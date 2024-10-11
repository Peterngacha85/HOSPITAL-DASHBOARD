import React, { useState } from 'react';
import { Bed } from 'lucide-react';

const wards = [
  { id: 'icu', name: 'ICU', totalBeds: 20 },
  { id: 'general', name: 'General', totalBeds: 50 },
  { id: 'pediatric', name: 'Pediatric', totalBeds: 30 },
  { id: 'maternity', name: 'Maternity', totalBeds: 25 },
];

const generateMockBeds = (totalBeds: number) => {
  return Array.from({ length: totalBeds }, (_, i) => ({
    id: i + 1,
    isOccupied: Math.random() < 0.7, // 70% chance of being occupied
  }));
};

const BedAvailability: React.FC = () => {
  const [selectedWard, setSelectedWard] = useState(wards[0].id);
  const [beds, setBeds] = useState(() => generateMockBeds(wards[0].totalBeds));

  const handleWardChange = (wardId: string) => {
    setSelectedWard(wardId);
    const ward = wards.find(w => w.id === wardId);
    if (ward) {
      setBeds(generateMockBeds(ward.totalBeds));
    }
  };

  const availableBeds = beds.filter(bed => !bed.isOccupied).length;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bed Availability</h1>
      <div className="flex space-x-4">
        {wards.map((ward) => (
          <button
            key={ward.id}
            className={`px-4 py-2 rounded-lg ${
              selectedWard === ward.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handleWardChange(ward.id)}
          >
            {ward.name}
          </button>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">
          {wards.find(w => w.id === selectedWard)?.name} Ward
        </h2>
        <p className="text-lg mb-4">
          Available Beds: <span className="font-bold text-green-500">{availableBeds}</span> / {beds.length}
        </p>
        <div className="grid grid-cols-5 gap-4">
          {beds.map((bed) => (
            <div
              key={bed.id}
              className={`p-2 rounded-lg flex items-center justify-center ${
                bed.isOccupied ? 'bg-red-100' : 'bg-green-100'
              }`}
            >
              <Bed className={`w-8 h-8 ${bed.isOccupied ? 'text-red-500' : 'text-green-500'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BedAvailability;