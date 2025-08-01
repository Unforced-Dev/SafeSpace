import React, { useState } from 'react';
import { Input } from '../../common/Form';
import { Button } from '../../common';

interface PropertySearchProps {
  onSearch: (address: string) => void;
}

export const PropertySearch: React.FC<PropertySearchProps> = ({ onSearch }) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      onSearch(address.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-3">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Enter property address (e.g., 1234 Pearl St, Boulder, CO)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="text-lg"
          />
        </div>
        <Button type="submit" size="lg">
          Search
        </Button>
      </div>
      <p className="text-sm text-gray-600">
        Search for any Boulder County rental property to view health history and community feedback
      </p>
    </form>
  );
};