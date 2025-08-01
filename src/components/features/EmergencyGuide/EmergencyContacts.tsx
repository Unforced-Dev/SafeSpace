import React from 'react';
import { Card } from '../../common';

interface Contact {
  name: string;
  phone: string;
  description: string;
  hours?: string;
  emergency?: boolean;
}

const contacts: Contact[] = [
  {
    name: 'Emergency Services',
    phone: '911',
    description: 'For immediate health/safety emergencies',
    emergency: true,
  },
  {
    name: 'Boulder County Health Department',
    phone: '(303) 441-3460',
    description: 'Report health code violations and habitability issues',
    hours: 'Mon-Fri 8am-5pm',
  },
  {
    name: 'EPRAS Mediation Services',
    phone: '(303) 442-7060',
    description: 'Free mediation between tenants and landlords',
    hours: 'Mon-Fri 9am-5pm',
  },
  {
    name: 'Colorado Legal Aid',
    phone: '(303) 837-1313',
    description: 'Free legal assistance for qualifying renters',
    hours: 'Mon-Fri 9am-4pm',
  },
  {
    name: 'Boulder Housing Partners',
    phone: '(720) 564-4610',
    description: 'Affordable housing resources and tenant support',
    hours: 'Mon-Fri 8am-5pm',
  },
];

export const EmergencyContacts: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Emergency Contacts</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {contacts.map((contact) => (
          <Card 
            key={contact.phone} 
            className={contact.emergency ? 'border-red-300 bg-red-50' : ''}
          >
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">{contact.name}</h4>
              <a 
                href={`tel:${contact.phone.replace(/\D/g, '')}`}
                className={`text-lg font-medium ${
                  contact.emergency ? 'text-red-600' : 'text-primary-600'
                } hover:underline`}
              >
                {contact.phone}
              </a>
              <p className="text-sm text-gray-600">{contact.description}</p>
              {contact.hours && (
                <p className="text-xs text-gray-500">{contact.hours}</p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};