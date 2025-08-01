import React, { useState } from 'react';
import { PropertySearch } from '../components/features/PropertyLookup/PropertySearch';
import { PropertyDetails } from '../components/features/PropertyLookup/PropertyDetails';
import { CommunityComments } from '../components/features/PropertyLookup/CommunityComments';

// Mock data - in real app would come from API
const mockProperties: Record<string, any> = {
  '1234 pearl st': {
    address: '1234 Pearl St, Boulder, CO 80302',
    landlord: 'Boulder Property Management LLC',
    licenseStatus: 'Active',
    violations: [
      {
        date: '2024-01-15',
        type: 'Mold',
        status: 'Resolved',
        description: 'Black mold found in bathroom ceiling, remediated within 72 hours'
      },
      {
        date: '2023-11-20',
        type: 'Heating',
        status: 'Resolved',
        description: 'No heat during cold snap, fixed within 24 hours'
      }
    ],
    comments: [
      {
        id: '1',
        text: 'Had serious mold issues in the bathroom. Landlord did fix it eventually but took multiple requests.',
        date: '2024-01-20',
        helpful: 12,
        anonymous: true
      },
      {
        id: '2',
        text: 'Heat went out in December and they fixed it the same day. Good response time for emergencies.',
        date: '2023-12-01',
        helpful: 8,
        anonymous: false
      }
    ]
  }
};

export const PropertyLookupPage: React.FC = () => {
  const [searchedAddress, setSearchedAddress] = useState<string>('');
  const [propertyData, setPropertyData] = useState<any>(null);

  const handleSearch = (address: string) => {
    setSearchedAddress(address);
    // Simulate API call - normalize address for lookup
    const normalizedAddress = address.toLowerCase().replace(/[,\.]/g, '');
    const property = mockProperties[normalizedAddress];
    
    if (property) {
      setPropertyData(property);
    } else {
      // No data found - show empty state
      setPropertyData({
        address: address,
        violations: [],
        comments: []
      });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Property Health Lookup</h1>
        <p className="mt-2 text-lg text-gray-600">
          Research rental property health history and read community experiences
        </p>
      </div>

      <PropertySearch onSearch={handleSearch} />

      {propertyData && (
        <>
          <PropertyDetails property={propertyData} />
          
          <div className="border-t pt-8">
            <CommunityComments 
              propertyAddress={propertyData.address}
              comments={propertyData.comments || []}
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> This information is compiled from public records and community reports. 
              Always conduct your own inspection and due diligence before renting.
            </p>
          </div>
        </>
      )}

      {searchedAddress && !propertyData && (
        <div className="text-center py-12">
          <p className="text-gray-500">No records found for this address</p>
          <p className="text-sm text-gray-400 mt-2">Try searching with a different format or check the address</p>
        </div>
      )}
    </div>
  );
};