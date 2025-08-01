import React from 'react';
import { DecisionTree } from '../components/features/EmergencyGuide/DecisionTree';
import { EmergencyContacts } from '../components/features/EmergencyGuide/EmergencyContacts';

export const EmergencyGuidePage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Emergency Health Guide</h1>
        <p className="mt-2 text-lg text-gray-600">
          Answer a few questions to determine if your issue requires emergency response under Boulder law
        </p>
      </div>

      <div className="bg-alert-urgent/10 border border-alert-urgent/20 rounded-lg p-4">
        <p className="text-sm font-medium text-alert-urgent">
          ⚠️ If you are in immediate danger, call 911 immediately
        </p>
      </div>

      <DecisionTree />
      
      <div className="mt-12 border-t pt-8">
        <EmergencyContacts />
      </div>
    </div>
  );
};