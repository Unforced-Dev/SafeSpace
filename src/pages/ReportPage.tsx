import React from 'react';
import { ReportForm } from '../components/features/Reporting/ReportForm';

export const ReportPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Report Health Issues</h1>
        <p className="mt-2 text-lg text-gray-600">
          Submit health and safety violations anonymously with photo evidence
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Your privacy is protected
            </h3>
            <p className="mt-1 text-sm text-blue-700">
              Reports can be submitted anonymously. We do not share your information with landlords or property managers.
            </p>
          </div>
        </div>
      </div>

      <ReportForm />
    </div>
  );
};