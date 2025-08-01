import React from 'react';
import { RightsAccordion } from '../components/features/Rights/RightsAccordion';
import { SuccessStories } from '../components/features/Rights/SuccessStories';
import { Card, Button } from '../components/common';

export const KnowYourRightsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Know Your Rights</h1>
        <p className="mt-2 text-lg text-gray-600">
          Understanding Boulder County's 2024 enhanced tenant protections
        </p>
      </div>

      <Card className="bg-primary-50 border-primary-200">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-primary-900">2024 Enhanced Protections</h3>
            <p className="mt-1 text-primary-800">
              Boulder County strengthened tenant rights in 2024 with stricter mold remediation requirements, 
              faster repair deadlines, and increased penalties for landlord violations.
            </p>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Legal Rights</h2>
        <RightsAccordion />
      </div>

      <div className="border-t pt-8">
        <SuccessStories />
      </div>

      <Card className="bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Legal Help?</h3>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium text-gray-900">Colorado Legal Aid</h4>
              <p className="text-sm text-gray-600">Free legal assistance for qualifying tenants</p>
              <a href="tel:3038371313" className="text-primary-600 hover:underline">(303) 837-1313</a>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">CU Boulder Legal Clinic</h4>
              <p className="text-sm text-gray-600">Free consultations for students</p>
              <a href="tel:3034926813" className="text-primary-600 hover:underline">(303) 492-6813</a>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <h4 className="font-medium text-gray-900 mb-2">Document Templates</h4>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="secondary">
                Repair Request Letter
              </Button>
              <Button size="sm" variant="secondary">
                Mold Notice Template
              </Button>
              <Button size="sm" variant="secondary">
                Deposit Return Demand
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> This information is for educational purposes only and does not constitute legal advice. 
          For specific legal guidance, consult with a qualified attorney.
        </p>
      </div>
    </div>
  );
};